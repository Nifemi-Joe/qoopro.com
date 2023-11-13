<template>
  <section class="section_contact-modal5">
    <div class="padding-global">
      <div class="container-large">
        <div class="padding-section-large">
          <div class="create-project-nav-menu">
            <router-link :to="routesProject.project.createProject.path" class="create-project-nav-link w-inline-block"><img src="../../assets/images/ArrowLeft.svg" loading="lazy" alt=""></router-link>
            <router-link :to="routesProject.dashboard.homeView.path" class="create-project-nav-link w-inline-block"><img src="../../assets/images/X.svg" loading="lazy" alt=""></router-link>
          </div>
          <div class="createteamwrapper">
            <div class="contact-modal5_content-wrapper">
              <div class="createteamformwrapper">
                <div class="project-modal-header">
                  <h2 class="display-x-small">Create a new project</h2>
                  <p class="body-large">How would you like to start ?</p>
                </div>
                <div class="max-width-medium align-center">
                  <div class="form4_file-upload">
                    <div class="form4_avatar-wrapper"><img :src="url ? url : 'https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg'" loading="lazy" alt="" class="form4_avatar"></div>
                    <label class="btnsec is-secondary is-small max-width-full w-button w--current"><input type="file" style="display: none" id="file" @input="uploadFile('file')"/><span v-if="!showLoader">Upload project image</span><span v-else>Uploading...</span></label>
                  </div>
                  <div class="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="project-form" data-wf-page-id="64d4ea1f600bd67e51e4f540" data-wf-element-id="6ee099a6-dc2f-6a7c-2ced-0d9fde2ba525">
                      <div class="project-form-item"><label for="Team" class="body-small text-color-gray400">Project Name</label><input type="text" v-model="model.projectName" class="project-form-input w-input" maxlength="256" name="Team" data-name="Team" placeholder="Enter a Team name" id="Team" required=""></div>
                      <div class="project-form-item">
                        <label for="name-2" class="body-small text-color-gray400">Due Date</label>
                        <input onfocus="(this.type = 'date')" type="email" class="project-form-input is-date w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Select due date" id="name-2" v-model="model.projectDueDate">
                      </div>
                      <div class="project-form-item"><label for="field" class="body-small text-color-gray400">Project Description</label><textarea v-model="model.projectDescription" placeholder="Enter project description" maxlength="5000" id="field" name="field" data-name="Field" class="project-form-input text-area w-input"></textarea></div>
                      <div class="project-form-item" v-if="teams.teams.data.length > 0"><label for="Select-Team" class="body-small text-color-gray400">Select team</label><select id="Select-Team" name="Select-Team" data-name="Select Team" class="project-form-input w-select">
                        <option value="">Select team</option>
                        <option :value="teamss.teamId" v-for="(teamss, index) in teams.teams.data" :key="index">{{teamss.teamName}}</option>
                      </select></div>
                      <a data-w-id="b4a5cdc3-fa52-947e-f764-d0c7849eeada" href="#" class="button w-button" v-if="!project.loading" @click="create">Create Project</a>
                      <base-buttons v-else/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SuccessModal :module="'project'" :module-path="routesProject.dashboard.projects.path" v-if="project.project.responseCode === '00'" :close-modal="closeModal"/>
  </section>
</template>

<script>
import RouterUtils from "@/util/baseUtils/RouterUtils";
import SuccessModal from "@/components/modals/SuccessModal";
import ProjectRequest from "@/model/request/ProjectRequest";
import {mapState} from "vuex";
import BaseNotification from "@/components/notification/BaseNotification";
import S3Request from "@/model/request/S3Request";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseButtons from "@/components/buttons/BaseButtons.vue";
import router from "@/router";

export default {
  name: "CreateProjectScratchView",
  data(){
    return{
      showSuccess: false,
      model: ProjectRequest.create,
      showLoader: false,
      uploadmodel: S3Request.uploadBase64,
      fileName: "",
      base64: "",
      url: ""
    }
  },
  components: {BaseButtons, SuccessModal},
  computed:{
    routesProject(){
      return RouterUtils.routes
    },
    ...mapState(["auth","teams", "project","sbucket"])
  },
  methods:{
    create(){
      StoreUtils.dispatch(StoreUtils.actions.project.createProject, this.model).then(()=>{
        setTimeout(() => {
          router.push("/projects")
        },2000)
      })
    },
    openModal(){
      this.showSuccess = true;
    },
    closeModal(){
      document.querySelector('.success-modal-component').style.display = 'none';
    },
    uploadFile(id) {
      let input = document.getElementById(id)
      console.log(input)
      let files = input.files;
      console.log(files)
      this.fileName = files[0].name;
      let size = files[0].size / 1000000;
      console.log(size);
      if (size > 5) {
        BaseNotification.fireToast("error", "File size must not be more than 5mb, please try with a reduced file size").then()
        return;
      }
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base64 = e.target.result;
          this.uploadOfficerImage();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage() {
      this.showLoader = true;
      this.uploadmodel.username = `${
          this.auth.userInfo.data.customerFirstName + this.auth.userInfo.data.customerLastName
      }_${Date.now()}`;
      this.uploadmodel.base64 = this.base64;
      await this.$store.dispatch(
          "sbucket/uploadEncodedFile",
          this.uploadmodel,
          { root: true }
      );
      this.url = this.sbucket.url;
      console.log(this.url)
      this.showLoader = false;
    },
  },
  mounted(){
    StoreUtils.commit(StoreUtils.mutations.project.updateProject , {responseCode: "100"})

  }

}
</script>

<style scoped>

</style>
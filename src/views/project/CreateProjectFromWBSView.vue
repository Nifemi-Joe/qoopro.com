<template>
  <section class="section_contact-modal5">
    <div class="padding-global">
      <div class="container-large">
        <div class="padding-section-large">
          <div class="create-project-nav-menu">
            <router-link :to="routesProject.project.createProject.path" class="create-project-nav-link w-inline-block">
              <img src="../../assets/images/ArrowLeft.svg" loading="lazy" alt="">
            </router-link>
            <router-link :to="routesProject.dashboard.homeView.path" class="create-project-nav-link w-inline-block">
              <img src="../../assets/images/X.svg" loading="lazy" alt="">
            </router-link>
          </div>
          <div class="contact-modal5_component">
            <div class="contact-modal5_content-wrapper">
              <div class="project-modal-container">
                <div class="project-modal-header">
                  <h2 class="display-x-small">First, tell us about your project?</h2>
                  <p class="body-large">Import from Spreadsheet</p>
                </div>
                <div class="max-width-medium align-center">
                  <div class="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="project-form" data-wf-page-id="64d4aebea8b65943ddc7ceeb" data-wf-element-id="6ee099a6-dc2f-6a7c-2ced-0d9fde2ba525">
                      <div class="project-form-item"><label for="name" class="body-small text-color-gray400">Name</label>
                        <input type="text" class="project-form-input w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter a name" id="name" required="">
                      </div>
                      <div class="project-form-item">
                        <label for="name" class="body-small text-color-gray400">Select Existing Members</label>
                        <select class="project-form-input isicon w-input"  v-for="(member, index) in teams.allTeamMembers" :key="index" maxlength="256" name="Form-4-Email" data-name="Form 4 Email" id="Form-4-Email">
                        <option :value="member.customerEmail" >{{member.customerEmail}}</option>
                        </select>
                      </div>
                      <div class="project-form-item">
                        <label for="file-3" class="link-block w-inline-block"  style="cursor: pointer; ">
                        <input id="file-3" style="cursor: pointer; display: none" type="file" class="upload-file" @change="uploadFile('file-3')" accept=".csv,.xlsx,.xlsm">
                          <img src="../../assets/images/CloudArrowUp.svg" loading="lazy" alt="">
                          <div class="body-small text-color-gray400" v-if="!showLoader && !fileName">Upload WBS</div>
                          <div class="body-small text-color-gray400" v-if="showLoader">Uploading...</div>
                          <div class="body-small text-color-gray400" v-if="fileName !== '' && !showLoader">{{fileName}}</div>

                        </label>
                      </div>
                      <a href="https://veezahrepo.s3.amazonaws.com/Qoopro_800_003_QooproProductDefinition.xlsm" style="color: #5f57ff; align-self: end">Click to Download Template</a>
                      <a data-w-id="1b864022-40af-7442-5ffd-9123fa587fea" href="#" class="button w-button">Create</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RouterUtils from "@/util/baseUtils/RouterUtils";
import {mapState} from "vuex";
import BaseNotification from "@/components/notification/BaseNotification";
import s3Request from "@/model/request/S3Request";

export default {
  name: "CreateProjectFromWBSView",
  data(){
    return {
      fileName: "",
      base64: "",
      showLoader: false,
      uploadmodel: s3Request.uploadBase64,
      url: ""
    }
  },
  computed:{
    routesProject(){
      return RouterUtils.routes
    },
    ...mapState(["auth","teams", "sbucket"])
  },
  methods: {
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
          this.auth.userInfo.customerFirstName + this.auth.userInfo.customerLastName
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
  }
}
</script>

<style scoped>

</style>
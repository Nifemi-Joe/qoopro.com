<script>
import TeamRequest from "@/model/request/TeamRequest";
import {mapState} from "vuex";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import SuccessModal from "@/components/modals/SuccessModal.vue";
import BaseButtons from "@/components/buttons/BaseButtons.vue";
import BaseNotification from "@/components/notification/BaseNotification";
import s3Request from "@/model/request/S3Request";

export default{
  name: "AddTeamModal",
  components: {BaseButtons, SuccessModal},
  data(){
    return{
      model: TeamRequest.create,
      stage: 1,
      email: [],
      allMembers: [],
      count: 1,
      fileName: "",
      base64: "",
      url: "",
      showLoader: false,
      uploadmodel: s3Request.uploadBase64,
      success: false,
    }
  },
  computed:{
  ...mapState({
      teams: state => state.teams,
      auth: state => state.auth,
      sbucket: state => state.sbucket,
    })
  },
  methods:{
    addNew(event){
      this.email.push(event.target.value)
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
    async submit(){
      this.model.teamLeader = `${this.auth.userInfo.customerId}`;
      this.model.teamLogo = this.url;
      if (this.email.length > 0){
        this.model.teamMembers = this.email;
      }
      this.model.teamStatus = "ACTIVE";
      StoreUtils.dispatch(StoreUtils.actions.team.createTeam, this.model).then((res) => {
        if (res.responseCode === "00"){
          this.success = true;
          this.stage++
        }
      });
    },
    addMember(){
      StoreUtils.dispatch(StoreUtils.actions.team.addUserToTeam, {teamId: this.teams.team[0].teamId})
    },
    pushEmail(event){
      this.email.push(event.target.value)
    }
  },
  mounted(){
    StoreUtils.commit(StoreUtils.mutations.team.updateTeam, {responseCode: "100"})
  }
}
</script>

<template>
  <section class="section_contact-modal5">
    <div class="padding-global">
      <div class="container-large">
        <div class="padding-section-large">
          <div class="create-project-nav-menu">
            <router-link to="/home" class="create-project-nav-link w-inline-block"><img src="../../assets/images/X.svg" loading="lazy" alt=""></router-link>
          </div>
          <div class="createteamwrapper">
            <div class="contact-modal5_content-wrapper">
              <div class="createteamformwrapper">
                <div class="project-modal-header">
                  <h2 class="display-x-small">Create a new team</h2>
                  <p class="body-large">How would you like to start ?</p>
                </div>
                <div class="max-width-medium align-center">
                  <div class="form4_file-upload">
                    <div class="form4_avatar-wrapper"><img :src="url ? url : 'https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg'" loading="lazy" alt="" class="form4_avatar"></div>
                    <label class="btnsec is-secondary is-small max-width-full w-button"><input type="file" id="file" style="display: none" @input="uploadFile('file')"/> <span v-if="!showLoader">Upload Team Logo</span><span v-else>Uploading...</span></label>
                  </div>
                  <div class="w-form" v-if="stage === 1 ">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="project-form" data-wf-page-id="6530689dfc1fd2625494b77c" data-wf-element-id="6ee099a6-dc2f-6a7c-2ced-0d9fde2ba525">
                      <div class="project-form-item"><label for="Team" class="body-small text-color-gray400">Team Name</label><input type="text" v-model="model.teamName" class="project-form-input w-input" maxlength="256" name="Team" data-name="Team" placeholder="Enter a Team name" id="Team" required=""></div>
                      <div class="project-form-item"><label for="Team" class="body-small text-color-gray400">Team Description</label><textarea v-model="model.teamDescription" class="project-form-input w-input" maxlength="256" name="Team" data-name="Team" placeholder="Enter a Team Description..." id="Team Description" required="" style="height: 100px; padding: 10px 14px"></textarea></div>
                      <div class="addmembersitem" v-if="teams.allTeamMembers.length > 0"><label for="field" class="body-small text-color-gray400">Invite Existing Team Members</label>
                        <div class="div-block-34">
                          {{tem}}
                          <div class="inviteteammember" v-for="(member, index) in teams.allTeamMembers" :key="index"><select class="project-form-input isicon-left w-input" maxlength="256" name="Form-4-Email" data-name="Form 4 Email" id="Form-4-Email">
                            <option :value="member.customerEmail" >{{member.customerEmail}}</option>
                          </select>
                            <div class="form-icon-left">
                              <div class="icon-embed-xsmall-2 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="currentColor"></path>
                              </svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a @click="submit" data-w-id="b4a5cdc3-fa52-947e-f764-d0c7849eeada" v-if="!teams.loading" class="button w-button">Continue</a>
                      <base-buttons v-else/>
                    </form>
                  </div>
                  <div class="w-form" v-else>
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="project-form" data-wf-page-id="6530689dfc1fd2625494b77c" data-wf-element-id="6ee099a6-dc2f-6a7c-2ced-0d9fde2ba525">
                      <div class="addmembersitem"><label for="field" class="body-small text-color-gray400">Invite Team Members</label>
                        <div class="div-block-34">
                          <div class="inviteteammember" v-for="(count, index) in count" :key="index"><input @change="addNew" type="email" class="project-form-input isicon-left w-input" maxlength="256" name="Form-4-Email-2" data-name="Form 4 Email 2" placeholder="joe@email.com" id="Form-4-Email-2">
                            <div class="form-icon-left">
                              <div class="icon-embed-xsmall-2 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="currentColor"></path>
                              </svg></div>
                            </div>
                          </div>
                        </div>
                        <a class="btnsec is-secondary is-small w-button" @click="count++">Add another</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SuccessModal v-if="success" :module="'team'" :module-path="myRoutes.dashboard.team.path"/>
  </section>
</template>

<style scoped>
.create-project-nav-menu{
  justify-content: end;
}
</style>
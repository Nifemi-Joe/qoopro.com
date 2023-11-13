<template>
  <div class="invite-team-modal_component">
    <div class="invite-team_content-wrapper">
      <div class="heading-large text-color-gray600 text-align-center">Invite Teammates to Workspace</div>
      <div class="modal-divider"></div>
      <div class="login-modal1_form-block w-form">
        <form id="wf-form-Log-in-Form-1" name="wf-form-Log-in-Form-1" data-name="Log in Form 1" method="get" class="login-modal1_form" data-wf-page-id="64d3a6f732558478d55540a4" data-wf-element-id="150b713c-cf1f-c1b6-041a-c22cbbddfe78">
          <div class="form-field-wrapper-3">
            <div class="team-modal-form-field">
              <div class="body-small text-color-gray400">Full Name</div><input type="text" v-model="model.teamName" class="form-input w-input" maxlength="256" name="Form-10-Email-3" data-name="Form 10 Email 3" placeholder="Enter Full Name" id="Form-10-Email-3">
            </div>
            <div class="team-modal-form-field">
              <div class="body-small text-color-gray400">Email Address</div><input type="email" class="form-input w-input" maxlength="256" name="Form-10-Email-2" data-name="Form 10 Email 2" placeholder="Enter email address" id="Form-10-Email-2">
            </div>
            <div class="team-modal-form-field">
              <div class="body-small text-color-gray400">Add to Project</div><select id="field-4" name="field-4" data-name="Field 4" class="form-input w-select">
              <option value="">Select project</option>
              <option value="First">First choice</option>
              <option value="Second">Second choice</option>
              <option value="Third">Third choice</option>
            </select>
            </div>
          </div>
          <a href="../dashboard/teamview.html" aria-current="page" class="button w-button w--current">Invite</a>
        </form>
        <div class="success-message w-form-done">
          <div class="success-text">Thank you! Your submission has been received!</div>
        </div>
        <div class="error-message w-form-fail">
          <div class="error-text">Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <a @click="closeNewModal('.invite-team-modal_component')" data-w-id="150b713c-cf1f-c1b6-041a-c22cbbddfe8d" href="#" class="login-modal1_close-button w-inline-block">
        <div class="icon-embed-small hide-mobile-landscape w-embed"><svg width="100%" height="100%" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.056 23.5004L23.5004 24.056C23.1935 24.3628 22.696 24.3628 22.3892 24.056L16 17.6668L9.61078 24.056C9.30394 24.3628 8.80645 24.3628 8.49961 24.056L7.94403 23.5004C7.63719 23.1936 7.63719 22.6961 7.94403 22.3892L14.3332 16L7.94403 9.61081C7.63719 9.30397 7.63719 8.80648 7.94403 8.49964L8.49961 7.94406C8.80645 7.63721 9.30394 7.63721 9.61078 7.94406L16 14.3333L22.3892 7.94404C22.6961 7.6372 23.1935 7.6372 23.5004 7.94404L24.056 8.49963C24.3628 8.80647 24.3628 9.30395 24.056 9.61079L17.6667 16L24.056 22.3892C24.3628 22.6961 24.3628 23.1936 24.056 23.5004Z" fill="currentColor"></path>
        </svg></div><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt="" class="show-mobile-landscape">
      </a>
    </div>
    <div data-w-id="150b713c-cf1f-c1b6-041a-c22cbbddfe90" class="modal_background-overlay"></div>
  </div>
</template>

<script>
import TeamRequest from "@/model/request/TeamRequest";

export default {
  name: "InviteTeamMemberModal",
  props:{
    closeModal: Function
  },
  data(){
    return {
      model: TeamRequest.create
    }
  },
  methods:{
    openNewModal(className){
      document.querySelector(className).style.display = "flex"
      setTimeout(() => {
        document.querySelector(className).style.opacity = 1
      },500  )
    },
    closeNewModal(className){
      document.querySelector(className).style.opacity = 0
      setTimeout(() => {
        document.querySelector(className).style.display = "none"
      },500  )
    },
  }

}
</script>

<style scoped>

</style>
<template>
  <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form" data-wf-page-id="64bca768082c3534bd6929cf" data-wf-element-id="425236b4-6a76-64b2-80c3-95a6b1eabaa1">
    <img src="../../assets/images/Logo.svg" loading="lazy" alt="" class="logo">
    <div class="form-title">
      <h6 class="form-heading">Verify email address</h6>
      <p class="form-title-sub">Enter OTP code sent to email</p>
    </div>
    <div class="form-wrapper">
      <div class="form-field-wrapper">
        <input type="text" v-model="otp"  @input="validateOtp" class="form-input w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter OTP Code" id="name-3">
        <div class="auth-error" v-if="otpErrorVisible">{{ otpErrorVisible }}</div>
      </div>
      <input @click="verifyEmail"  v-if="!loading" type="submit" value="Verify OTP" data-wait="Please wait..." class="button w-button">
      <base-buttons v-else/>
      <div class="form-field-link-wrapper">

        <label for="name-5" class="field-label text-color-gray600">Didn't get the code?</label>
        <a @click="getOtp" v-if="!resendLoading" href="#" class="text-style-link text-align-right">Resend OTP</a>
        <base-buttons v-else/>
      </div>
    </div>
  </form>
</template>

<script>
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import {mapState} from "vuex";
import BaseButtons from "@/components/buttons/BaseButtons";
import StoreUtils from "@/util/baseUtils/StoreUtils";

export default {
  name: "VerifyEmailForm",
  components: {BaseButtons},
  data(){
    return {
      model:  AuthenticationRequest.completeEnrollment,
      resendModel:  AuthenticationRequest.resendOtp,
      otp: "",
      otpErrorVisible: "",
      resendLoading: false
    }
  },
  computed:{
    ...mapState({
      userEmail: state => state.auth.userEmail,
      userPassword: state => state.auth.userPassword,
      loading: state => state.auth.loading
    })
  },
  methods:{
    validateOtp(){
      const regex = /^\d{4}$/;
      if(this.otp.length === 0){
        this.otpErrorVisible = 'OTP is required';
      }
      else{
        if (!regex.test(this.otp)) {
          this.otpErrorVisible = 'Please enter a valid 4-digit OTP';
        } else {
          this.otpErrorVisible = '';
        }
      }
    },
    verifyEmail(){
      this.model.customerOtp = this.otp;
      this.model.customerEmail = this.userEmail;
      this.model.confirmPassword = this.userPassword;
      this.model.customerPassword = this.userPassword;
      StoreUtils.dispatch("auth/completeEnrollment", this.model)
    },
    getOtp(){
      this.resendLoading = true;
     this.resendModel.username = this.userEmail;
     StoreUtils.dispatch("auth/resendOtp", this.resendModel).then(() => {
       this.resendLoading = false;
     })
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <form id="email-form" name="email-form" data-name="Email Form" redirect="/successfulsignup" data-redirect="/successfulsignup" method="get" class="form" data-wf-page-id="64b9af0a71c775e71871ed40" data-wf-element-id="425236b4-6a76-64b2-80c3-95a6b1eabaa1">
    <img loading="lazy" src="../../assets/images/Logo.svg" alt="" class="logo">
    <div class="form-title">
      <h6 class="form-heading">Create your QooPro account</h6>
    </div>
    <div class="form-wrapper">
      <div class="_2-col">
        <div class="form-field-wrapper">
          <input type="text" v-model="firstName" class="form-input w-input" maxlength="256" name="name" data-name="Name" placeholder="First Name" id="name">
          <div class="auth-error" v-if="firstNameErrorVisible">First name is required</div>
        </div>
        <div class="form-field-wrapper">
          <input type="text" v-model="lastName" class="form-input w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="Last Name" id="name-4">
          <div class="auth-error" v-if="lastNameErrorVisible">Last name is required</div>
        </div>
      </div>
      <div class="form-field-wrapper">
        <input type="email" v-model="email" @input="validateEmail" class="form-input w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="E-mail Address" id="name-3">
        <div class="auth-error" v-if="emailErrorVisible">{{ emailErrorVisible }}</div>
      </div>
      <div class="form-field-wrapper">
        <input type="number"  v-model="phone" @input="validatePhoneNumber" class="form-input w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="Phone number" id="name-5">
        <div class="auth-error" v-if="phoneErrorVisible">{{ phoneErrorVisible }}</div>
      </div>
      <div class="form-field-wrapper">
        <input type="password" v-model="password" class="form-input w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Password" id="name-2">
        <div class="auth-error" v-if="passwordErrorVisible">Password is required</div>
      </div>
      <input @click="signUp" v-if="!loading" type="submit" value="Get Started" data-wait="Please wait..." class="button w-button">
      <base-buttons v-else/>
      <div class="form-field-link-wrapper">
        <label for="name-5" class="field-label text-color-gray600">Already have an account?</label>
        <router-link to="/" class="text-style-link text-align-right">Log In</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseButtons from "@/components/buttons/BaseButtons";
import {mapState} from "vuex";

export default {
  name: "SignUpForm",
  components: {BaseButtons},
  data(){
    return{
      model: AuthenticationRequest.initiateEnrollment,
      phone: "",
      email: "",
      firstName:"",
      lastName:"",
      password: "",
      firstNameErrorVisible: false,
      lastNameErrorVisible: false,
      emailErrorVisible: false,
      phoneErrorVisible: "",
      passwordErrorVisible: false,


    }
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading
    })
  },
  methods:{
    signUp(){
      this.model.customerFirstName = this.firstName;
      this.model.customerLastName = this.lastName;
      this.model.customerEmail = this.email;
      this.model.customerPassword = this.password;
      this.model.customerPhoneNumber = this.phone;
      this.model.customerCountryCode = "+234";
      this.model.customerCountry = "Nigeria";
      StoreUtils.dispatch("auth/initiateEnrollment", this.model).then(()=>{
        StoreUtils.commit("auth/updateEmail", this.email);
        StoreUtils.commit("auth/updatePassword", this.password);
      })
    },
    validatePhoneNumber() {
      const regex = /^\d{11}$/;
      if(this.phone.length === 0){
        this.phoneErrorVisible = 'Phone number is required';
      }
      else{
        if (!regex.test(this.phone)) {
          this.phoneErrorVisible = 'Please enter a valid 11-digit phone number';
        } else {
          this.phoneErrorVisible = '';
        }
      }
    },
    validateEmail(){
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(this.email.length === 0){
        this.emailErrorVisible = 'Email is required';
      }
      else{
        if (!regex.test(this.email)) {
          this.emailErrorVisible = 'Please enter a valid email address';
        } else {
          this.emailErrorVisible = '';
        }
      }
    },
  },
  watch:{
    firstName(){
      if(this.firstName.length === 0){
        this.firstNameErrorVisible = true;
      }
      else{
        this.firstNameErrorVisible = false;
      }
    },
    lastName(){
      if(this.lastName.length === 0){
        this.lastNameErrorVisible = true;
      }
      else{
        this.lastNameErrorVisible = false;
      }
    },
    password(){
      if(this.password.length === 0){
        this.passwordErrorVisible = true;
      }
      else{
        this.passwordErrorVisible = false;
      }

    },
  }
}
</script>

<style scoped>

</style>
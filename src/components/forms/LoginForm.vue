<template>
  <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form" data-wf-page-id="64bcd395c380dc07d91290ed" data-wf-element-id="425236b4-6a76-64b2-80c3-95a6b1eabaa1">
    <img src="../../assets/images/Logo.svg" loading="lazy" alt="" class="logo">
    <div class="form-title">
      <h2 class="heading-style-h2 text-color-gray900">Log In</h2>

    </div>
    <div class="form-wrapper">
      <div class="form-field-wrapper">
        <input type="email" v-model="email" class="form-input w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3">
        <div class="auth-error" v-if="emailErrorVisible">Email is required</div>
      </div>
      <div class="form-field-wrapper">
        <input type="password" v-model="password" class="form-input w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
        <div class="auth-error" v-if="passwordErrorVisible">Password is required</div>
        <div class="div-block-27">
          <a href="#" class="text-style-link text-align-right">Forgot your password?</a>
        </div>
      </div>
      <input @click="callLogin" v-if="!loading" type="submit" value="Log In" data-wait="Please wait..." class="button w-button">
      <base-buttons v-else/>
      <a href="#" class="button is-secondary is-small is-icon w-inline-block">
        <img src="../../assets/images/googleLogo.svg" loading="lazy" alt="">
        <div>Log in with Google</div>
      </a>
      <div class="form-field-link-wrapper">
        <label for="name-5" class="field-label text-color-gray600">Don’t have an account?</label>
        <router-link to="/sign-up" class="text-style-link text-align-right">Sign Up</router-link>


      </div>
    </div>
  </form>
</template>

<script>
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import BaseButtons from "@/components/buttons/BaseButtons";
import {mapState} from "vuex";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import CustomerRequest from "@/model/request/CustomerRequest";

export default {
  name: "LoginForm",
  components: {BaseButtons},
  data(){
    return{
      model: AuthenticationRequest.login,
      password: "",
      email: "",
      emailErrorVisible: false,
      passwordErrorVisible: false,
      readModel: CustomerRequest.readById

    }
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      userInfo: state => state.auth.userInfo
    })
  },
  methods:{
    callLogin(){
      this.model.customerUsername = this.email;
      this.model.customerPassword = this.password;
      StoreUtils.dispatch("auth/login", this.model).then(
          () => {
            this.readModel.customerId = this.userInfo.customerId;
            StoreUtils.dispatch("customer/readCustomerById", this.readModel)
          }
      )
    }
  },
  watch:{
    email(){
      if(this.email.length === 0){
        this.emailErrorVisible = true;
      }
      else{
        this.emailErrorVisible = false;
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
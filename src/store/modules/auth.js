import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import AuthenticationService from "@/service/AuthenticationService";
import RouterUtils from "@/util/baseUtils/RouterUtils";
import BaseNotification from "@/components/notification/BaseNotification";
export const state = {
    loading: false,
    userInfo: {},
    token: null,
    userEmail: null,
    userPassword: null,
};

export const getters = {
  getToken: (state) => {
    return state.token ? state.token : localStorage.token;
  },
  getUserInfo: (state) => {
    // console.log("getter getTok")
    return state.userInfo;
  }
};

export const mutations = {
  updateLoading(state, payload){
    state.loading = payload
  },
  updateUserInfo(state, payload){
    state.userInfo = payload
  },
  updateToken(state, payload){
    state.token = payload
  },
  updateEmail(state, payload){
    state.userEmail = payload
  },
  updatePassword(state, payload){
    state.userPassword = payload
  }
};

export const actions = {
  login(){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callLoginApi(AuthenticationRequest.login).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data;
      if (responseData.responseCode === "00"){
        StoreUtils.commit(StoreUtils.mutations.auth.updateUserInfo, responseData.data);
        StoreUtils.dispatch("task/readTask")
        StoreUtils.dispatch("teams/readTeam")

        StoreUtils.commit(StoreUtils.mutations.auth.updateToken, responseData.data.token);

        localStorage.setItem("token", responseData.data.token);
        RouterUtils.navigateTo(RouterUtils.routes.dashboard.homeView.name)

      }else {
        BaseNotification.fireToast("error", responseData.responseMessage).then()
      }

    }).catch(error=>{
      BaseNotification.fireToast("error", error).then()
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },
  initiateEnrollment(){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callInitiateEnrollmentApi(AuthenticationRequest.initiateEnrollment).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data;
      if (responseData.responseCode === "00"){
        BaseNotification.fireToast("success", responseData.responseMessage).then(
            () => {
              RouterUtils.navigateTo(RouterUtils.routes.auth.otpview.name)
            }
        )
      }else{
        BaseNotification.fireToast("error", responseData.responseMessage).then()
        StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      }
    }).catch(error=>{
      BaseNotification.fireToast("error", error).then()
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },
  completeEnrollment(){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callCompleteEnrollmentApi(AuthenticationRequest.completeEnrollment).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data;
      if (responseData.responseCode === "00"){
          RouterUtils.navigateTo(RouterUtils.routes.auth.successview.name)
      }else{
        BaseNotification.fireToast("error", responseData.responseMessage).then()
      }
    }).catch(error=>{
      BaseNotification.fireToast("error", error).then();
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },
  resendOtp(){
    // StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callResendOtpApi(AuthenticationRequest.resendOtp).then(response=>{
      // StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        BaseNotification.fireToast("success", responseData.responseMessage).then()

      }else{
        BaseNotification.fireToast("error", responseData.responseMessage).then()
      }
    }).catch(error=>{
      BaseNotification.fireToast("error", error).then();
      // StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },
  getUserDetails( payload = {}){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callUserDetailsApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === '00'){
        StoreUtils.dispatch("task/readTask")
        StoreUtils.dispatch("teams/readTeam")

        StoreUtils.commit(StoreUtils.mutations.auth.updateUserInfo, responseData)
      }
        // else{
      //   RouterUtils.navigateTo(RouterUtils.routes.auth.loginview.name)
      // }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },
  changePassword(){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callChangePasswordApi(AuthenticationRequest.changePassword).then(response => {
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data;
      if (responseData.responseCode === "00"){
        BaseNotification.fireToast("success", responseData.responseMessage).then()
      }else {
        BaseNotification.fireToast("error", responseData.responseMessage).then()
      }

    }).catch(error=>{
      BaseNotification.fireToast("error", error).then()
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },
  logout(){
    localStorage.clear();
    RouterUtils.navigateTo(RouterUtils.routes.auth.loginview.path);
  }
};

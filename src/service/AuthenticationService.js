import client  from "./BaseService";

export default {
  callLoginApi(payload) {
    return client.apiClient.post("authentication/login", payload);
  },
  callInitiateEnrollmentApi(payload) {
    return client.apiClient.post("authentication/initiate-enrollment", payload);
  },
  callCompleteEnrollmentApi(payload){
    return client.apiClient.post("authentication/complete-enrollment", payload)
  },
  callResendOtpApi(payload){
    return client.apiClient.post("authentication/resend-otp",payload)
  },
  callInitiatePasswordResetApi(payload){
    return client.apiClient.post("authentication/initiate-password-reset",payload)
  },
  callCompletePasswordResetApi(payload){
    return client.apiClient.post("authentication/complete-password-reset",payload)
  },
  callChangePasswordApi(payload){
    return client.apiClient.post("customer/change-password",payload)
  },
  callUserDetailsApi(){
    return client.apiClient.get("authentication/user-details",{})
  }
};

class AuthenticationRequest {
  static login = {
    customerUsername: null,
    customerPassword: null,
  };

  static initiateEnrollment = {
    customerCountryCode: "+234",
    customerCountry: "Nigeria",
    customerEmail: null,
    customerFirstName: null,
    customerLastName: null,
    customerDob: null,
    customerGender: null,
    customerPhoneNumber: null,
    customerPassword: null,
    source: "WEB"
  };

  static completeEnrollment = {
    customerOtp: null,
    customerPassword: null,
    confirmPassword: null,
    customerEmail: null
  };

  static resendOtp = {
    // customerEmail: null,
    // countryCode: null,
    username: null
  };

  static initiateResetPassword = {
    username: null,
    countryCode: "+1"
  };

  static completeResetPassword = {
    customerEmail: null,
    customerPassword: null,
    customerPasswordConfirmation: null,
    customerOtp: null
  };

  static changePassword = {
    currentPassword: null,
    newPassword: null,
    confirmPassword: null
  };
}

export default AuthenticationRequest;

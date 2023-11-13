/*
This file goes as an asset without any of compilation even after build process.
Thus, it can be replaced in a runtime by different file in another environment.

Example for Docker:
  docker run -v ./local_cfg_dir:cfg image:tag
*/

(function (window) {
  window.__env = window.__env || {};

  window.__env.app = {
    title: "Corstep Portal",
    description: "Corstep Portal",
    primaryColor: "#6d0606",
    appUrl: "https://dev.apvertise.com",
    logo: "https://veezahrepo.s3.amazonaws.com/images/Group-22425.png",
  };
  console.log(window.document.location.host)
  if(window.document.location.host.includes("app.rubieswire.com")) {
    window.__env.api = {
      baseUrl: "https://81o019i4q4.execute-api.us-east-1.amazonaws.com/prod/",
      uploadS3BaseUrl: "https://m2nz1o078e.execute-api.us-east-1.amazonaws.com/prod/",
      timeout: 80000,
    };
  }else {
    window.__env.api = {
      baseUrl: "https://81o019i4q4.execute-api.us-east-1.amazonaws.com/dev/",
      uploadS3BaseUrl: "https://m2nz1o078e.execute-api.us-east-1.amazonaws.com/prod/",
      timeout: 80000,
    };
  }
  window.__env.captcha = {
    enabled: true,
    key: "Mee1ieth1IeR8aezeiwi0cai8quahy",
  };
  window.__env.rollbar = {
    enabled: true,
    token: "zieriu1Saip5Soiquie6zoo7shae0o",
  };
  window.__env.debug = false;
})( this );



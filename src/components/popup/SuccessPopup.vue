<template>
  <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form" data-wf-page-id="64bca9c146471cbebdba5726" data-wf-element-id="425236b4-6a76-64b2-80c3-95a6b1eabaa1"><img src="../../assets/images/Logo.svg" loading="lazy" alt="" class="logo">
<!--    <div class="success-lottie" data-w-id="f3dc6b18-9095-b6f0-fa5e-266aeed8f552" data-animation-type="lottie" data-src="../documents/animation_lkf2ri65.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.4" data-duration="0">-->
<!--    </div>-->
    <vLottiePlayer
        name="success-lottie"
        class="success-lottie"
        loop
        :animationData="
                      require('../../assets/documents/success.json')
                    "
        width="100%"
        height="80px"
    />
    <div class="form-title">
      <h6 class="form-heading">Successful signup</h6>
      <p class="form-title-sub text-color-gray600">Your QooPro account has been created successfully</p>
    </div>
    <div class="form-wrapper">
      <router-link :to="myRoutes.auth.loginview.path" class="button w-button">Proceed to login</router-link>
    </div>
  </form>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";
import RouterUtils from "@/util/baseUtils/RouterUtils";
export default {
  name: "SuccessPopup",
  components:{ vLottiePlayer: VueLottiePlayer},
  computed:{
    myRoutes(){
      return RouterUtils.routes;
    }
  }

}
</script>

<style scoped>

</style>
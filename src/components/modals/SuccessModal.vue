<template>
  <div class="success-modal-component">
    <div class="task-modal_content-wrapper">
      <div class="margin-bottom margin-medium">
        <div class="onboarding-form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form" data-wf-page-id="64d4ea1f600bd67e51e4f540" data-wf-element-id="2651a249-f474-e9b4-321b-f044618d9b21">
<!--            <div class="lottie-success" data-w-id="2651a249-f474-e9b4-321b-f044618d9b22" data-animation-type="lottie" data-src="../documents/success.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2" data-duration="0"></div>-->
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
              <p class="body-large">You’ve just created a new {{ module }}</p>
            </div>
            <div class="form-wrapper">
              <router-link :to="modulePath" class="button w-button">Continue</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <a @click="closeNewModal('.success-modal-component')" data-w-id="2651a249-f474-e9b4-321b-f044618d9b2f" href="#" class="login-modal1_close-button-2 w-inline-block">
      <div class="icon-embed-small hide-mobile-landscape w-embed">
        <svg width="100%" height="100%" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M24.056 23.5004L23.5004 24.056C23.1935 24.3628 22.696 24.3628 22.3892 24.056L16 17.6668L9.61078 24.056C9.30394 24.3628 8.80645 24.3628 8.49961 24.056L7.94403 23.5004C7.63719 23.1936 7.63719 22.6961 7.94403 22.3892L14.3332 16L7.94403 9.61081C7.63719 9.30397 7.63719 8.80648 7.94403 8.49964L8.49961 7.94406C8.80645 7.63721 9.30394 7.63721 9.61078 7.94406L16 14.3333L22.3892 7.94404C22.6961 7.6372 23.1935 7.6372 23.5004 7.94404L24.056 8.49963C24.3628 8.80647 24.3628 9.30395 24.056 9.61079L17.6667 16L24.056 22.3892C24.3628 22.6961 24.3628 23.1936 24.056 23.5004Z" fill="currentColor"></path>
        </svg>
      </div>
      <img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt="" class="show-mobile-landscape">
    </a>
    <div data-w-id="2651a249-f474-e9b4-321b-f044618d9b32" class="modal_background-overlay"></div>
  </div>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";
import RouterUtils from "@/util/baseUtils/RouterUtils";
export default {
  name: "SuccessModal",
  components:{ vLottiePlayer: VueLottiePlayer},
  props:{
    closeModal: Function,
    module: String,
    modulePath: String
  },

  computed:{
    myRoutes(){
      return RouterUtils.routes;
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
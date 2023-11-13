<template>
  <div class="new-modal_component">
    <div class="new-modal_content-wrapper">
      <div class="body-large bold">What do you want to create?</div>
      <div class="w-layout-grid grid">
        <router-link :to="myRoutes.project.createProject.path" id="w-node-b76c9f82-e84c-b085-e90b-33722d4dbcba-2d4dbcb5" class="new-item project w-inline-block">
          <div class="html-embed w-embed"><svg width="96" height="96" viewbox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.7334 88.0075H59.5111C66.0897 88.0075 71.4 82.6972 71.4 76.1187V20.6372C71.4 14.0587 66.0897 8.74829 59.5111 8.74829H35.7334C29.1549 8.74829 23.8445 14.0587 23.8445 20.6372V76.1187C23.8445 82.6972 29.1549 88.0075 35.7334 88.0075Z" fill="currentColor"></path>
            <path d="M17.9001 24.3224V72.4328C17.9001 73.701 16.7508 74.6124 15.5223 74.3747C9.65712 73.3047 7.99268 69.8965 7.99268 61.5743V35.181C7.99268 26.8587 9.65712 23.4506 15.5223 22.3806C16.7508 22.1428 17.9001 23.0543 17.9001 24.3224Z" fill="currentColor"></path>
            <path d="M87.2519 35.181V61.5743C87.2519 69.8965 85.5874 73.3047 79.7223 74.3747C78.4937 74.6124 77.3445 73.6613 77.3445 72.4328V24.3224C77.3445 23.0543 78.4937 22.1428 79.7223 22.3806C85.5874 23.4506 87.2519 26.8587 87.2519 35.181Z" fill="currentColor"></path>
          </svg></div>
          <p class="body-medium text-align-center">New Project</p>
        </router-link>
        <a id="w-node-b76c9f82-e84c-b085-e90b-33722d4dbcbe-2d4dbcb5" @click="closeNewModal('.new-modal_component');openNewModal('.create-task-modal_component')" data-w-id="b76c9f82-e84c-b085-e90b-33722d4dbcbe" href="#" class="new-item task w-inline-block">
          <div class="html-embed w-embed"><svg width="96" height="96" viewbox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.9978 53.513L28.5383 58.9726C26.6016 57.5681 23.8834 57.6948 22.1209 59.4456C20.1428 61.3706 20.1423 64.5453 22.1194 66.4709L25.0604 69.4119C26.0477 70.4519 27.3862 70.8849 28.5827 70.8849C29.8328 70.8849 31.0985 70.4183 32.0842 69.4327L41.0008 60.516C42.9239 58.5929 42.9239 55.4361 41.0008 53.513L40.989 53.5012L40.9769 53.4895C39.0333 51.6107 35.9338 51.5771 33.9978 53.513ZM33.9978 25.7723L28.5383 31.2319C26.6016 29.8274 23.8833 29.954 22.1208 31.705C20.1428 33.6299 20.1423 36.8045 22.1193 38.7301L25.0604 41.6712C26.0477 42.7111 27.3862 43.1442 28.5827 43.1442C29.8328 43.1442 31.0985 42.6776 32.0842 41.6919L41.0008 32.7753C42.9239 30.8522 42.9239 27.6954 41.0008 25.7723L40.989 25.7604L40.9769 25.7488C39.0333 23.8699 35.9338 23.8364 33.9978 25.7723ZM31.0397 9.97416H64.2493C71.0679 9.97416 76.2723 11.9989 79.7701 15.4968C83.2679 18.9946 85.2927 24.199 85.2927 31.0175V64.2271C85.2927 71.0457 83.2679 76.25 79.7701 79.7479C76.2723 83.2457 71.0679 85.2705 64.2493 85.2705H31.0397C24.2212 85.2705 19.0168 83.2457 15.519 79.7479C12.0212 76.25 9.99637 71.0457 9.99637 64.2271V31.0175C9.99637 24.199 12.0212 18.9946 15.519 15.4968C19.0168 11.9989 24.2212 9.97416 31.0397 9.97416ZM48.873 67.9127H69.6786C72.4546 67.9127 74.6323 65.6609 74.6323 62.959C74.6323 60.2571 72.4546 58.0053 69.6786 58.0053H48.873C46.1539 58.0053 43.9193 60.2398 43.9193 62.959C43.9193 65.6781 46.1539 67.9127 48.873 67.9127ZM48.873 40.1719H69.6786C72.4546 40.1719 74.6323 37.9201 74.6323 35.2182C74.6323 32.5163 72.4546 30.2645 69.6786 30.2645H48.873C46.1539 30.2645 43.9193 32.4991 43.9193 35.2182C43.9193 37.9374 46.1539 40.1719 48.873 40.1719Z" fill="currentColor" stroke="currentColor" stroke-width="3.96296"></path>
          </svg></div>
          <p class="body-medium text-align-center">New Task</p>
        </a>
      </div>
    </div>
    <a data-w-id="b76c9f82-e84c-b085-e90b-33722d4dbcc2" href="#" class="login-modal2_close-button w-inline-block" @click="closeNewModal('.new-modal_component')">
      <div class="icon-embed-small hide-mobile-landscape w-embed"><svg width="100%" height="100%" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.056 23.5004L23.5004 24.056C23.1935 24.3628 22.696 24.3628 22.3892 24.056L16 17.6668L9.61078 24.056C9.30394 24.3628 8.80645 24.3628 8.49961 24.056L7.94403 23.5004C7.63719 23.1936 7.63719 22.6961 7.94403 22.3892L14.3332 16L7.94403 9.61081C7.63719 9.30397 7.63719 8.80648 7.94403 8.49964L8.49961 7.94406C8.80645 7.63721 9.30394 7.63721 9.61078 7.94406L16 14.3333L22.3892 7.94404C22.6961 7.6372 23.1935 7.6372 23.5004 7.94404L24.056 8.49963C24.3628 8.80647 24.3628 9.30395 24.056 9.61079L17.6667 16L24.056 22.3892C24.3628 22.6961 24.3628 23.1936 24.056 23.5004Z" fill="currentColor"></path>
      </svg></div><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt="" class="show-mobile-landscape">
    </a>
    <div data-w-id="b76c9f82-e84c-b085-e90b-33722d4dbcc5" class="modal_background-overlay"></div>
  </div>
</template>

<script>
import RouterUtils from "@/util/baseUtils/RouterUtils";

export default {
  name: "WhatToCreateModal",
  computed: {
    myRoutes() {
      return RouterUtils.routes
    },
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
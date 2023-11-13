<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>
import "@/assets/css/normalize.css"
import "@/assets/css/webflow.css"
import "@/assets/css/qoopro-new.webflow.css"
import StoreUtils from "@/util/baseUtils/StoreUtils";

export default {
  name: 'App',
  components: {
    // LoginView
    // HelloWorld
  },
  mounted() {
    StoreUtils.dispatch(StoreUtils.actions.auth.getUserDetails)

  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>

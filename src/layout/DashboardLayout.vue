<template>
  <div class="page-wrapper">
    <NavBar/>
    <main class="shell4_wrapper">
      <SideBar/>
      <slot/>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/bar/SideBar";
import NavBar from "@/components/bar/NavBar";
export default {
  name: "DashboardLayout",
  components: {NavBar, SideBar},
  mounted() {
    // if(localStorage.token){
    //   console.log(localStorage.token)
    //   StoreUtils.dispatch(StoreUtils.actions.auth.getUserDetails)
    // }else {
    //   RouterUtils.navigateTo(RouterUtils.routes.auth.loginview.path)
    // }
  },
}
</script>

<style scoped>

</style>
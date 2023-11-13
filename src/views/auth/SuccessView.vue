<template>
<AuthLayout>
  <SuccessPopup/>
</AuthLayout>
</template>

<script>
import SuccessPopup from "@/components/popup/SuccessPopup";
import AuthLayout from "@/layout/AuthLayout";
export default {
  name: "SuccessView",
  components: {AuthLayout, SuccessPopup}
}
</script>

<style scoped>

</style>
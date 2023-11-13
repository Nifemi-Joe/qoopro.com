<template>
  <AuthLayout>
    <VerifyEmailForm/>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/layout/AuthLayout";
import VerifyEmailForm from "@/components/forms/VerifyEmailForm";
export default {
  name: "VerifyMailView",
  components: {AuthLayout, VerifyEmailForm}
}
</script>

<style scoped>

</style>
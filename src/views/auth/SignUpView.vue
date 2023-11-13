<template>
<AuthLayout>
  <SignUpForm/>
</AuthLayout>
</template>

<script>
import AuthLayout from "@/layout/AuthLayout";
import SignUpForm from "@/components/forms/SignUpForm";
export default {
  name: "SignUpView",
  components: {SignUpForm, AuthLayout}
}
</script>

<style scoped>

</style>
<template>
<AuthLayout>
  <LoginForm/>
</AuthLayout>
</template>

<script>
import AuthLayout from "@/layout/AuthLayout";
import LoginForm from "@/components/forms/LoginForm";
export default {
  name: "LoginView",
  components: {LoginForm, AuthLayout}
}
</script>

<style scoped>

</style>
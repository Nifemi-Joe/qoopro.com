<template>
  <div class="page-wrapper">
    <main class="main-wrapper">
      <div class="form-blocked">
        <div class="onboarding-form-block w-form">
          <slot/>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div id="w-node-_3c2ec6b3-b5e2-d5ae-a50c-d00ec50d8f04-d91290ed" class="footer4_credit-text text-color-gray600">© 2023 QooPro</div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>

</style>
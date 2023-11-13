<template>
  <div class="small-loader">
    <div class="jt">
      <svg height="100%" viewBox="0 0 32 32" width="100%">
        <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            stroke-width="4"
            style="stroke: #5f57ff; opacity: 0.2;"
        />
        <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            stroke-width="4"
            style="stroke: #5f57ff; stroke-dasharray: 80; stroke-dashoffset: 60;"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButtons"
}
</script>

<style scoped>
.small-loader{
  display: flex;
  justify-content: center;
}
.small-loader .jt {
  height: 30px;
  width: 30px;
  display: inline-block;
}
.small-loader svg {
  transform: translate(50%, 50%);
  animation: spin 0.5s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
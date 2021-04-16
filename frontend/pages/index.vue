<template>
  <main class="animate-pulse">
    <main id="app"></main>
  </main>
</template>

<script>
export default {
  layout: "std",
  // OR
  layout(context) {
    return "std";
  },
};
</script>

<style>
main {
  width: 100%;
}
#app {
  min-height: 80vh;
}
.animate-pulse {
  animation: pulse 0.5s cubic-bezier(0.9, 0, 0.8, 1) 1;
}
</style>

<template>
  <main
    class="flex align-center justify-center flex-col w-full min-h-screen mx-auto"
  >
    <section class="nav">
      <app-header />
    </section>
    <main>
      <Nuxt />
    </main>
    <footer class="foo">
      <app-footer />
    </footer>
  </main>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
export default {
  components: { AppHeader, AppFooter },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>

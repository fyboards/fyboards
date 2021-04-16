<template>
  <main class="bounce">
    <!-- load script -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <navbar />
    <Sidebar />
    <section class="theme" v-if="theme_toggler" @click="theme_toggler = false">
      <button><i class="bi bi-moon-fill"></i></button>
    </section>
    <section class="theme-ligth" v-else @click="theme_toggler = true">
      <button><i class="bi bi-sun-fill"></i></button>
    </section>
    <section id="setter">
      <section id="ligth"><ligth /></section>
      <section id="dark"><dark /></section>
    </section>
    <main class="container">
      <Nuxt />
    </main>
  </main>
</template>
<script>
import Navbar from "~/components/Navbar.vue";
import Sidebar from "../components/Sidebar";
export default {
  components: { Sidebar, Navbar },
  data() {
    return {
      theme: "ligth",
      theme_toggler: true,
    };
  },
};
</script>

<style lang="scss">
.theme {
  position: fixed;
  display: flex;
  align-content: center;
  justify-items: center;
  bottom: 0;
  button {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    font-size: 1em;
    bottom: 0;
    .bi {
      color: #5b84b1ff;
    }
    background: hsl(240, 28%, 20%);
  }
}
.theme-ligth {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  font-size: 1em;
  bottom: 0;
  button {
    color: hsl(240, 28%, 20%);
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    font-size: 1em;
    bottom: 0;
  }
  background: hsl(0, 0%, 100%);
}
.container {
  margin-left: 12rem;
  margin-top: 3.3em;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} /*
@media screen and (min-width: 576px) {
  .container {
    width: 100%;
  }
}
@media screen and (min-width: 577px) {
  .container {
    width: 540px;
  }
}
@media screen and (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media screen and (min-width: 962px) {
  .container {
    width: 960px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}*/
</style>

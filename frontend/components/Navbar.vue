<template>
  <nav class="border-b border-gray-100 navbar">
    <section id="title">
      <h1>fyboard</h1>
    </section>
    <section id="info">
      <nuxt-link
        v-for="link in links"
        :key="link"
        class="border pl-2 pr-1 border-blue-600 border-double rounded-l-sm border-1"
        :to="link.link"
      >
        <i :class="link.icon" alt="" />
      </nuxt-link>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: {
        account: {
          link: "/profile",
          icon: "bi bi-person-circle",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.navbar {
  width: calc(100% - 0em);
  padding-left: 0.5em;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: darken(#f9fafb, 5%);
  height: 3.2em;
}
#info {
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-left: 0.3em;
  }
}
.main {
  position: inherit;
}
</style>

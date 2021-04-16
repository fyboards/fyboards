<template>
  <nav class="aside">
    <nuxt-link
      v-for="link in links"
      :key="link"
      class="shadow-md sidelink"
      :to="link.link"
    >
      <i :class="link.icon" alt="" />
      <h1 class="h1">&nbsp;{{ link.title }}</h1>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: {
        dashboard: {
          title: " Home",
          link: "/dashboard",
          icon: "bi bi-house-fill",
        },
        users: {
          title: " User",
          link: "/users",
          icon: "bi bi-people-fill",
        },
        apps: {
          title: " Apps",
          link: "/apps",
          icon: "bi bi-grid-3x3-gap-fill",
        },
        post: {
          title: " Post",
          link: "/post",
          icon: "bi bi-file-earmark-post-fill",
        },
        bot: {
          title: " Robot",
          link: "/robot",
          icon: "bi bi-bug-fill",
        },
        stats: {
          title: " Stats",
          link: "/statistic",
          icon: "bi bi-bar-chart-fill",
        },
        database: {
          title: " Data",
          link: "/database",
          icon: "bi bi-pie-chart-fill",
        },
        plugin: {
          title: " plugin",
          link: "/plugin",
          icon: "bi bi-palette-fill",
        },
        settings: {
          title: " Config",
          link: "/config",
          icon: "bi bi-gear-fill",
        },
      },
      isshow: false,
    };
  },
  name: "Dashnav",
};
</script>

<style lang="scss">
.bi {
  color: #5b84b1ff;
  font-size: 2rem;
}
.fa-1 {
  width: 1.33rem;
  height: 1.33rem;
  size: 1.33rem;
}

.fa-2 {
  width: 3rem;
  height: 2rem;
  size: 2rem;
}
.h1 {
  font-size: 1.7em;
}
.aside {
  height: 100% !important;
  background: darken(#f9fafb, 10%);
  margin-top: 3.1em;
  position: fixed;
  width: 10.5rem;
  padding-right: 5px;
}
.sidelink {
  display: flex;
  align-items: center;
  margin: 2px 0px;
  border-radius: 0 15px 15px 0;
  width: 100%;
  @apply font-mono;
  background: #fff;
  height: 50px;
  &:hover {
    cursor: pointer;
    background: #f9fafb;
    transform: scale(0.98);
  }
}
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 5px;
  flex-direction: column;
  nuxt-link {
    display: flex;
    align-items: center;
    margin: 2px 10px;
    padding: 0 3px;
    border-radius: 0 15px 15px 0;
    width: 100%;
    @apply font-mono;
    background: #fff;
    height: 50px;
    &:hover {
      cursor: pointer;
      background: #f9fafb;
      transform: scale(0.98);
    }
  }
}
</style>

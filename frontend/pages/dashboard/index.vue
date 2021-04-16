<template>
  <main class="grid md:grid-cols-3">
    <nuxt-link to="/statistic"
      ><card img="/stats.png" title="Statistics" sub="your statistics"
    /></nuxt-link>
    <nuxt-link to="/apps"
      ><card img="/apps.png" title="Apps" sub="your applications"
    /></nuxt-link>
    <nuxt-link to="/info"
      ><card img="/info.png" title="Info" sub="information of your fyboard"
    /></nuxt-link>
    <nuxt-link to="/post"
      ><card img="/post.png" title="Post" sub="write content"
    /></nuxt-link>
    <nuxt-link to="/database"
      ><card
        img="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="Database"
        sub="data store"
    /></nuxt-link>
    <nuxt-link to="/settings"
      ><card
        img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/cogs.svg"
        title="Config"
        sub="Configure fyboard to fit well"
    /></nuxt-link>
  </main>
</template>

<script>
import Card from "../../components/card";
export default {
  layout: "dashboard",
  // OR
  layout(context) {
    return "dashboard";
  },
  components: { Card },
};
</script>

<style></style>

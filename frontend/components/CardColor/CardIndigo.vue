<template>
  <card
    class="bg-gradient-to-r from-indigo-500 to-blue-500"
    :img="img"
    :title="title"
    :sub="sub"
    :desc="desc"
  />
</template>

<script>
import Card from "../Card.vue";
export default {
  components: { Card },
  props: ["img", "title", "sub", "desc"],
};
</script>

<style></style>

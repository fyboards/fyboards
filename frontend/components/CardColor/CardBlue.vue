<template>
  <card
    class="bg-gradient-to-r from-blue-400 to-blue-300"
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

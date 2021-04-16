<template>
  <card
    class="bg-gradient-to-r from-green-500 to-green-400"
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

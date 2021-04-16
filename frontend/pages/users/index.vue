<template>
  <main>
    <usertable />
  </main>
</template>

<script>
import usertable from "../../components/UserTable";
export default {
  components: { usertable },
  layout: "dashboard",
  // OR
  layout(context) {
    return "dashboard";
  },
};
</script>

<style>
h1 {
  font-size: 30px;
  @apply font-sans;
}
</style>

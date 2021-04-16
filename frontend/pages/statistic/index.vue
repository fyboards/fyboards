<template>
  <main>
    <h1>Statistic</h1>
    <hr />
    <br />
    <main class="grid md:grid-cols-2 xl:grid-cols-2">
      <Info
        v-for="i in 6"
        :key="i"
        title="Request"
        content="ipsum dolor sit ametor kulo polo lorem ipsum dolor sit ametor kulo polo velo
    hug buh tikpol par kulo polo velo hug buh tikpol kulo polo velo kulo polo velo kulo polo velo bared hub gui tuor kokon konon konon lol darge gorg try hub jiklo"
      />
    </main>
  </main>
</template>

<script>
import Info from "../../components/Info";
export default {
  components: { Info },
  layout: "dashboard",
  // OR
  layout(context) {
    return "dashboard";
  },
};
</script>

<style></style>

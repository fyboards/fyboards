<template>
  <article class="m-3">
    <section class="top">
      <h2>{{ title }}</h2>
      <button class="reset"><i class="far fa-window-close"></i></button>
    </section>
    <section class="content">
      {{ content }}
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
  name: "dinfo",
};
</script>

<style lang="scss">
.top {
  width: 0;
  padding: 5px;
  height: 0;
  background: #f8f9fa;
  min-width: 350px;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  border: 2px #465c6d solid;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  h2 {
    margin: 1px;
    color: #465c6d;
    color: white;
  }
  color: white;
  @apply bg-blue-800;
}
.content {
  width: 0;
  height: auto;
  min-height: 170px;
  min-width: 350px;
  border: 1px #465c6d solid;
  padding: 4px;
  font-size: 17px;
  @apply font-mono;
  background-color: ligthen(#f9fafb, 1%);
  text-align: left;
}
.reset {
  all: unset;
}
.fa-window-close {
  color: red;
  margin-top: 4px;
}
</style>

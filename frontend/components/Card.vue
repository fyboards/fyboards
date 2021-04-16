<template>
  <section class="card">
    <div class="img">
      <img :src="img" loading="lazy" alt="" />
    </div>
    <div class="titles">
      <h1>{{ title }}</h1>
    </div>
    <div class="subtitle">
      <h2>{{ sub }}</h2>
    </div>
    <div class="desc">
      <p>
        {{ desc }}
      </p>
    </div>
    <br />
  </section>
</template>

<script>
export default {
  props: ["img", "title", "sub", "desc"],
  name: "card",
};
</script>

<style lang="scss">
section {
  display: flex !important;
}
.card {
  border: 2px solid black;
  border-color: #e9edf3;
  margin: 3px;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  @apply shadow-md;
  overflow: hidden;
  flex-direction: column;
  &:hover {
    transform: scale(0.98);
  }
}
.card img {
  width: 100%;
  height: 6rem;
  border-bottom: 1px #008 solid;
}
.card .titles {
  margin: 5px;
  font-weight: 350;
  font-size: 2.5em;
}
.card .subtitle {
  font-family: "Inter UI", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 330;
  margin-left: 6px;
}
.card .desc {
  font-family: Inter, "Inter UI", Helvetica, Arial, sans-serif;
  font-weight: 300;
  margin: 5px;
}
</style>

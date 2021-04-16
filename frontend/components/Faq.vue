<template>
  <div class="section">
    <details>
      <summary class="sumbase">{{ title }}</summary>
      <p>{{ desc }}</p>
    </details>
  </div>
</template>

<script>
export default {
  name: "Showhide",
  props: ["title", "desc"],
};
</script>

<style lang="scss">
.sumbase {
  padding: 15px;
  background: cadetblue;
  margin: 3px 3px 4px 3px;
  max-width: 900px;
  color: #fff;
  cursor: pointer;
  outline: none;
  border-radius: 1px;
  word-spacing: 1px;
  transition: background 0.3s;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    background: darkcyan;
  }
}
p {
  margin: 5px;
  font-family: "Montserrat", sans-serif;
}
details[open] summary::-webkit-details-marker {
  background: url("/bug-outline.svg");
  color: transparent;
}
</style>

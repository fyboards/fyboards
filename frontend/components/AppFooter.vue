<template>
  <footer class="flex justify-center foo animate-none">
    <hr/>
    <br/>
    <div class="foo-copy">
      <span>&copy; Ardustri Company 2021</span>
      <span aria-hidden="true">&nbsp;·&nbsp;</span>
      <nuxt-link to="/privacy" class="link">Privacy</nuxt-link>
      <span aria-hidden="true">&nbsp;·&nbsp;</span>
      <nuxt-link to="/terms" class="link">Terms</nuxt-link>
    </div>
    <br/>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.foo {
  background: #F9FAFB;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
}
.foo-copy {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
hr {
  border-color: #3730A3;
  width: 100%;
}
.hr-m {
  width: 90%;
  border-color: black !important;
  margin: 10px
}
.dot {
  display: inline-block !important;
  text-align: center !important;
  width: 19px !important;
}
.link {
  text-decoration: underline blue;
}
</style>

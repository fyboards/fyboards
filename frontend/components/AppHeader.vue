<template>
  <nav class="nav">
    <nuxt-link to="/"><h1 class="nav-title">Fyboard</h1></nuxt-link>
    <div>
      <nuxt-link
        to="/register"
        class="inline-flex items-center mx-1 inline-flex rounded-md shadow justify-center px-4 sm:px-3 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
      >
        Register
      </nuxt-link>
      <nuxt-link
        to="/login"
        class="inline-flex shadow inline-flex mx-1 items-center justify-center px-4 sm:px-3 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Login
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav {
  background: #f9fafb;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
}
.nav-title {
  color: #312e81;
  font-weight: 100 !important;
  @apply font-mono;
  @apply p-3;
  @apply text-3xl;
}
</style>

<template>
  <main>
    <h1>Apps</h1>
    <hr />
    <article class="p-10 grid md:grid-cols-2 xl:grid-cols-5 gap-5">
      <!--Card 1-->
      <section
        class="max-w-sm flex flex-col rounded overflow-hidden shadow-lg"
        v-for="i in 10"
        :key="i"
      >
        <img class="w-full" src="/apps.png" alt="Mountain" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">instagram.com</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="category">React</span>
          <span class="category">Social Media</span>
          <span class="category">Nextjs</span>
          <span class="category">Api</span>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  layout: "dashboard",
  // OR
  layout(context) {
    return "dashboard";
  },
};
</script>

<style>
.category {
  @apply inline-block;
  @apply bg-gray-200;
  @apply rounded-full;
  @apply px-3;
  @apply py-1;
  @apply text-sm;
  @apply font-semibold;
  @apply text-gray-700;
  @apply mr-2;
  @apply mb-2;
}
</style>

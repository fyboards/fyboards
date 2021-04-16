<template>
  <main class="justify-center flex pt-4 align-center">
    <button class="button--green font-sans text-xl">
      Add Content
    </button>
    <button class="button--grey font-sans text-xl">
      Manage Content
    </button>
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

<style lang="scss">
:root {
  --primary-color: "";
  --secondary-color: "";
  --bg-color: "";
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}
.justify-between {
  display: flex;
  justify-content: space-between !important;
  width: 100%;
}
button {
  border: 1px solid black;
  padding: 5px;
  background: var(--bs-light);
  border-radius: 0.3rem;
}
button:focus {
  outline: none;
}

.button--green {
  background: var(--bs-green);
  width: auto;
  height: auto;
  color: var(--bs-light);
}
.button--secondary {
  background: var(--bs-gray);
  width: auto;
  height: auto;
  color: var(--bs-light);
}
</style>

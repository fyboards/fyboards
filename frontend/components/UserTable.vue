<template>
  <section id="user" class="wrap container-xl">
    <div
      class="bg-gray-100 inline-block shadow rounded-md overflow-hidden my-5"
    >
      <table
        class="border-b border-t border-l border-r border-indigo-100 bg-gray-100"
      >
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="text-top">
              Name
            </th>
            <th scope="col" class="text-top">
              Id
            </th>
            <th scope="col" class="text-top">
              Status
            </th>
            <th scope="col" class="text-top">
              Role
            </th>

            <th scope="col" class="text-top">
              Actions
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody
          class="divide-y divide-gray-200 border-b border-t border-l border-r border-indigo-100"
          v-for="user in users"
          :key="user"
        >
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ user.name }}
                  </div>
                  <div class="text-sm text-gray-900">
                    {{ user.email }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ user.id }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              >
                {{ user.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ user.role }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            >
              <div class="flex item-center justify-center">
                <nuxt-link
                  :to="'api/user/view/' + user.id"
                  class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                >
                  <img src="seek.svg" alt="" />
                </nuxt-link>
                <nuxt-link
                  :to="'api/user/edit/' + user.id"
                  class="w-4 mr-2 transform hover:scale-110"
                >
                  <img src="edit.svg" alt="" />
                </nuxt-link>
                <nuxt-link
                  :to="'api/user/delete/' + user.id"
                  class="w-4 mr-2 transform hover:scale-110"
                >
                  <img src="trash.svg" alt="" />
                </nuxt-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: {
        keanu: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
        hello: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
        touch: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
        sudo: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
        kea: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
        apt: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
        sl: {
          name: "hello",
          email: "wello@gmail.com",
          id: "4532987363",
          status: "inactive",
          role: "admin",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text-top {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider;
}
</style>

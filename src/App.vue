<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2"> Boilerplate!!! </v-app-bar>
    <v-navigation-drawer permanent>
      <LeftMenu />
    </v-navigation-drawer>
    <v-main>
      <main class="p-30">
        <router-view />
      </main>
    </v-main>
  </v-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    LeftMenu: defineAsyncComponent(() => import("./views/LeftMenu.vue")),
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>

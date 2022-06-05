<template>
  <div class="container">
    <LeftMenu />
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "App",
  components: {
    TreeComponent: defineAsyncComponent(() =>
      import("@/components/tree/TreeComponent.vue")
    ),
    LeftMenu: defineAsyncComponent(() => import("@/views/LeftMenu.vue")),
  },
  setup() {
    console.log(
      "%cvue3 보일러플레이트",
      "background-image: linear-gradient(red, blue); color: white; padding: 5px;"
    );
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>

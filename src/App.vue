<template>
  <div>
    <LeftMenu />
    <section>
      <TreeComponent />
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
    LeftMenu: defineAsyncComponent(() => import("@/components/LeftMenu.vue")),
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>

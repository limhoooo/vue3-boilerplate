<template>
  <div>
    <TreeComponent />
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "App",
  components: {
    TreeComponent: defineAsyncComponent(() =>
      import("@/components/TreeComponent.vue")
    ),
  },
});
</script>

<style>
</style>

<template>
  <div style="padding-left: 20px; margin-top: 10px">
    <TreeItem
      :tree="tree"
      :depth="depth"
      @isTreeModalFnc="$emit('isTreeModalFnc', $event)"
      @setFocus="$emit('setFocus', $event)"
    />
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    tree: Object,
    depth: {
      type: Number,
      default: 1,
    },
  },
  components: {
    TreeItem: defineAsyncComponent(() => import("./TreeItem.vue")),
  },
});
</script>

<style>
</style>
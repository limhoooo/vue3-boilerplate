<template>
  <div v-for="item in tree" :key="item" class="treeBox">
    <span v-if="depth > 1" class="depth-icon">ㄴ</span>
    <span class="title" style="border-right: none">{{ item.treeName }}</span>
    <span class="title">{{ item.treeKey }}</span>
    <span class="btnBox">
      <button
        @click="
          $emit('isTreeModalFnc', { flag: true, type: 'sub' }),
            $emit('setFocus', item.subTree)
        "
      >
        하위요소추가
      </button>
    </span>
    <TreeGroup
      v-if="item.subTree.length > 0"
      :tree="item.subTree"
      :depth="depth + 1"
      @isTreeModalFnc="$emit('isTreeModalFnc', $event)"
      @setFocus="$emit('setFocus', $event)"
    />
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
    tree: Object,
    depth: Number,
  },
  components: {
    TreeGroup: defineAsyncComponent(() => import("./TreeGroup.vue")),
  },
});
</script>

<style>
.treeBox {
  margin-bottom: 10px;
}
.title {
  border: 1px solid #aaa;
  padding: 8px 15px 2px 15px;
  width: 200px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
}
.depth-icon {
  margin-right: 10px;
}
.btnBox button {
  padding: 5px 15px;
  height: 42px;
  border: none;
  background-color: #6c3ec6;
  color: #fff;
  cursor: pointer;
}
</style>
<style>
</style>
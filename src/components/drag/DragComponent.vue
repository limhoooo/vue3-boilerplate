<template>
  <div>
    <draggable :list="myList" class="drag">
      <div class="drag-box" v-for="item in myList" :key="item" @click="test">
        {{ item.name }}
      </div>
    </draggable>
  </div>
  <TreeJsonView :TREE="myList" />
</template>

<script>
import { ref } from "@vue/reactivity";
import {
  defineAsyncComponent,
  defineComponent,
  watch,
} from "@vue/runtime-core";
import { VueDraggableNext } from "vue-draggable-next";
export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    TreeJsonView: defineAsyncComponent(() => import("./DragJosnView.vue")),
  },
  setup() {
    const myList = ref([
      { name: "1" },
      { name: "2" },
      { name: "3" },
      { name: "4" },
      { name: "5" },
      { name: "6" },
      { name: "7" },
      { name: "8" },
      { name: "9" },
    ]);

    watch(myList, (data) => {
      data.map((item, index) => (item.index = index));
      console.log(myList.value);
    });
    const test = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      else e.isImmediatePropagationEnabled = false; // IE 대응
    };
    return { myList, test };
  },
});
</script>

<style scoped>
.drag {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
}
.drag-box {
  width: 100px;
  height: 50px;
  background-color: aquamarine;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  display: inline-block;
}
</style>
<template>
  <div>
    <draggable v-model="myList" class="drag">
      <template v-slot:item="{ item }">
        <div class="drag-box">
          {{ item.name }}
        </div>
      </template>
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
import draggable from "vue3-draggable";
export default defineComponent({
  components: {
    draggable,
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
    return { myList };
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
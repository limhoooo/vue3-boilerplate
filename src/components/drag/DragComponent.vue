<template>
  <div>
    <!-- 드래그 박스 -->
    <ul>
      <draggable :list="myList" class="drag" @change="test">
        <transition-group type="transition" name="flip-list">
          <li class="drag-box" v-for="item in myList" :key="item" @click="test">
            {{ item.name }}
          </li>
        </transition-group>
      </draggable>
    </ul>
  </div>
  <TreeJsonView :TREE="myList" />
</template>

<script>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
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

    const test = (e) => {
      console.log(myList.value);
      console.log(myList.value);
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
.flip-list-move {
  transition: transform 0.5s;
}
</style>
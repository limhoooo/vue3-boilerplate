<template>
  <div class="modal">
    <div class="modal-body">
      <div>
        <input
          type="text"
          v-model="treeObj.treeName"
          placeholder="Sub Tree Name"
        />
        <input
          type="text"
          v-model="treeObj.treeKey"
          placeholder="Sub Tree Key"
        />
        <button @click="addTreeFnc">추가</button>
        <button @click="$emit('isTreeModalFnc', false)">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
    TREE: Array,
    focus: Array,
    type: String,
    item: Object,
  },
  setup(props) {
    // reset 용도
    const treeObjOrigin = {
      treeName: "",
      treeKey: "",
      subTree: [],
    };
    const treeObj = ref({
      treeName: "",
      treeKey: "",
      subTree: [],
    });
    const addTreeFnc = () => {
      if (validationCheck(treeObj.value)) return;
      if (props.type === "sub") {
        props.focus.push(JSON.parse(JSON.stringify(treeObj.value)));
      } else {
        props.TREE.push(JSON.parse(JSON.stringify(treeObj.value)));
      }
      treeObj.value = JSON.parse(JSON.stringify(treeObjOrigin)); // reset
    };
    const validationCheck = (value) => {
      if (!value.treeName) {
        alert("name 을 입력해주세요.");
        return true;
      }
      if (!value.treeKey) {
        alert("Key 을 입력해주세요.");
        return true;
      }
    };
    return {
      treeObj,
      addTreeFnc,
    };
  },
});
</script>

<style>
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-body {
  padding: 40px 20px;
  background-color: #fff;
}
</style>
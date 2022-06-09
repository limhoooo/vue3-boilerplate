<template>
  <div>
    <ul class="tagBox">
      <li v-for="item in arrayValue" :key="item" class="tag">
        {{ item }}<span @click="deleteFnc(item)" class="deleteBtn">x</span>
      </li>
      <li class="liInput">
        <input
          class="treeInput"
          type="text"
          v-model="inputValue"
          @keyup.enter="addFnc"
          placeholder="Tag 를 입력해주세요"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const inputValue = ref("");
    const arrayValue = ref([]);
    const addFnc = () => {
      if (arrayValue.value.some((item) => item === inputValue.value))
        return alert("동일한 tag 가 존재합니다");
      arrayValue.value.push(inputValue.value);
      inputValue.value = "";
    };
    const deleteFnc = (value) => {
      arrayValue.value = arrayValue.value.filter((item) => item != value);
    };
    return { inputValue, arrayValue, addFnc, deleteFnc };
  },
};
</script>

<style>
.tagBox {
  border: 1px solid #b3c8d3;
  padding: 10px;
}
.tag {
  display: inline-block;
  background-color: #b3c8d3;
  color: #fff;
  margin: 5px;
  padding: 5px 10px;
}
.liInput {
  display: inline-block;
}
.deleteBtn {
  color: white;
  display: inline-block;
  margin-left: 3px;
  cursor: pointer;
}
li {
  list-style-type: none;
}
.treeInput {
  border: none;
}
.treeInput:focus {
  outline: 0;
}
</style>
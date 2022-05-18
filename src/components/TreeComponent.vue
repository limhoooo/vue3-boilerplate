<template>
  <div>
    <div class="tree-btn">
      <button>트리생성</button>
    </div>
    <div>
      <span class="title">dasdf</span>
      <span class="btnBox">
        <button>하위요소추가</button>
      </span>
    </div>
    <div class="modal" v-if="isModal">
      <div class="modal-body">asdf</div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isModal = ref(false);
    return {
      isModal,
    };
  },
};
</script>

<style scoped>
.tree-btn {
  padding: 40px;
}
.title {
  border: 1px solid #ddd;
  padding: 5px 20px;
}
.btnBox {
}
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
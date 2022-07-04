<template>
  <div>
    <div class="tree-btn">
      <button @click="isTreeModalFnc({ flag: true, type: 'null' })">
        트리생성
      </button>
    </div>
    <div class="tree-group-box">
      <!-- 트리그룹 컴포넌트 -->
      <TreeGroup
        :tree="TREE"
        @isTreeModalFnc="isTreeModalFnc"
        @setFocus="setFocus"
      />
    </div>
    <!-- 트리생성모달 -->
    <TreeCreateModal
      v-if="isModal"
      :focus="focus"
      :type="type"
      :TREE="TREE"
      @isTreeModalFnc="isTreeModalFnc"
    />
    <TreeJsonView :TREE="TREE" />
  </div>
</template>   

<script>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
export default defineComponent({
  components: {
    TreeGroup: defineAsyncComponent(() => import("./TreeGroup.vue")),
    TreeCreateModal: defineAsyncComponent(() =>
      import("./TreeCreateModal.vue")
    ),

    TreeJsonView: defineAsyncComponent(() => import("./TreeJsonView.vue")),
  },
  setup() {
    const TREE = ref([]);
    const focus = ref([]);
    const type = ref("");
    const isModal = ref(false);

    const isTreeModalFnc = (value) => {
      isModal.value = value.flag;
      type.value = value.type;
      type.value = value.type;
    };
    const setFocus = (value) => (focus.value = value);
    return {
      TREE,
      isModal,
      focus,
      type,
      isTreeModalFnc,
      setFocus,
    };
  },
});
</script>

<style scoped>
.tree-btn {
  padding-top: 40px;
}
.tree-btn button {
  background-color: #d84265;
  color: #fff;
  padding: 5px 15px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.tree-group-box {
  width: 800px;
  margin-top: 40px;
  border: 1px solid #ddd;
}
</style>
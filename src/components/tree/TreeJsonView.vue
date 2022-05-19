<template>
  <div class="json-box mt30">
    {{
      TREE.length > 0
        ? JSON.parse(JSON.stringify(TREE))
        : "트리를 생성해주세요."
    }}
  </div>
</template>

<script>
export default {
  props: {
    TREE: Object,
  },
};
</script>

<style>
.json-box {
  width: 800px;
  white-space: pre;
  background-color: #000;
  border: 1px solid #ddd;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
}
.mt30 {
  margin-top: 30px;
}
</style>
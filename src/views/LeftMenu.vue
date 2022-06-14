<template>
  <div class="leftMenu">
    <ul>
      <li>
        <router-link to="/tree">TreeMenu</router-link>
      </li>
      <li>
        <router-link to="/tag">TagInput</router-link>
      </li>
      <li>
        <router-link to="/drag">drag</router-link>
      </li>
      <li>
        <router-link to="/">FilterTab</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>

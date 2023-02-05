<template>
  <a-layout class="layout">
    <AppHeader/>
    <a-layout-content id="layout-content">
      <div class="layout-content-main">
        <Nuxt/>
      </div>
    </a-layout-content>
    <AppFooter/>
  </a-layout>
</template>

<script>
import AppHeader from "@/components/Layouts/AppHeader/index.vue";
import AppFooter from "@/components/Layouts/AppFooter/index.vue";

export default {
  components: {AppHeader, AppFooter},
}
</script>

<style scoped>
#layout-content {
  padding: 0 50px;
  height: calc(100vh - 140px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;
}

.layout-content-main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  z-index: 1;
}
</style>

<template>
  <HomeHeader />
  <RouterView />
  <HomeFooter />
</template>
<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { getToken } from "@/utils/index";
import HomeHeader from "./components/HomeHeader.vue";
import HomeFooter from "./components/HomeFooter.vue";

onMounted(() => {
  getToken();
});
</script>
<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

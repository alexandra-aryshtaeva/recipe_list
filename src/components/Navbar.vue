<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav>
    <RouterLink v-if="route.path !== '/'" to="/">Home</RouterLink>
    <RouterLink v-if="route.path !== '/recipe'" to="/recipe">Recipe</RouterLink>
  </nav>
</template>

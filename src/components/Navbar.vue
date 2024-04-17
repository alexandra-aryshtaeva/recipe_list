<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header class="container">
    <nav>
      <RouterLink class="navButton" v-if="route.path !== '/'" to="/"
        >Home</RouterLink
      >
      <RouterLink class="navButton" v-if="route.path !== '/recipe'" to="/recipe"
        >Recipe</RouterLink
      >
    </nav>
  </header>
</template>
<style scoped>
nav {
  background-color: white;
  padding: 16px;
  border: 2px solid var(--red);
}

.navButton {
  color: var(--red);
  background-color: bisque;
  font-size: 1.5rem;
  padding: 4px;
}
</style>

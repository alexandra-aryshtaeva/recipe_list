<script setup>
import { formatDate } from "@/lib/time";
import { useRoute } from "vue-router";

const route = useRoute();
const recipes = [
  { title: "recipe title", date: new Date() },
  { title: "recipe", date: new Date() },
  { title: "random recipe", date: new Date() },
  { title: "title of recipe", date: new Date() },
];
</script>

<template>
  <main>
    <RouterLink v-if="route.path !== '/CreateRecipeView'" to="/CreateRecipeView"
      >Create New Recipe</RouterLink
    >
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="recipe in recipes">
          <td>
            <RouterLink to="/recipe">{{ recipe.title }} </RouterLink>
          </td>
          <td>{{ formatDate(recipe.date) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
table,
td,
th {
  border: 1px solid var(--red);
  text-align: center;
}

thead {
  font-weight: 700;
  color: var(--red);
  background-color: bisque;
}

table {
  width: 100%;
}

th,
td {
  padding: 16px;
}
</style>

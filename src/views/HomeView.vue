<script setup>
import { formatDate } from "@/lib/time";
import { useRoute } from "vue-router";

const route = useRoute();
const recipes = [
  { title: "Recipe Title", date: new Date() },
  { title: "Recipe", date: new Date() },
  { title: "Random Recipe", date: new Date() },
  { title: "Title of Recipe", date: new Date() },
];
</script>

<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>date</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="recipe in recipes">
          <td>
            <RouterLink to="/recipe">{{ recipe.title }}</RouterLink>
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
  border: 1px solid #000000;
  text-align: center;
}

thead {
  background-color: #77ccb0;
}

table {
  width: 100%;
}

th,
td {
  padding: 16px;
}
</style>

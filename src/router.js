import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RecipeView from "@/views/RecipeView.vue";
import CreateRecipeView from "@/views/CreateRecipeView.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "Home",
    },
    {
      path: "/recipe",
      component: RecipeView,
      name: "Recipe",
    },
    {
      path: "/recipe/create",
      component: CreateRecipeView,
      name: "CreateRecipe",
    },
  ],
});

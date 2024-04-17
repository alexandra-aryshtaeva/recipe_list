<script setup>
import { ref } from "vue";
let seeIngredient = ref(false);
let seeStep = ref(false);
let recipe = {
  title: "MyRecipe",
  ingredientes: [
    {
      name: "tomato",
      quantity: 1,
      measure: "grams",
    },
    {
      name: "avocado",
      quantity: 1,
      measure: "spoons",
    },
    {
      name: "pineapple",
      quantity: 2,
      measure: "grams",
    },
  ],
  steps: ["cut stuff", "boil stuff", "season stuff"],
};

const ingredients = ["banana", "potatoes", "fish", "meat", "chorizo"];
function showIngredient() {
  seeIngredient.value = true;
}

function addToList(ingredient) {
  // let length = ingredients.length;

  // recipe.ingredientes.push(ingredients[length - 1]);
  console.log(ingredient);
}

function showStep() {
  seeStep.value = true;
}
</script>

<template>
  <div class="wrapper">
    <h1>{{ recipe.title }}</h1>

    <div class="ingredientsWrapper">
      <div class="ingredients">
        Ingredients:
        <li v-for="ingredient in recipe.ingredientes">
          {{ ingredient.name }}: {{ ingredient.quantity }}
          {{ ingredient.measure }}.
        </li>

        <button @click="showIngredient">Add ingredient</button>

        <ul v-if="seeIngredient">
          <li v-for="ingredient in ingredients" :key="ingredient.name">
            <button @click="addToList(ingredient)">{{ ingredient }}</button>
          </li>
          <button @click="seeIngredient = false">exit</button>
        </ul>
      </div>
    </div>

    <div class="stepsWrapper">
      <div class="steps">
        Steps:
        <li v-for="step in recipe.steps">{{ step }}</li>

        <button @click="showStep">Add step</button>

        <ul v-if="seeStep">
          <button>new Steps</button>
          <button @click="seeStep = false">exit</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* no styling body */

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--beige);
  text-align: center;
}

h1 {
  padding: 32px;
  margin: 0px;

  font-family: "Kaushan Script";
  font-weight: 600;
  font-size: 64px;

  color: var(--red);
  border: 2px solid var(--red);
  background-color: bisque;
}

.ingredientsWrapper {
  height: 50vh;
  border: 2px solid var(--red);
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ingredients {
  background-color: bisque;
}
.stepsWrapper {
  border: 2px solid var(--red);
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
}
.steps {
  background-color: bisque;
}
ul,
li {
  list-style: none;
}
</style>

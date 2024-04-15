<script setup>
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
</script>

<template>
  <div class="wrapper">
    <h1>{{ recipe.title }}</h1>

    <div class="ingredients">
      Ingredients:
      <li v-for="ingredient in recipe.ingredientes">
        {{ ingredient.name }}: {{ ingredient.quantity }}
        {{ ingredient.measure }}.
      </li>
    </div>

    <div class="steps">
      Steps:
      <li v-for="step in recipe.steps">{{ step }}</li>
    </div>
  </div>
</template>

<!-- <style scoped>
ul,
li {
  list-style: none;
}
body {
  --red: rgb(194, 87, 87);
  margin: 0px;
  padding: 0px;
}
main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.wrapper {
  border: solid var(--red) 4px;
  border-radius: 8px;
  padding: 16px;
}
h1 {
  color: var(--red);
  padding-bottom: 1px;
  margin: 0px;
}

.ingredients {
  border-bottom: 2px solid var(--red);
  padding: 12px 0px;
}
.steps {
  border-bottom: 2px solid var(--red);
  padding: 12px 0px;
}
</style> -->

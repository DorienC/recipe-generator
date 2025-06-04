function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "The recipe will be here...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

var recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  var instructionsInput = document.querySelector("#user-instructions");
  var apiKey = "f959a3f02e57eeo3t4b616bd0ba0ddb5";
  var apiPrompt = `User instructions: Generate a healthy recipe that I can eat for ${instructionsInput.value}`;
  var apiContext =
    "you're a sporter who likes to eat healthy. Your mission is to generate easy recipes that only take up to 6 ingredients. Display the ingredients first and then the recipe in up to 8 steps. Make sure to follow the user instructions. Show each ingredient and each step of the recipe in a new line using <br/>. start with the title of the recipe, add a <br/>, add the ingredient title and list, add <br/>, add the title and list of recipe steps. Add a <br/> after the last step of the recipe. End with something like 'enjoy your meal'";
  var apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating"> ⏳ Generating recipe about ${instructionsInput.value}... <div/>`;

  axios.get(apiUrl).then(displayRecipe);
}

var recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

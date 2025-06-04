function displayRecipe(response) {
  console.log("recipe generated");
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
  var apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;
  var apiPrompt = `User instructions: Generate a healthy recipe that I can eat for ${instructionsInput.value}`;
  var apiContext =
    "you're a sporter who likes to eat healthy. Your mission is to generate easy recipes that only take 6 ingredients. Make sure to follow the user instructions.";

  console.log("generating recipe");
  console.log(`prompt = ${apiPrompt}`);
  console.log(`context = ${apiContext}`);

  axios.get(apiUrl).then(displayRecipe);
}

var recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

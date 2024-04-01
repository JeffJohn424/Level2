// Define the recipe steps
const recipeSteps = [
  "Preheat the oven to 350°F (175°C).",
  "Grease and flour a 9x9 inch pan or line with parchment paper.",
  "In a medium bowl, cream together the sugar and butter.",
  "Beat in the eggs, one at a time, then stir in the vanilla.",
  "Combine flour and baking powder, add to the creamed mixture and mix well.",
  "Finally, fold in the chocolate chips.",
  "Spread the batter into the prepared pan.",
  "Bake for 25 to 30 minutes in the preheated oven.",
  "Cool bars for 5 minutes before cutting.",
  "Serve and enjoy your delicious chocolate chip bars!"
];

// Function to simulate displaying each step with a delay
function displayStep(step, callback) {
  setTimeout(() => {
    const stepElement = document.createElement('p');
    stepElement.textContent = `Step ${step + 1}: ${recipeSteps[step]}`;
    document.getElementById('recipe-steps').appendChild(stepElement);
    callback();
  }, 1000);
}

// Function to iterate through recipe steps using callbacks
function cookRecipe(steps, index) {
  if (index < steps.length) {
    displayStep(index, function() {
      cookRecipe(steps, index + 1);
    });
  } else {
    console.log("Recipe complete! Enjoy your dish!");
  }
}

// Start cooking the recipe
cookRecipe(recipeSteps, 0);

document.addEventListener("DOMContentLoaded", function () {
  const addStepButton = document.getElementById("add-step-button");
  const stepsList = document.getElementById("steps-list");

  addStepButton.addEventListener("click", function () {
    const textArea = document.createElement("textarea");
    textArea.name = "steps";
    textArea.id = "steps";
    (textArea.classList.add = " form-input"), "stepsInput";
    stepsList.appendChild(textArea);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addIngredientButton = document.getElementById("add-ingredient-button");
  const ingredientsList = document.getElementById("ingredient-list");
  let ingredientCount = 0;
  addIngredientButton.addEventListener("click", function () {
    const newIngredient = document.createElement("li");
    const ingredientGroup = document.createElement("div");
    const ingredientTextarea = document.createElement("textarea");
    const quantityInput = document.createElement("input");

    ingredientGroup.classList.add("ingredient-group");
    ingredientTextarea.classList.add("form-input", "ingredient-textarea");
    ingredientTextarea.setAttribute("rows", "1");
    ingredientTextarea.setAttribute("required", "required");
    ingredientTextarea.setAttribute("placeholder", "Ingrédient");
    ingredientTextarea.name = `ingredients[${ingredientCount}][name]`;

    quantityInput.classList.add("form-input", "ingredient-quantity");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.name = `ingredients[${ingredientCount}][quantity]`;

    ingredientGroup.appendChild(ingredientTextarea);
    ingredientGroup.appendChild(quantityInput);
    newIngredient.appendChild(ingredientGroup);

    ingredientsList.appendChild(newIngredient);
    ingredientCount++;
  });
});

// ajouter les champs exactement pareil que steps / mais 2 champs a la fois /
// ingredient quantity

// en back je recois 2 liste d'objets , avant de transformer ca en model , la combiner en 1 seule d'objets

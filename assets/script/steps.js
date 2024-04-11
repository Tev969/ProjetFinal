document.addEventListener("DOMContentLoaded", function () {
  const addStepButton = document.getElementById("add-step-button");
  const stepsList = document.getElementById("steps-list");
  let add = 0;
  let remove = 0;

  addStepButton.addEventListener("click", function () {
    const textArea = document.createElement("textarea");
    textArea.name = "steps";
    textArea.id = "steps";
    textArea.classList.add("form-input", "stepsInput");

    const btn = document.createElement("button");
    add++;
    console.log(add);
    btn.innerText = "-";
    btn.type = "button";

    const divContainer = document.createElement("div");
    divContainer.appendChild(textArea);
    divContainer.appendChild(btn);
    stepsList.appendChild(divContainer);

    const removeElement = (event) => {
      let mydiv = event.target.parentElement;
      if (mydiv) {
        mydiv.remove();
        remove--;
      }
    };

    btn.addEventListener("click", removeElement);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addIngredientButton = document.getElementById("add-ingredient-button");
  const ingredientsList = document.getElementById("ingredient-list");
  let ingredientCount = 0;

  addIngredientButton.addEventListener("click", function () {
    const ingredientTextarea = document.createElement("textarea");
    ingredientTextarea.classList.add("form-input", "ingredient-textarea");
    ingredientTextarea.setAttribute("rows", "1");
    ingredientTextarea.setAttribute("required", "required");
    ingredientTextarea.setAttribute("placeholder", "Ingrédient");
    ingredientTextarea.name = `ingredients[${ingredientCount}][name]`;

    const quantityInput = document.createElement("input");
    quantityInput.classList.add("form-input", "ingredient-quantity");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.name = `ingredients[${ingredientCount}][quantity]`;

    const ingredientGroup = document.createElement("div");
    ingredientGroup.classList.add("ingredient-group");
    ingredientGroup.appendChild(ingredientTextarea);
    ingredientGroup.appendChild(quantityInput);

    const removeBtn = document.createElement("button")
    removeBtn.type = "button"
    removeBtn.innerText = "-"

    const removeIngredient = (event) => {
        const parentDiv = event.target.parentElement;
        if (parentDiv) {
            parentDiv.remove();
        }
    }
    
    removeBtn.addEventListener('click' , removeIngredient)


    ingredientGroup.appendChild(removeBtn)
    ingredientsList.appendChild(ingredientGroup);
    ingredientCount++;
  });
});

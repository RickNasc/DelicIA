function addToList(inputElementId, listElementId) {
    const input = document.getElementById(inputElementId);
    const list = document.getElementById(listElementId);
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value.trim();
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.onclick = () => li.remove();
        li.appendChild(removeBtn);
        list.appendChild(li);
        input.value = "";
    }
}

function addMedia() { addToList("mediaInput", "mediaList"); }
function addIngredient() { addToList("ingredientInput", "ingredientList"); }
function addStep() { addToList("stepInput", "stepList"); }
function addCategory() { addToList("categoryInput", "categoryList"); }

document.getElementById("recipeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Receita publicada com sucesso! (Funcionalidade mockada)");
    window.location.hash = "home_page";
});


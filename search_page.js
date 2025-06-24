function performSearch() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    const filteredRecipes = mockRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );

    if (filteredRecipes.length === 0) {
        searchResultsContainer.innerHTML = "<p style=\"text-align: center;\">Nenhuma receita encontrada para sua busca.</p>";
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card" onclick="location.href=\'#recipe_detail_page?id=${recipe.id}\'">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-card-content">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description.substring(0, 100)}...</p>
                    <div class="recipe-card-meta">
                        <span>&#128337; ${recipe.prepTime}</span>
                        <span>&#127869; ${recipe.servings}</span>
                    </div>
                </div>
            </div>
        `;
        searchResultsContainer.insertAdjacentHTML("beforeend", recipeCard);
    });
}

function initSearchPage(params) {
    const searchInput = document.getElementById("searchInput");
    if (params.query) {
        searchInput.value = params.query;
        performSearch();
    } else {
        document.getElementById("searchResults").innerHTML = "<p style=\"text-align: center;\">Digite algo para buscar receitas.</p>";
    }
}

// Initial call for search page
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash.includes("search_page")) {
        const [page, queryString] = window.location.hash.substring(1).split("?");
        const params = {};
        if (queryString) {
            queryString.split("&").forEach(pair => {
                const [key, value] = pair.split("=");
                params[key] = decodeURIComponent(value);
            });
        }
        initSearchPage(params);
    }
});


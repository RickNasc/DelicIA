function initFavorites_page() {
    const favoritesGrid = document.getElementById("favorites-grid");
    favoritesGrid.innerHTML = ""; // Clear existing content

    // Assuming a default user for mock data
    const userId = "user1"; 
    const userFavorites = getMockUserFavorites(userId);

    if (userFavorites.length === 0) {
        favoritesGrid.innerHTML = "<p style=\"text-align: center;\">Você ainda não tem receitas favoritas.</p>";
        return;
    }

    userFavorites.forEach(recipe => {
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
        favoritesGrid.insertAdjacentHTML("beforeend", recipeCard);
    });
}

// Initial call for favorites page
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash.includes("favorites_page")) {
        initFavorites_page();
    }
});


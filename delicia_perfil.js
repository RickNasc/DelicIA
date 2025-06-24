// JavaScript da Página de Perfil - DelicIA App
// Arquivo: delicia_perfil.js
// Função: Carregar dados do usuário, exibir receitas e gerenciar abas

console.log("Script de perfil carregado!");

// Função para alternar entre as abas "Minhas Receitas" e "Favoritas"
function showTab(tabId) {
    console.log("Alternando para a aba:", tabId);
    
    try {
        const tabs = document.querySelectorAll(".tabs .tab");
        const contents = document.querySelectorAll(".tab-content");

        // Remove a classe 'active' de todas as abas e conteúdos
        tabs.forEach(tab => tab.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        // Adiciona a classe 'active' à aba clicada e ao seu conteúdo correspondente
        const activeTab = document.getElementById(`${tabId}Tab`);
        const activeContent = document.getElementById(tabId);
        
        if (activeTab && activeContent) {
            activeTab.classList.add("active");
            activeContent.classList.add("active");
        } else {
            console.error("Elemento da aba não encontrado:", tabId);
        }
    } catch (error) {
        console.error("Erro ao alternar abas:", error);
    }
}

// Função principal que inicializa a página de perfil
function initDeliciaPerfilPage(params) {
    console.log("Inicializando página de perfil com parâmetros:", params);
    
    try {
        // Pega o usuário logado do localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser) {
            throw new Error("Nenhum usuário logado encontrado");
        }

        const userId = loggedInUser.id;
        const user = getMockUser(userId);

        if (!user) {
            throw new Error("Dados do usuário não encontrados");
        }

        console.log("Usuário encontrado:", user.name);
        
        // Preenche as informações do perfil
        const profilePicture = document.querySelector(".profile-picture");
        const username = document.querySelector(".username");
        const userEmail = document.querySelector(".user-email");
        const recipesCount = document.querySelector(".recipes-count");
        const followersCount = document.querySelector(".followers-count");
        const followingCount = document.querySelector(".following-count");

        if (profilePicture) profilePicture.src = user.profilePicture || 'placeholder-user.jpg';
        if (username) username.textContent = user.name || 'Usuário';
        if (userEmail) userEmail.textContent = user.email || 'email@exemplo.com';
        if (recipesCount) recipesCount.textContent = user.recipesCount || '0';
        if (followersCount) followersCount.textContent = user.followersCount || '0';
        if (followingCount) followingCount.textContent = user.followingCount || '0';

        // Popula a aba "Minhas Receitas"
        populateRecipesSection('my-recipes', getMockUserRecipes(userId), 
            "Você ainda não tem receitas. Que tal criar uma? ➕");

        // Popula a aba "Favoritas"
        populateRecipesSection('favorites', getMockUserFavorites(userId), 
            "Você ainda não tem receitas favoritas. Que tal explorar algumas? 🔍");

        // Adiciona event listeners
        setupEventListeners();

    } catch (error) {
        console.error("Erro ao inicializar página de perfil:", error);
        alert("Erro ao carregar perfil. Você será redirecionado para o login.");
        window.location.hash = "delicia_login";
    }
}

// Função auxiliar para popular seções de receitas
function populateRecipesSection(sectionId, recipes, emptyMessage) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.innerHTML = "";

    if (!recipes || recipes.length === 0) {
        section.innerHTML = `<p style="text-align: center; color: #999;">${emptyMessage}</p>`;
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        section.insertAdjacentHTML("beforeend", recipeCard);
    });
}

// Função auxiliar para criar cards de receita
function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" onclick="location.href='#recipe_detail_page?id=${recipe.id}'">
            <div class="recipe-img">
                <img src="${recipe.image || 'placeholder-recipe.jpg'}" 
                     alt="${recipe.title || 'Receita sem nome'}" 
                     onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\"><path fill=\"%23cccccc\" d=\"M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z\"/></svg>'">
            </div>
            <div class="recipe-info">
                <h3>${recipe.title || 'Receita sem nome'}</h3>
                <div class="recipe-meta">
                    <span>❤️ ${recipe.likesCount || 0}</span>
                    <span>⏱️ ${recipe.prepTime || '-- min'}</span>
                </div>
            </div>
        </div>
    `;
}

// Configura os event listeners da página
function setupEventListeners() {
    const myRecipesTab = document.getElementById("myRecipesTab");
    const favoritesTab = document.getElementById("favoritesTab");
    const logoutBtn = document.getElementById("logoutBtn");
    const editProfileBtn = document.getElementById("editProfileBtn");

    if (myRecipesTab) myRecipesTab.addEventListener("click", () => showTab("my-recipes"));
    if (favoritesTab) favoritesTab.addEventListener("click", () => showTab("favorites"));
    if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);
    if (editProfileBtn) editProfileBtn.addEventListener("click", handleEditProfile);
}

// Função para lidar com o logout do usuário
function handleLogout() {
    if (confirm("Tem certeza que deseja sair?")) {
        console.log("Realizando logout...");
        localStorage.removeItem("loggedInUser");
        window.location.hash = "delicia_login";
    }
}

// Função para lidar com a edição de perfil
function handleEditProfile() {
    console.log("Iniciando edição de perfil...");
    // Implementação futura
    alert("Funcionalidade 'Editar Perfil' em desenvolvimento! 🚧");
}

// Exporta funções para uso global
window.initDeliciaPerfilPage = initDeliciaPerfilPage;
window.showTab = showTab;
window.handleLogout = handleLogout;

console.log("Script de perfil totalmente carregado e pronto!");
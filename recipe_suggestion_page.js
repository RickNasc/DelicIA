// JavaScript da Página de Sugestão de Receitas - DelicIA App
// Arquivo: recipe_suggestion_page.js
// Função: Gerar sugestões inteligentes de receitas baseadas em ingredientes e preferências

console.log("Script de sugestão de receitas carregado!"); // debug

// Array de ingredientes adicionados pelo usuário
let selectedIngredients = [];

// Base de dados de receitas para sugestões inteligentes
const recipeDatabase = [
    {
        id: 'sug1',
        title: 'Frango Grelhado com Legumes',
        description: 'Prato saudável e saboroso com frango grelhado e legumes frescos',
        ingredients: ['frango', 'brócolis', 'cenoura', 'azeite', 'alho'],
        time: 30,
        difficulty: 'fácil',
        tags: ['fitness', 'low carb', 'sem glúten'],
        image: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Frango+Grelhado',
        rating: 4.8
    },
    {
        id: 'sug2',
        title: 'Risoto de Cogumelos Vegano',
        description: 'Cremoso risoto feito com leite de coco e cogumelos frescos',
        ingredients: ['arroz', 'cogumelos', 'cebola', 'alho', 'leite de coco'],
        time: 45,
        difficulty: 'médio',
        tags: ['vegano', 'vegetariano', 'sem lactose'],
        image: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Risoto+Vegano',
        rating: 4.6
    },
    {
        id: 'sug3',
        title: 'Salada de Quinoa Colorida',
        description: 'Salada nutritiva e colorida com quinoa e vegetais frescos',
        ingredients: ['quinoa', 'tomate', 'pepino', 'cebola', 'limão'],
        time: 15,
        difficulty: 'fácil',
        tags: ['vegetariano', 'fitness', 'sem glúten'],
        image: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Salada+Quinoa',
        rating: 4.7
    },
    {
        id: 'sug4',
        title: 'Batata Doce Assada Recheada',
        description: 'Batata doce assada com recheio proteico e saboroso',
        ingredients: ['batata doce', 'frango', 'queijo', 'brócolis'],
        time: 60,
        difficulty: 'fácil',
        tags: ['fitness', 'sem glúten'],
        image: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Batata+Recheada',
        rating: 4.5
    },
    {
        id: 'sug5',
        title: 'Macarrão de Abobrinha Low Carb',
        description: 'Alternativa saudável ao macarrão tradicional com molho de tomate',
        ingredients: ['abobrinha', 'tomate', 'alho', 'manjericão', 'azeite'],
        time: 20,
        difficulty: 'fácil',
        tags: ['low carb', 'vegetariano', 'sem glúten'],
        image: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Macarrão+Abobrinha',
        rating: 4.4
    },
    {
        id: 'sug6',
        title: 'Smoothie Bowl Energético',
        description: 'Bowl nutritivo com frutas e granola para começar o dia',
        ingredients: ['banana', 'morango', 'aveia', 'mel', 'granola'],
        time: 10,
        difficulty: 'fácil',
        tags: ['vegetariano', 'fitness', 'sem lactose'],
        image: 'https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Smoothie+Bowl',
        rating: 4.9
    }
];

// Função principal que inicializa a página de sugestões
function initRecipe_suggestion_page(params) {
    console.log("Inicializando página de sugestões com parâmetros:", params); // debug
    
    // Adiciona event listeners para os elementos da página
    setupEventListeners();
    
    // Limpa ingredientes selecionados ao carregar a página
    selectedIngredients = [];
    updateIngredientTags();
}

// Configura todos os event listeners da página
function setupEventListeners() {
    console.log("Configurando event listeners..."); // debug
    
    // Event listener para o campo de ingredientes
    const ingredientsInput = document.getElementById('ingredientsInput');
    if (ingredientsInput) {
        ingredientsInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                addIngredientsFromInput();
            }
        });
    }
}

// Adiciona um ingrediente à lista de selecionados
function addIngredient(ingredient) {
    console.log("Adicionando ingrediente:", ingredient); // debug
    
    if (!selectedIngredients.includes(ingredient.toLowerCase())) {
        selectedIngredients.push(ingredient.toLowerCase());
        updateIngredientTags();
        
        // Feedback visual
        const button = event.target;
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
}

// Adiciona ingredientes do campo de texto
function addIngredientsFromInput() {
    const input = document.getElementById('ingredientsInput');
    const text = input.value.trim();
    
    if (text) {
        const ingredients = text.split(',').map(ing => ing.trim().toLowerCase());
        ingredients.forEach(ingredient => {
            if (ingredient && !selectedIngredients.includes(ingredient)) {
                selectedIngredients.push(ingredient);
            }
        });
        
        input.value = '';
        updateIngredientTags();
    }
}

// Atualiza a exibição das tags de ingredientes
function updateIngredientTags() {
    const tagsContainer = document.getElementById('ingredientTags');
    if (!tagsContainer) return;
    
    tagsContainer.innerHTML = '';
    
    selectedIngredients.forEach(ingredient => {
        const tag = document.createElement('span');
        tag.className = 'ingredient-tag';
        tag.innerHTML = `
            ${ingredient}
            <button onclick="removeIngredient('${ingredient}')" class="remove-tag">×</button>
        `;
        tagsContainer.appendChild(tag);
    });
}

// Remove um ingrediente da lista
function removeIngredient(ingredient) {
    console.log("Removendo ingrediente:", ingredient); // debug
    selectedIngredients = selectedIngredients.filter(ing => ing !== ingredient);
    updateIngredientTags();
}

// Função principal para gerar sugestões inteligentes
function generateSmartSuggestion() {
    console.log("Gerando sugestão inteligente..."); // debug
    
    // Coleta dados do formulário
    const formData = collectFormData();
    console.log("Dados do formulário:", formData); // debug
    
    // Validação básica
    if (selectedIngredients.length === 0 && formData.preferences.length === 0) {
        alert("Por favor, adicione pelo menos um ingrediente ou selecione uma preferência! 🥕");
        return;
    }
    
    // Mostra loading
    showLoading();
    
    // Simula processamento da IA (em um app real, seria uma chamada para API)
    setTimeout(() => {
        const suggestions = generateIntelligentSuggestions(formData);
        displaySuggestions(suggestions);
        hideLoading();
    }, 2000);
}

// Coleta todos os dados do formulário
function collectFormData() {
    const preferences = [];
    const checkboxes = document.querySelectorAll('.preference-item input[type="checkbox"]:checked');
    checkboxes.forEach(cb => preferences.push(cb.value));
    
    const timeRadio = document.querySelector('input[name="time"]:checked');
    const difficultyRadio = document.querySelector('input[name="difficulty"]:checked');
    
    return {
        ingredients: [...selectedIngredients],
        preferences: preferences,
        maxTime: timeRadio ? timeRadio.value : 'any',
        difficulty: difficultyRadio ? difficultyRadio.value : 'fácil'
    };
}

// Gera sugestões inteligentes baseadas nos dados do usuário
function generateIntelligentSuggestions(formData) {
    console.log("Processando dados para sugestões:", formData); // debug
    
    let scoredRecipes = recipeDatabase.map(recipe => {
        let score = 0;
        
        // Pontuação por ingredientes compatíveis
        const matchingIngredients = recipe.ingredients.filter(ing => 
            formData.ingredients.some(userIng => ing.includes(userIng) || userIng.includes(ing))
        );
        score += matchingIngredients.length * 10;
        
        // Pontuação por preferências
        const matchingPreferences = recipe.tags.filter(tag => 
            formData.preferences.includes(tag)
        );
        score += matchingPreferences.length * 15;
        
        // Pontuação por tempo
        if (formData.maxTime !== 'any') {
            const maxTime = parseInt(formData.maxTime);
            if (recipe.time <= maxTime) {
                score += 5;
            } else {
                score -= 10; // Penaliza receitas que demoram muito
            }
        }
        
        // Pontuação por dificuldade
        if (recipe.difficulty === formData.difficulty) {
            score += 8;
        }
        
        // Bonus por rating alto
        score += recipe.rating * 2;
        
        return { ...recipe, score };
    });
    
    // Ordena por pontuação e retorna as 3 melhores
    scoredRecipes.sort((a, b) => b.score - a.score);
    return scoredRecipes.slice(0, 3);
}

// Exibe as sugestões na tela
function displaySuggestions(suggestions) {
    console.log("Exibindo sugestões:", suggestions); // debug
    
    const resultsSection = document.getElementById('resultsSection');
    const suggestionsGrid = document.getElementById('suggestionsGrid');
    
    if (!resultsSection || !suggestionsGrid) return;
    
    // Limpa resultados anteriores
    suggestionsGrid.innerHTML = '';
    
    if (suggestions.length === 0) {
        suggestionsGrid.innerHTML = `
            <div class="no-suggestions">
                <h4>😅 Ops! Não encontramos receitas perfeitas</h4>
                <p>Tente adicionar mais ingredientes ou ajustar suas preferências.</p>
            </div>
        `;
    } else {
        suggestions.forEach((recipe, index) => {
            const suggestionCard = createSuggestionCard(recipe, index);
            suggestionsGrid.appendChild(suggestionCard);
        });
    }
    
    // Mostra a seção de resultados com animação
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Cria um card de sugestão
function createSuggestionCard(recipe, index) {
    const card = document.createElement('div');
    card.className = 'suggestion-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Cria as estrelas de rating
    const stars = '⭐'.repeat(Math.floor(recipe.rating));
    
    // Cria as tags
    const tagsHtml = recipe.tags.slice(0, 3).map(tag => 
        `<span class="recipe-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="suggestion-image">
            <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Receita'">
            <div class="suggestion-rating">${stars} ${recipe.rating}</div>
        </div>
        <div class="suggestion-content">
            <h4>${recipe.title}</h4>
            <p>${recipe.description}</p>
            <div class="suggestion-meta">
                <span class="time-badge">⏱️ ${recipe.time} min</span>
                <span class="difficulty-badge">📊 ${recipe.difficulty}</span>
            </div>
            <div class="suggestion-tags">
                ${tagsHtml}
            </div>
            <div class="suggestion-actions">
                <button class="view-recipe-btn" onclick="viewRecipeDetails('${recipe.id}')">
                    👀 Ver Receita
                </button>
                <button class="save-recipe-btn" onclick="saveRecipe('${recipe.id}')">
                    ❤️ Salvar
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Visualiza os detalhes de uma receita sugerida
function viewRecipeDetails(recipeId) {
    console.log("Visualizando receita:", recipeId); // debug
    
    // Em um app real, isso navegaria para a página de detalhes
    // Por enquanto, vamos simular com um modal ou redirecionamento
    alert(`Redirecionando para os detalhes da receita ${recipeId}... 🍳`);
    
    // Simula navegação (em um app real seria algo como):
    // window.location.hash = `recipe_detail_page?id=${recipeId}`;
}

// Salva uma receita nos favoritos
function saveRecipe(recipeId) {
    console.log("Salvando receita:", recipeId); // debug
    
    // Simula salvamento nos favoritos
    const button = event.target;
    button.innerHTML = '✅ Salva!';
    button.style.backgroundColor = '#4CAF50';
    button.disabled = true;
    
    // Feedback visual
    setTimeout(() => {
        button.innerHTML = '❤️ Salvar';
        button.style.backgroundColor = '';
        button.disabled = false;
    }, 2000);
    
    alert("Receita salva nos seus favoritos! ❤️");
}

// Mostra o estado de loading
function showLoading() {
    const loadingSection = document.getElementById('loadingSection');
    const resultsSection = document.getElementById('resultsSection');
    const generateBtn = document.getElementById('generateBtn');
    
    if (loadingSection) loadingSection.style.display = 'block';
    if (resultsSection) resultsSection.style.display = 'none';
    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<span class="btn-icon">⏳</span> Gerando...';
    }
}

// Esconde o estado de loading
function hideLoading() {
    const loadingSection = document.getElementById('loadingSection');
    const generateBtn = document.getElementById('generateBtn');
    
    if (loadingSection) loadingSection.style.display = 'none';
    if (generateBtn) {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<span class="btn-icon">✨</span> Gerar Sugestão Inteligente';
    }
}

// Exporta funções para uso global (jeito estudantil)
window.initRecipe_suggestion_page = initRecipe_suggestion_page;
window.addIngredient = addIngredient;
window.removeIngredient = removeIngredient;
window.generateSmartSuggestion = generateSmartSuggestion;
window.viewRecipeDetails = viewRecipeDetails;
window.saveRecipe = saveRecipe;

console.log("Script de sugestão de receitas totalmente carregado e pronto!"); // debug final


// JavaScript da Página Inicial - DelicIA App
// Arquivo: home_page.js
// Função: Carregar e exibir receitas populares

console.log("Carregando página inicial..."); // debug

// Função principal que inicializa a página inicial
function initHome_page() {
    console.log("Inicializando página home..."); // debug para ver se a função foi chamada
    
    // Pega o elemento onde vão aparecer as receitas
    const gridReceitas = document.getElementById("gridReceitasPopulares");
    
    // Limpa o conteúdo anterior (se houver)
    gridReceitas.innerHTML = "";

    // Pega as primeiras 6 receitas para mostrar como populares
    const receitasParaMostrar = mockRecipes.slice(0, 6); // aumentei para 6 receitas
    
    console.log("Mostrando", receitasParaMostrar.length, "receitas populares"); // debug

    // Para cada receita, cria um card
    receitasParaMostrar.forEach(function(receita, indice) {
        console.log("Criando card para receita:", receita.title); // debug
        
        // Cria o HTML do card da receita
        const cardReceita = `
            <div class="recipe-card" onclick="abrirReceita(${receita.id})">
                <img src="${receita.image}" alt="${receita.title}" onerror="this.src='https://via.placeholder.com/300x180?text=Sem+Imagem'">
                <div class="recipe-card-content">
                    <h3>${receita.title}</h3>
                    <p>${receita.description.substring(0, 80)}...</p>
                    <div class="recipe-card-meta">
                        <span>⏱️ ${receita.prepTime}</span>
                        <span>🍽️ ${receita.servings} porções</span>
                        <span>⭐ ${receita.rating || '4.5'}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Adiciona o card no grid
        gridReceitas.insertAdjacentHTML("beforeend", cardReceita);
    });
    
    // Adiciona um pouco de interatividade extra (típico de estudante)
    adicionarEfeitosCards();
    
    console.log("Página inicial carregada com sucesso!"); // debug final
}

// Função para abrir uma receita específica
function abrirReceita(idReceita) {
    console.log("Abrindo receita com ID:", idReceita); // debug
    
    // Navega para a página de detalhes da receita
    location.href = '#recipe_detail_page?id=' + idReceita;
}

// Função para adicionar efeitos nos cards (deixar mais interativo)
function adicionarEfeitosCards() {
    console.log("Adicionando efeitos nos cards..."); // debug
    
    // Pega todos os cards de receita
    const cards = document.querySelectorAll('.recipe-card');
    
    // Para cada card, adiciona eventos de mouse
    cards.forEach(function(card, indice) {
        // Efeito quando o mouse passa por cima
        card.addEventListener('mouseenter', function() {
            console.log("Mouse sobre card", indice); // debug
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });
        
        // Efeito quando o mouse sai
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
        
        // Efeito quando clica
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px) scale(0.98)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
    });
}

// Função para atualizar receitas populares (pode ser chamada depois)
function atualizarReceitasPopulares() {
    console.log("Atualizando receitas populares..."); // debug
    
    // Recarrega a página
    initHome_page();
}

// Função para mostrar mensagem de boas-vindas (típico de estudante)
function mostrarBoasVindas() {
    const usuario = localStorage.getItem("loggedInUser");
    if (usuario) {
        const dadosUsuario = JSON.parse(usuario);
        console.log("Usuário logado:", dadosUsuario.name); // debug
        
        // Mostra uma mensagem personalizada (pode ser melhorada)
        setTimeout(function() {
            // alert("Bem-vindo(a), " + dadosUsuario.name + "! 🍳"); // comentado para não incomodar
        }, 1000);
    }
}

// Função que roda quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado na página inicial"); // debug
    
    // Mostra boas-vindas se estiver logado
    mostrarBoasVindas();
});

// Função auxiliar para formatar tempo (pode ser útil)
function formatarTempo(minutos) {
    if (minutos < 60) {
        return minutos + " min";
    } else {
        const horas = Math.floor(minutos / 60);
        const minutosRestantes = minutos % 60;
        return horas + "h " + (minutosRestantes > 0 ? minutosRestantes + "min" : "");
    }
}

// Exporta funções para uso global (jeito estudantil)
window.abrirReceita = abrirReceita;
window.atualizarReceitasPopulares = atualizarReceitasPopulares;

console.log("Script da página inicial carregado!"); // debug final


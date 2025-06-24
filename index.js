// DelicIA App - Sistema de Navegação
// Projeto de Receitas - Programação Web
// Autor: Estudante de TI

console.log("Carregando o app DelicIA..."); // debug para ver se tá funcionando

// Função principal para carregar as páginas do app
function carregarPagina(nomePagina, parametros = {}) {
    console.log("Carregando página:", nomePagina); // debug
    
    // Busca o arquivo HTML da página
    fetch(`${nomePagina}.html`)
        .then(resposta => resposta.text())
        .then(html => {
            // Pega o container principal do app
            const containerApp = document.getElementById("app-container");
            containerApp.innerHTML = html;

            // Remove scripts antigos para evitar problemas
            document.querySelectorAll("script[data-page-script]").forEach(script => script.remove());

            // Executa os scripts da página carregada
            const scripts = containerApp.querySelectorAll("script");
            scripts.forEach(scriptAntigo => {
                const scriptNovo = document.createElement("script");
                scriptNovo.setAttribute("data-page-script", "true"); // marca como script da página
                
                if (scriptAntigo.src) {
                    scriptNovo.src = scriptAntigo.src;
                } else {
                    scriptNovo.textContent = scriptAntigo.textContent;
                }
                document.body.appendChild(scriptNovo);
            });

            // Chama função de inicialização da página se existir
            const nomeFuncaoInit = `init${primeiraLetraMaiuscula(nomePagina)}Page`;
            if (typeof window[nomeFuncaoInit] === "function") {
                console.log("Inicializando página com função:", nomeFuncaoInit); // debug
                window[nomeFuncaoInit](parametros);
            }
        })
        .catch(erro => {
            console.error("Erro ao carregar página:", erro);
            alert("Ops! Erro ao carregar a página. Tente novamente."); // feedback para usuário
        });
}

// Função auxiliar para deixar primeira letra maiúscula
function primeiraLetraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Função para gerenciar as rotas/navegação do app
function gerenciarRoteamento() {
    console.log("Verificando roteamento..."); // debug
    
    // Verifica se usuário está logado
    const usuarioLogado = localStorage.getItem("loggedInUser");
    console.log("Usuário logado:", usuarioLogado); // debug
    
    // Pega a página atual da URL
    const hash = window.location.hash.substring(1);
    const [pagina, queryString] = hash.split("?");
    const parametros = {};

    // Processa parâmetros da URL se existirem
    if (queryString) {
        queryString.split("&").forEach(par => {
            const [chave, valor] = par.split("=");
            parametros[chave] = decodeURIComponent(valor);
        });
    }

    // Páginas que podem ser acessadas sem login
    const paginasPublicas = ["delicia_login", "create_account_page", "reset_password_page"];

    // Verifica se precisa estar logado para acessar a página
    if (!usuarioLogado && !paginasPublicas.includes(pagina)) {
        console.log("Usuário não logado, redirecionando para login"); // debug
        window.location.hash = "delicia_login";
        carregarPagina("delicia_login");
        return;
    }

    // Carrega a página solicitada
    if (pagina) {
        console.log("Carregando página solicitada:", pagina); // debug
        carregarPagina(pagina, parametros);
    } else if (usuarioLogado) {
        console.log("Usuário logado, carregando página inicial"); // debug
        carregarPagina("home_page"); // página padrão se logado
    } else {
        console.log("Carregando página de login"); // debug
        carregarPagina("delicia_login"); // página padrão se não logado
    }
}

// Quando a página carrega completamente
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado, iniciando app..."); // debug
    gerenciarRoteamento();
});

// Quando o usuário muda a URL (botão voltar/avançar)
window.addEventListener("hashchange", function() {
    console.log("Hash mudou, atualizando página..."); // debug
    gerenciarRoteamento();
});

// Gerencia cliques em links internos do app
document.addEventListener("click", function(evento) {
    const elemento = evento.target.closest("a");
    
    // Verifica se é um link interno do app
    if (elemento && elemento.href.startsWith(window.location.origin + window.location.pathname + "#")) {
        evento.preventDefault(); // impede navegação padrão
        
        const hash = elemento.href.split("#")[1];
        console.log("Navegando para:", hash); // debug
        
        window.location.hash = hash;
        // gerenciarRoteamento será chamado pelo evento hashchange
    }
});

// Função auxiliar para debug (típico de estudante)
function debugInfo(mensagem) {
    if (window.location.hostname === "localhost") {
        console.log("DEBUG:", mensagem);
    }
}

// Função para mostrar loading (pode ser útil)
function mostrarLoading() {
    console.log("Mostrando loading..."); // debug
    // TODO: implementar loading visual
}

function esconderLoading() {
    console.log("Escondendo loading..."); // debug
    // TODO: esconder loading visual
}

// Exporta funções para uso global (jeito estudantil de fazer)
window.carregarPagina = carregarPagina;
window.gerenciarRoteamento = gerenciarRoteamento;
window.debugInfo = debugInfo;

console.log("Sistema de navegação carregado com sucesso!"); // debug final


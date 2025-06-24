// JavaScript da Página de Login - DelicIA App
// Arquivo: delicia_login.js
// Função: Gerenciar autenticação de usuários

console.log("Script de login carregado!"); // debug

// Função principal para fazer login
function handleLogin() {
    console.log("Iniciando processo de login..."); // debug

    const email = document.getElementById("campoEmail") ?
        document.getElementById("campoEmail").value :
        document.getElementById("email").value;

    const senha = document.getElementById("campoSenha") ?
        document.getElementById("campoSenha").value :
        document.getElementById("password").value;

    console.log("Email digitado:", email); // debug
    console.log("Senha digitada:", senha ? "***" : "vazia"); // debug

    if (!email || email.trim() === '') {
        alert("Por favor, digite seu email! 📧");
        return;
    }

    if (!senha || senha.trim() === '') {
        alert("Por favor, digite sua senha! 🔒");
        return;
    }

    if (!validarEmail(email)) {
        alert("Por favor, digite um email válido! 📧");
        return;
    }

    console.log("Tentando autenticar usuário..."); // debug
    const usuario = autenticarUsuario(email, senha);

    if (usuario) {
        console.log("Login bem-sucedido para:", usuario.name); // debug
        alert("Login realizado com sucesso! Bem-vindo(a), " + usuario.name + "! 🎉");

        localStorage.setItem("loggedInUser", JSON.stringify(usuario));

        const lembrarLogin = document.getElementById("lembrarLogin");
        if (lembrarLogin && lembrarLogin.checked) {
            console.log("Salvando preferência de lembrar login"); // debug
            localStorage.setItem("lembrarLogin", "true");
        }

        console.log("Redirecionando para página inicial..."); // debug
        window.location.href = "index.html"; // ✅ Correção aqui!

    } else {
        console.log("Falha na autenticação"); // debug
        alert("Email ou senha incorretos! Tente novamente. 😞");

        const campoSenha = document.getElementById("campoSenha") || document.getElementById("password");
        if (campoSenha) {
            campoSenha.value = '';
            campoSenha.focus();
        }
    }
}

// Função simulada de autenticação (para teste)
function authenticateUser(email, senha) {
    // Simulação de credenciais válidas
    if (email === "teste@gmail.com" && senha === "123456") {
        return { name: "Usuário de Teste", email: email };
    }
    return null;
}

// Função para autenticar usuário (nome em português)
function autenticarUsuario(email, senha) {
    console.log("Verificando credenciais..."); // debug
    return authenticateUser(email, senha); // chama função simulada ou real
}

// Função para validar formato do email
function validarEmail(email) {
    console.log("Validando email:", email); // debug
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Função para limpar formulário
function limparFormulario() {
    console.log("Limpando formulário..."); // debug
    const campoEmail = document.getElementById("campoEmail") || document.getElementById("email");
    const campoSenha = document.getElementById("campoSenha") || document.getElementById("password");
    const lembrarLogin = document.getElementById("lembrarLogin");

    if (campoEmail) campoEmail.value = '';
    if (campoSenha) campoSenha.value = '';
    if (lembrarLogin) lembrarLogin.checked = false;
}

// Verifica se usuário já está logado
function verificarSeJaEstaLogado() {
    console.log("Verificando se usuário já está logado..."); // debug
    const usuarioLogado = localStorage.getItem("loggedInUser");
    if (usuarioLogado) {
        console.log("Usuário já está logado, redirecionando..."); // debug
        window.location.href = "index.html"; // ✅ Correção aqui também!
    }
}

// Preenche campos automaticamente
function preencherCamposAutomaticamente() {
    const lembrarLogin = localStorage.getItem("lembrarLogin");
    if (lembrarLogin === "true") {
        console.log("Preenchendo campos automaticamente..."); // debug
        // Pode-se preencher o campo de email aqui, se desejado
    }
}

// Executado quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    console.log("Página de login carregada completamente"); // debug
    verificarSeJaEstaLogado();
    preencherCamposAutomaticamente();
    adicionarEventosExtras();
});

// Adiciona eventos extras (pode ser expandido)
function adicionarEventosExtras() {
    console.log("Adicionando eventos extras..."); // debug
}

// Função para logout
function fazerLogout() {
    console.log("Fazendo logout..."); // debug
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("lembrarLogin");
    window.location.href = "delicia_login.html"; // Correção: se login for página real
    alert("Logout realizado com sucesso! Até logo! 👋");
}

// Exporta funções para uso global
window.fazerLogout = fazerLogout;
window.limparFormulario = limparFormulario;

console.log("Todas as funções de login carregadas!"); // debug final

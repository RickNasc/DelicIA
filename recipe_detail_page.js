document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnEnviarComentario");
    const campo = document.getElementById("campoComentario");
    const commentsSection = document.querySelector(".comments-section");

    if (!btn || !campo || !commentsSection) {
        console.error("Elementos necessários não encontrados: botão, textarea ou seção de comentários.");
        return;
    }

    btn.addEventListener("click", function () {
        const texto = campo.value.trim();
        if (!texto) {
            alert("Digite um comentário antes de enviar.");
            return;
        }

        const novoComentario = document.createElement("div");
        novoComentario.className = "comment";
        novoComentario.innerHTML = `
            <div class="comment-author">Usuário Anônimo</div>
            <div class="comment-text">${texto}</div>
        `;

        commentsSection.appendChild(novoComentario);
        campo.value = "";
        alert("Comentário enviado!");
    });
});

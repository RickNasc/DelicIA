function handleResetPassword() {
    const email = document.getElementById("email").value;
    alert(`Um link de redefinição de senha foi enviado para ${email}. (Funcionalidade mockada)`);
    window.location.hash = "delicia_login";
}


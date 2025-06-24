function handleSignUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Mock user creation
    const newUser = {
        id: `user${mockUsers.length + 1}`,
        name: name,
        email: email,
        password: password, // In a real app, this would be hashed
        profilePicture: "",
        recipesCount: 0,
        followersCount: 0,
        followingCount: 0
    };

    mockUsers.push(newUser);
    alert("Conta criada com sucesso! Faça login para continuar.");
    window.location.hash = "delicia_login";
}


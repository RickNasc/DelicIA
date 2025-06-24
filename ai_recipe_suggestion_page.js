function getAISuggestion() {
    const ingredients = document.getElementById("ingredientsInput").value;
    const preferences = document.getElementById("preferencesInput").value;
    const outputDiv = document.getElementById("aiSuggestionOutput");

    if (!ingredients && !preferences) {
        outputDiv.innerHTML = "<p style=\"color: red; text-align: center;\">Por favor, insira ingredientes ou preferências para gerar uma sugestão.</p>";
        return;
    }

    outputDiv.innerHTML = "<p style=\"text-align: center;\">Gerando sua sugestão...</p>";

    // Mock AI response
    setTimeout(() => {
        let suggestion = "";
        if (ingredients.toLowerCase().includes("frango") && ingredients.toLowerCase().includes("arroz")) {
            suggestion = "Que tal um delicioso Arroz de Forno com Frango Desfiado? É prático e muito saboroso!";
        } else if (preferences.toLowerCase().includes("vegetariano") && preferences.toLowerCase().includes("rápido")) {
            suggestion = "Experimente uma Salada de Grão de Bico com Legumes Frescos. Rápida, nutritiva e vegetariana!";
        } else {
            suggestion = "Que tal uma receita surpresa? Experimente um Risoto de Cogumelos. Cremoso e delicioso!";
        }
        outputDiv.innerHTML = `<p>${suggestion}</p>`;
    }, 2000); // Simulate API call delay
}


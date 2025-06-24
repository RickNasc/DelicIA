const mockUsers = [
    {
        id: 'user1',
        name: 'Maria Silva',
        email: 'test@example.com',
        password: 'password',
        profilePicture: 'https://via.placeholder.com/150/8FBC8F/FFFFFF?text=MS',
        bio: 'Apaixonada por culinária e novas experiências gastronômicas.',
        recipesCount: 3,
        followersCount: 120,
        followingCount: 50
    },
    {
        id: 'user2',
        name: 'João Santos',
        email: 'joao@example.com',
        password: 'password123',
        profilePicture: 'https://via.placeholder.com/150/D2691E/FFFFFF?text=JS',
        bio: 'Cozinheiro amador em busca de receitas práticas e saborosas.',
        recipesCount: 5,
        followersCount: 80,
        followingCount: 30
    }
];

const mockRecipes = [
    {
        id: '1',
        authorId: 'user1',
        title: 'Frango Xadrez Delicioso',
        description: 'Uma receita clássica e saborosa de frango xadrez, perfeita para o almoço ou jantar. Com pedaços suculentos de frango, pimentões coloridos e um molho agridoce irresistível, é uma opção prática e deliciosa para toda a família.',
        ingredients: [
            '500g de peito de frango em cubos',
            '1 cebola média picada',
            '1 pimentão verde picado',
            '1 pimentão vermelho picado',
            '1/2 xícara de amendoim torrado',
            '2 colheres de sopa de molho shoyu',
            '1 colher de sopa de amido de milho',
            'Água, sal e pimenta do reino a gosto'
        ],
        preparation: [
            'Em uma panela, aqueça o óleo e doure o frango em cubos. Tempere com sal e pimenta.',
            'Adicione a cebola e os pimentões, refogando até ficarem macios.',
            'Em um recipiente separado, misture o molho shoyu, o amido de milho e um pouco de água.',
            'Despeje o molho sobre o frango e os vegetais, mexendo até engrossar.',
            'Adicione o amendoim torrado e misture bem.',
            'Sirva quente, acompanhado de arroz branco.'
        ],
        prepTime: '45 min',
        servings: '4 porções',
        difficulty: 'Fácil',
        image: 'assets/food_1.jpg',
        likesCount: 15
    },
    {
        id: '2',
        authorId: 'user2',
        title: 'Bolo de Cenoura com Cobertura de Chocolate',
        description: 'O bolo de cenoura mais fofo e úmido que você já provou, com uma cobertura irresistível de chocolate.',
        ingredients: [
            '3 cenouras médias',
            '4 ovos',
            '1 xícara de óleo',
            '2 xícaras de açúcar',
            '2 xícaras de farinha de trigo',
            '1 colher de sopa de fermento em pó',
            'Para a cobertura: 1 lata de leite condensado, 1 colher de sopa de manteiga, 3 colheres de sopa de chocolate em pó'
        ],
        preparation: [
            'Bata no liquidificador as cenouras, ovos e óleo.',
            'Em uma tigela, misture o açúcar, farinha e fermento. Adicione a mistura do liquidificador e mexa bem.',
            'Despeje em forma untada e enfarinhada e asse em forno pré-aquecido a 180°C por 40 minutos.',
            'Para a cobertura, misture todos os ingredientes em uma panela e leve ao fogo baixo, mexendo até engrossar. Despeje sobre o bolo ainda quente.'
        ],
        prepTime: '60 min',
        servings: '8 porções',
        difficulty: 'Médio',
        image: 'assets/food_2.jpg',
        likesCount: 32
    },
    {
        id: '3',
        authorId: 'user1',
        title: 'Salada Colorida de Quinoa',
        description: 'Uma salada leve e nutritiva, ideal para uma refeição saudável e rápida. Rica em proteínas e fibras.',
        ingredients: [
            '1 xícara de quinoa',
            '2 xícaras de água',
            '1 pepino picado',
            '1 tomate picado',
            '1/2 cebola roxa picada',
            'Salsinha picada a gosto',
            'Suco de 1 limão',
            'Azeite, sal e pimenta do reino a gosto'
        ],
        preparation: [
            'Lave bem a quinoa e cozinhe com a água até secar. Deixe esfriar.',
            'Em uma tigela grande, misture a quinoa fria com o pepino, tomate, cebola roxa e salsinha.',
            'Tempere com suco de limão, azeite, sal e pimenta do reino. Misture bem e sirva.'
        ],
        prepTime: '20 min',
        servings: '2 porções',
        difficulty: 'Fácil',
        image: 'assets/food_3.jpg',
        likesCount: 8
    },
    {
        id: '4',
        authorId: 'user2',
        title: 'Feijoada Completa',
        description: 'A tradicional feijoada brasileira com todos os acompanhamentos. Um prato que é a cara do Brasil!',
        ingredients: [
            '500g de feijão preto',
            '300g de carne seca',
            '200g de linguiça calabresa',
            '200g de bacon',
            '150g de paio',
            '2 folhas de louro',
            '4 dentes de alho',
            '1 cebola grande',
            'Sal e pimenta a gosto'
        ],
        preparation: [
            'Deixe o feijão de molho na véspera.',
            'Cozinhe o feijão com as carnes defumadas até ficarem macias.',
            'Refogue a cebola e o alho, adicione ao feijão.',
            'Tempere com sal, pimenta e folhas de louro.',
            'Cozinhe em fogo baixo por 2 horas.',
            'Sirva com arroz, couve refogada, farofa e laranja.'
        ],
        prepTime: '180 min',
        servings: '8 porções',
        difficulty: 'Difícil',
        image: 'assets/food_4.jpg',
        likesCount: 45
    },
    {
        id: '5',
        authorId: 'user1',
        title: 'Prato Executivo Completo',
        description: 'Um prato executivo balanceado com arroz, feijão, carne e salada. Perfeito para o almoço!',
        ingredients: [
            '200g de carne bovina',
            '1 xícara de arroz',
            '1/2 xícara de feijão carioca',
            'Alface, tomate e cenoura',
            'Temperos diversos',
            'Óleo para cozinhar'
        ],
        preparation: [
            'Cozinhe o arroz e o feijão separadamente.',
            'Tempere e grelhe a carne.',
            'Prepare a salada com os vegetais frescos.',
            'Monte o prato com todos os componentes.',
            'Sirva imediatamente.'
        ],
        prepTime: '30 min',
        servings: '1 porção',
        difficulty: 'Fácil',
        image: 'assets/food_5.jpg',
        likesCount: 22
    },
    {
        id: '6',
        authorId: 'user2',
        title: 'Bowl Saudável Colorido',
        description: 'Um bowl nutritivo e colorido, perfeito para quem busca uma alimentação saudável e saborosa.',
        ingredients: [
            'Brócolis cozido',
            'Cenoura em fatias',
            'Frango grelhado',
            'Quinoa cozida',
            'Abacate',
            'Sementes de girassol',
            'Molho tahine'
        ],
        preparation: [
            'Cozinhe o brócolis no vapor.',
            'Grelhe o frango temperado.',
            'Cozinhe a quinoa.',
            'Corte o abacate em fatias.',
            'Monte o bowl com todos os ingredientes.',
            'Finalize com sementes e molho.'
        ],
        prepTime: '25 min',
        servings: '1 porção',
        difficulty: 'Fácil',
        image: 'assets/food_8.jpg',
        likesCount: 18
    }
];

const mockComments = [
    {
        id: 'c1',
        recipeId: '1',
        userId: 'user2',
        text: 'Adorei essa receita! Ficou uma delícia e super fácil de fazer.',
        date: '2025-06-19T10:00:00Z'
    },
    {
        id: 'c2',
        recipeId: '1',
        userId: 'user1',
        text: 'Fiz algumas adaptações e ficou ótimo! Recomendo adicionar um pouco de gengibre.',
        date: '2025-06-19T11:30:00Z'
    }
];

const mockFavorites = [
    {
        id: 'f1',
        userId: 'user1',
        recipeId: '2',
        date: '2025-06-18T15:00:00Z',
        folder: 'Bolos'
    }
];

const mockNotifications = [
    {
        id: 'n1',
        userId: 'user1',
        type: 'comment',
        sourceId: 'c1',
        recipeId: '1',
        message: 'João Santos comentou na sua receita: "Adorei essa receita!"',
        read: false,
        date: '2025-06-19T10:05:00Z'
    }
];

function getMockUser(id) {
    return mockUsers.find(user => user.id === id);
}

function getMockRecipe(id) {
    return mockRecipes.find(recipe => recipe.id === id);
}

function getMockCommentsForRecipe(recipeId) {
    return mockComments.filter(comment => comment.recipeId === recipeId);
}

function getMockUserFavorites(userId) {
    return mockFavorites.filter(fav => fav.userId === userId).map(fav => getMockRecipe(fav.recipeId));
}

function getMockUserRecipes(userId) {
    return mockRecipes.filter(recipe => recipe.authorId === userId);
}

function getMockUserNotifications(userId) {
    return mockNotifications.filter(notification => notification.userId === userId);
}

function authenticateUser(email, password) {
    return mockUsers.find(user => user.email === email && user.password === password);
}



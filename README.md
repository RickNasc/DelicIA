# DelicIA App - Versão Estudantil 🍳

## Sobre o Projeto

O DelicIA é um aplicativo web de receitas culinárias que foi reformulado para ter uma aparência mais estudantil, mantendo todas as funcionalidades originais. O projeto demonstra habilidades de desenvolvimento web com HTML, CSS e JavaScript puro.

## 🎯 Características da Versão Estudantil

### Design
- ✨ Interface amigável com emojis
- 🎨 Paleta de cores simples (verde e laranja)
- 📱 Design responsivo para mobile e desktop
- 💬 Textos informais e acolhedores
- 🎓 Aparência de projeto acadêmico

### Funcionalidades
- 🔐 Sistema de login/logout
- 🏠 Página inicial com receitas populares
- 👤 Perfil de usuário
- ➕ Criar novas receitas
- 🔍 Buscar receitas
- ❤️ Favoritar receitas
- 🔔 Sistema de notificações
- 📱 Navegação mobile-friendly

## 🚀 Como Executar

### Método 1: Servidor Python (Recomendado)
```bash
# Navegue até a pasta do projeto
cd delicia_app

# Inicie o servidor HTTP
python3 -m http.server 8080

# Acesse no navegador
http://localhost:8080
```

### Método 2: Servidor Node.js
```bash
# Instale o http-server globalmente
npm install -g http-server

# Navegue até a pasta do projeto
cd delicia_app

# Inicie o servidor
http-server -p 8080

# Acesse no navegador
http://localhost:8080
```

### Método 3: Live Server (VS Code)
1. Abra a pasta do projeto no VS Code
2. Instale a extensão "Live Server"
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"

## 🔑 Credenciais de Teste

Para testar o aplicativo, use qualquer uma das credenciais abaixo:

**Usuário 1:**
- Email: `test@example.com`
- Senha: `password`

**Usuário 2:**
- Email: `joao@example.com`
- Senha: `password123`

**Usuário 3:**
- Email: `ana@example.com`
- Senha: `mypassword`

## 📁 Estrutura do Projeto

```
delicia_app/
├── index.html              # Página principal
├── index.js                # Sistema de roteamento
├── style.css               # Estilos estudantis
├── data.js                 # Dados mock
├── delicia_login.html      # Página de login
├── delicia_login.js        # Lógica de login
├── home_page.html          # Página inicial
├── home_page.js            # Lógica da página inicial
├── create_recipe_page.html # Formulário de receitas
├── delicia_perfil.html     # Página de perfil
├── search_page.html        # Página de busca
├── favorites_page.html     # Página de favoritos
├── notifications_page.html # Página de notificações
├── recipe_detail_page.html # Detalhes da receita
├── create_account_page.html # Criar conta
├── reset_password_page.html # Recuperar senha
├── melhorias_estudantil.md # Documentação das melhorias
└── relatorio_testes.md     # Relatório de testes
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilos e responsividade
- **JavaScript**: Funcionalidades e interatividade
- **LocalStorage**: Armazenamento local de dados
- **SPA**: Single Page Application com roteamento

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona em:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (até 767px)

## 🎨 Paleta de Cores

- **Verde Principal**: #4CAF50
- **Laranja Secundário**: #FF9800
- **Fundo**: #F5F5F5
- **Texto**: #333333
- **Branco**: #FFFFFF

## 🔧 Funcionalidades Implementadas

### ✅ Sistema de Autenticação
- Login com validação
- Logout funcional
- Persistência de sessão
- Redirecionamento automático

### ✅ Navegação
- Roteamento SPA
- Navegação por hash
- Menu responsivo
- Breadcrumbs

### ✅ Receitas
- Listagem de receitas
- Detalhes completos
- Criação de novas receitas
- Sistema de favoritos
- Busca e filtros

### ✅ Interface
- Design estudantil
- Emojis e ícones
- Animações suaves
- Feedback visual

## 🐛 Solução de Problemas

### Problema: Página em branco
**Solução**: Use um servidor HTTP local, não abra o arquivo diretamente no navegador.

### Problema: JavaScript não funciona
**Solução**: Verifique se todos os arquivos estão na mesma pasta e o servidor está rodando.

### Problema: Login não funciona
**Solução**: Use as credenciais de teste fornecidas acima.

## 📚 Documentação Adicional

- `melhorias_estudantil.md`: Detalhes das melhorias implementadas
- `relatorio_testes.md`: Relatório completo de testes realizados

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido com foco em:
- Código limpo e bem comentado
- Boas práticas de desenvolvimento
- Responsividade e acessibilidade
- Experiência do usuário
- Aparência estudantil autêntica

## 🎓 Uso Acadêmico

Este projeto é ideal para:
- Apresentações de TCC
- Projetos de disciplinas
- Portfolio estudantil
- Demonstração de habilidades
- Aprendizado de desenvolvimento web

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação
2. Consulte o relatório de testes
3. Teste com as credenciais fornecidas
4. Use um servidor HTTP local

---

**Desenvolvido com ❤️ por estudantes de programação**

*Versão: 1.0 Estudantil*  
*Data: Junho 2025*


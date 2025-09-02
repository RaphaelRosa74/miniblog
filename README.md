📖 MiniBlog

Um mini blog desenvolvido em React.js com integração ao Firebase, onde usuários podem se cadastrar, autenticar, criar, visualizar, editar e deletar postagens. O projeto foi feito com foco em aprender e aplicar conceitos modernos do React, como hooks customizados, Context API, e boas práticas de organização de componentes.

🚀 Tecnologias Utilizadas

React.js (create-react-app)

React Router DOM para navegação

Context API para gerenciamento de autenticação

Firebase Authentication (login/cadastro de usuários)

Firebase Firestore (armazenamento das postagens)

CSS Modules para estilização isolada

Hooks customizados para CRUD e autenticação

⚙️ Funcionalidades

Cadastro e login de usuários

Autenticação persistente

Criação de novas postagens

Edição de postagens existentes

Exclusão de postagens

Listagem de posts no feed

Detalhes individuais de cada post

Pesquisa de posts por palavra-chave

📂 Estrutura do Projeto
miniblog/
 ├── public/             # Arquivos públicos (index.html, favicon, etc.)
 ├── src/
 │   ├── components/     # Componentes reutilizáveis (Navbar, Footer, etc.)
 │   ├── context/        # Context API (AuthContext)
 │   ├── firebase/       # Configuração do Firebase
 │   ├── hooks/          # Hooks customizados (CRUD, auth, etc.)
 │   ├── pages/          # Páginas principais do app (Home, Login, etc.)
 │   ├── App.js          # Componente raiz
 │   └── index.js        # Entrada da aplicação
 ├── package.json        # Dependências e scripts
 └── README.md           # Documentação do projeto

▶️ Como Rodar o Projeto

Clone este repositório:

git clone https://github.com/SEU_USUARIO/miniblog.git


Instale as dependências:

npm install


Configure o Firebase:

Crie um projeto no Firebase Console

Ative Authentication (Email/Password)

Ative Cloud Firestore

Copie as credenciais do Firebase e cole em src/firebase/config.js

Exemplo:

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};


Rode o projeto:

npm start


O app estará disponível em:

http://localhost:3000

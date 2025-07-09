<img src="./assets/banner.png" alt="exemplo imagem">

# NLW Agents

Este projeto foi desenvolvido durante o **NLW Agents** pela **Rocketseat**, onde o desafio foi desenvolver uma aplicação que gera respostas usando inteligência artificial, com base nas aulas gravadas.

## 🚀 Tecnologias utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para banco de dados
- **Zod** - Biblioteca para validação de esquemas
- **tsx** - Executor TypeScript para desenvolvimento
- **React** - Biblioteca para construção de interfaces
- **Vite** - Ferramenta de build e desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones

## 🎨 Funcionalidades

✅ Criação de salas com temas das aulas  
✅ Criação de perguntas nas salas  
✅ Gravação de audio para transcrição  
✅ Geração de similaridades dos dados das perguntas e aulas gravadas  
✅ Geração de respotas usando ingeligência artificial do gemini usando dados das aulas gravadas  
✅ Integração com Gemini 2.5 flash para respostas precisas, baratas e extremamente rápidas  

## 📦 Como rodar o projeto localmente

1. Clone este repositório:  
  ```sh
  git clone https://github.com/EaCamih/NLW-Agents
  ```
2. Acesse a pasta do projeto:  
  ```sh
  cd NLW-Agents
  ```

Para rodar o projeto localmente:

### API

#### Setup
1. Acesse a pasta da API
  ```sh
  cd server
  ```
2. Instalar as dependências do projeto
  ```sh
  npm install
  ```
3. Coloque as informações necessárias no arquivo .env
  ```plainText
  PORT=
  DATABASE_URL=
  GEMINI_API_KEY=
  ```
#### Preparando o banco de dados
1. Execute as migrações do Drizzle:
  ```bash
  npx drizzle-kit migrate
  ```

2. (Opcional) Visualize o banco de dados:
  ```bash
  npx drizzle-kit studio
  ```

#### Executando o Projeto

##### Desenvolvimento
  ```bash
  npm run dev
  ```

##### Produção
  ```bash
  npm run build
  npm start
  ```

### Client web

1. Acesse a pasta da API
  ```sh
  cd web
  ```
2. Instalar as dependências do projeto
  ```sh
  npm install
  ```
3. Compilar o projeto
  ```sh
  npm build
  ```
4. Rodar o projeto
  ```sh
  npm start
  ```

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir!

---
Desenvolvido com amor de carinho por [Camilla Viana](https://github.com/EaCamih) 💜
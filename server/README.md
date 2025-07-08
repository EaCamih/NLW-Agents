# NLW Agents

Projeto desenvolvido durante o evento NLW (Next Level Week) da Rocketseat, focado na criação de agentes inteligentes utilizando tecnologias modernas.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para banco de dados
- **Zod** - Biblioteca para validação de esquemas
- **tsx** - Executor TypeScript para desenvolvimento

## 🛠️ Padrões de Projeto

- **Repository Pattern** - Abstração da camada de dados
- **Dependency Injection** - Inversão de dependências
- **Error Handling** - Tratamento centralizado de erros
- **Validation Layer** - Validação de dados com Zod
- **RESTful API** - Padrão REST para endpoints

## ⚙️ Configuração e Setup

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/EaCamih/NLW-Agents
cd NLW-Agents/server
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Configure sua chave da OpenAI no arquivo `.env`:
```
PORT=
DATABASE_URL=
```

### Configuração do Banco de Dados

1. Execute as migrações do Drizzle:
```bash
npx drizzle-kit migrate
```

2. (Opcional) Visualize o banco de dados:
```bash
npx drizzle-kit studio
```

### Executando o Projeto

#### Desenvolvimento
```bash
npm run dev
```

#### Produção
```bash
npm run build
npm start
```

## 📡 API Endpoints

O servidor estará disponível em `http://localhost:3333`

- **GET /health** - Verificação de saúde da aplicação
- **GET /rooms** - Listagem de salas

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm start` - Inicia o servidor em produção
- `npm run db:seed` - Cria dados fictícios no banco de dados

## 📝 Licença

Este projeto foi desenvolvido durante o evento NLW da Rocketseat para fins educacionais.
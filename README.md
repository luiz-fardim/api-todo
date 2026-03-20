# ✅ To-Do API

> API RESTful para gerenciamento de tarefas, construída com Node.js, Express e SQLite.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)

---

## 📋 Sobre

API simples e objetiva para criar, listar, atualizar e deletar tarefas (to-dos). Persistência de dados com SQLite via `better-sqlite3`.

---

## 🚀 Como rodar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/todo-api.git
cd api-todo

# Instale as dependências
npm init -y
npm i express better-sqlite3
npm i -D nodemon

# Inicie o servidor
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

---

## 🗄️ Estrutura do banco

A tabela `todos` possui os seguintes campos:

| Campo  | Tipo    | Descrição                               |
|--------|---------|-----------------------------------------|
| `id`   | INTEGER | Identificador único (PK)                |
| `title`| TEXT    | Título da tarefa *(obrigatório)*        |
| `done` | INTEGER | Status: `0` = pendente, `1` = concluída |

---

## 📡 Endpoints

### `GET /todos`
Retorna todas as tarefas.

**Resposta `200`**
```json
[
  { "id": 1, "title": "Comprar leite", "done": 0 },
  { "id": 2, "title": "Estudar Node.js", "done": 1 }
]
```

---

### `GET /todos/:id`
Retorna uma tarefa pelo ID.

**Resposta `200`**
```json
{ "id": 1, "title": "Comprar leite", "done": 0 }
```

**Resposta `404`**
```json
{ "error": "Todo não encontrado." }
```

---

### `POST /todos`
Cria uma nova tarefa.

**Body**
```json
{ "title": "Aprender SQLite" }
```

> ⚠️ O campo `title` é obrigatório.

**Resposta `201`**
```json
{ "id": 3, "title": "Aprender SQLite", "done": 0 }
```

**Resposta `400`**
```json
{ "error": "Título é OBRIGATÓRIO." }
```

---

### `PUT /todos/:id`
Atualiza uma tarefa existente. Todos os campos são opcionais — apenas os enviados serão alterados.

**Body** *(parcial ou completo)*
```json
{ "title": "Aprender SQLite 3", "done": 1 }
```

**Resposta `200`**
```json
{ "id": 3, "title": "Aprender SQLite 3", "done": 1 }
```

**Resposta `404`**
```json
{ "error": "Todo não encontrado." }
```

---

### `DELETE /todos/:id`
Remove uma tarefa pelo ID.

**Resposta `204`** — sem conteúdo.

**Resposta `404`**
```json
{ "error": "Todo não encontrado." }
```

---

## 💡 Exemplos de uso

### Criar uma tarefa
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Fazer café"}'
```

### Listar todas as tarefas
```bash
curl http://localhost:3000/todos
```

### Marcar como concluída
```bash
curl -X PUT http://localhost:3000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"done": 1}'
```

### Deletar uma tarefa
```bash
curl -X DELETE http://localhost:3000/todos/1
```

---

## 📁 Estrutura do projeto

```
todo-api/
├── src/
│   ├── controllers/
│   │   └── todos.js      # getAll, getOne, create, update, remove
│   ├── db/
│   │   └── database.js   # conexão com o SQLite
│   └── routes/
│       └── todos.js      # definição das rotas
├── package.json
└── README.md
```

---

## 📸 Screenshots

### Criando uma tarefa — `POST /todos`
![POST /todos](https://raw.githubusercontent.com/luiz-fardim/api-todo/refs/heads/main/assets/print-post.PNG)

### Listando todas as tarefas — `GET /todos`
![GET /todos](https://raw.githubusercontent.com/luiz-fardim/api-todo/refs/heads/main/assets/print-get.PNG)

---

## 📜 Autor

Desenvolvido por `Luiz Fardim`

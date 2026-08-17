# Cadastro de Usuários — Node.js + MySQL

> Aplicação web de cadastro e gerenciamento de usuários desenvolvida para praticar a integração entre frontend, backend, API REST e banco de dados relacional.

**Status:** Concluído  
**Tipo:** Projeto de estudo  
**Backend:** Node.js  
**Banco de dados:** MySQL

---

## Sobre o projeto

Este projeto foi desenvolvido como uma forma de aprofundar meus conhecimentos em desenvolvimento **client-side e server-side**, além de praticar a comunicação entre uma aplicação web e um banco de dados relacional.

A aplicação permite realizar operações básicas de gerenciamento de usuários através de uma API desenvolvida em **Node.js**, utilizando **MySQL** para persistência dos dados.

O projeto foi importante para compreender, na prática, como diferentes camadas de uma aplicação web se comunicam.

---

## Objetivos

- Praticar desenvolvimento backend com Node.js
- Trabalhar com banco de dados MySQL
- Criar uma API para comunicação entre frontend e backend
- Implementar operações CRUD
- Compreender requisições HTTP
- Trabalhar com persistência de dados
- Integrar frontend, backend e banco de dados

---

## Arquitetura

A aplicação utiliza uma arquitetura simples separando a interface, o servidor e o banco de dados.

```text
┌─────────────────────┐
│      Frontend       │
│   HTML / CSS / JS   │
└──────────┬──────────┘
           │
           │ HTTP
           ▼
┌─────────────────────┐
│       Backend       │
│       Node.js       │
│      API REST       │
└──────────┬──────────┘
           │
           │ SQL
           ▼
┌─────────────────────┐
│       MySQL         │
│     Database        │
└─────────────────────┘
```

---

## Funcionalidades

A aplicação possui operações básicas de gerenciamento de usuários:

- Cadastro de usuários
- Consulta de usuários
- Atualização de informações
- Exclusão de usuários
- Comunicação com API
- Persistência dos dados no MySQL

---

## CRUD

O projeto utiliza as operações fundamentais de um CRUD:

| Operação | Objetivo |
|----------|----------|
| Create | Criar novos usuários |
| Read | Consultar usuários |
| Update | Atualizar usuários |
| Delete | Remover usuários |

Essas operações são realizadas através da comunicação entre o frontend, a API Node.js e o banco de dados MySQL.

---

## Tecnologias utilizadas

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- API REST

### Banco de dados
- MySQL
- SQL

### Ferramentas
- Git
- GitHub
- VS Code
- npm

---

## Fluxo da aplicação

```text
Usuário
   │
   ▼
Interface Web
   │
   │ Requisição HTTP
   ▼
API Node.js
   │
   │ Query SQL
   ▼
MySQL
   │
   │ Resultado
   ▼
API Node.js
   │
   │ Resposta HTTP
   ▼
Interface Web
```

---

## Conceitos praticados

Durante o desenvolvimento, foram praticados conceitos relacionados a:

- Desenvolvimento client-side
- Desenvolvimento server-side
- APIs REST
- Requisições HTTP
- CRUD
- SQL
- Modelagem básica de dados
- Integração entre aplicação e banco de dados
- Separação entre frontend e backend
- Persistência de dados

---

## O que aprendi

Este foi meu primeiro projeto utilizando Node.js integrado a um banco de dados MySQL.

O desenvolvimento ajudou a compreender melhor como uma aplicação deixa de ser apenas uma interface e passa a trabalhar com um backend responsável pelo processamento das requisições e pela comunicação com o banco de dados.

Também foi importante para entender o fluxo completo de uma operação:

```text
Usuário
   ↓
Frontend
   ↓
HTTP
   ↓
Backend
   ↓
SQL
   ↓
Banco de dados
   ↓
Backend
   ↓
Frontend
```

---

## Estrutura conceitual

```
cadastro-usuarios-mysql/
│
├── frontend/
│
├── backend/
│
├── database/
│
└── README.md
```

A estrutura acima representa a organização conceitual do projeto. Consulte os arquivos do repositório para a estrutura atual.

---

## Status

Projeto concluído e utilizado como estudo para aprofundamento em Node.js, APIs, SQL e integração entre frontend, backend e banco de dados.

---

## Sobre o desenvolvedor

**Daniel Ribeiro Salvador**

Estudante de Análise e Desenvolvimento de Sistemas, interessado em desenvolvimento de software, dados, inteligência artificial e construção de soluções para problemas reais.

- **GitHub:** https://github.com/DanielRaik

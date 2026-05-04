# 🔐 Sistema de Autenticação com Testes — Mocha & Assert

> Projeto de estudo em JavaScript puro que implementa uma função de login com validação de credenciais e cobertura completa de testes utilizando Mocha e o módulo nativo `assert`.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Casos de Teste](#casos-de-teste)
- [Exemplo de Uso](#exemplo-de-uso)
- [Aprendizados](#aprendizados)
- [Autor](#autor)

---

## Sobre o Projeto

Este projeto foi desenvolvido como exercício prático para consolidar conceitos fundamentais de JavaScript e introdução a testes automatizados. O objetivo é simular um sistema básico de autenticação, onde uma função recebe e-mail e senha e retorna o status do login com base nos dados cadastrados.

O foco está em três pilares:

1. **Manipulação de arrays de objetos** — busca e filtragem com `.find()`
2. **Lógica condicional clara e segura** — verificações encadeadas sem expor detalhes ao usuário
3. **Testes automatizados** — cobertura dos cenários principais com Mocha e `assert`

---

## Funcionalidades

- ✅ Login bem-sucedido para usuários com credenciais válidas e ativas
- ⚠️ Mensagem específica para credenciais expiradas
- ❌ Rejeição de e-mails não cadastrados
- ❌ Rejeição de senhas incorretas para um e-mail existente
- 🔒 Mensagem genérica para erros de credencial (não revela se é o e-mail ou a senha que está errado — boa prática de segurança)

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| Node.js | 18+ | Ambiente de execução |
| JavaScript (ES6+) | — | Linguagem principal |
| [Mocha](https://mochajs.org/) | ^10.x | Framework de testes |
| `assert` (nativo) | — | Asserções nos testes |

---

## Estrutura do Projeto

```
login-auth/
├── login.js          # Módulo principal: dados dos usuários e função fazerLogin()
├── login.test.js     # Suíte de testes com Mocha e assert
├── package.json      # Dependências e scripts do projeto
└── README.md         # Documentação
```

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/heyMichaelS/P-s-gradua-o-em-Automa-o-de-Testes-de-Software-PGATS-2026-03.git

# Acesse a pasta do projeto
cd DESAFIO-DOIS-PONTOS-PGATS26

# Instale as dependências
npm install
```

### Executando os Testes

```bash
npx mocha login.test.js
```

Saída esperada:

```
  fazerLogin()
    ✔ Teste 1 — deve retornar sucesso com email e senha corretos
    ✔ Teste 2 — deve informar que as credenciais expiraram
    ✔ Teste 3 — deve retornar erro quando o usuário não existe
    ✔ Teste 4 — deve retornar erro quando a senha está incorreta

  4 passing (12ms)
```

---

## Casos de Teste

A suíte cobre os quatro fluxos possíveis da função `fazerLogin()`:

| # | Cenário | Entrada | Retorno esperado |
|---|---|---|---|
| 1 | Credenciais válidas e ativas | e-mail correto + senha correta | `"Login realizado com sucesso"` |
| 2 | Credenciais expiradas | e-mail correto + senha correta + `expirado: true` | `"Renove suas credenciais"` |
| 3 | Usuário não cadastrado | e-mail inexistente | `"Credenciais incorretas"` |
| 4 | Senha errada | e-mail existente + senha incorreta | `"Credenciais incorretas"` |

> **Nota de segurança:** Os cenários 3 e 4 retornam a mesma mensagem propositalmente. Revelar qual campo está errado facilitaria ataques de enumeração de usuários.

---


## Aprendizados

- Uso de `Array.prototype.find()` para busca em coleções de objetos
- Ordenação lógica das verificações para cobrir todos os fluxos sem sobreposição
- Introdução ao Mocha: estrutura `describe` / `it` para organizar testes
- Uso de `assert.strictEqual()` para comparação de valores com tipagem estrita
- Boas práticas de segurança em mensagens de erro de autenticação

---

## Autor

Feito por **[Michael  Silva](https://github.com/heyMichaelS)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](www.linkedin.com/in/heymichaels)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/heyMichaelS)

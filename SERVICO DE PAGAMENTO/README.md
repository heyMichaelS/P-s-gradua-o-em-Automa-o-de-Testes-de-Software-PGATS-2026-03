# Servico de Pagamento

Projeto Node.js com uma classe responsavel por realizar pagamentos e consultar o ultimo pagamento realizado.

## Tecnologias

- Node.js
- JavaScript com ES Modules
- Mocha
- Mochawesome
- GitHub Actions

## Estrutura do projeto

```text
.
+-- .github/workflows/testes.yml
+-- src/
|   +-- servicoPagamento.js
+-- test/
|   +-- pageObjects/
|   |   +-- servicoPagamento.page.js
|   +-- servicoPagamento.test.js
+-- .gitignore
+-- package.json
+-- README.md
```

## Regra de negocio

A classe `ServicoDePagamento` possui dois metodos:

- `pagar(codigoBarras, empresa, valor)`: cadastra um pagamento na lista interna de pagamentos.
- `consultarUltimoPagamento()`: retorna apenas o ultimo pagamento cadastrado.

Cada pagamento possui:

- `codigoBarras`
- `empresa`
- `valor`
- `categoria`

Quando o valor do pagamento for maior que `100.00`, a categoria sera `cara`. Caso contrario, a categoria sera `padrão`.

## Page Objects com ES Modules

Mesmo com `"type": "module"` no `package.json`, e possivel usar Page Objects normalmente.

O arquivo `test/pageObjects/servicoPagamento.page.js` exporta a classe `ServicoPagamentoPage` usando `export default`.
Os testes importam essa classe usando `import`.

Exemplo:

```js
import ServicoPagamentoPage from './pageObjects/servicoPagamento.page.js';

const servicoPagamentoPage = new ServicoPagamentoPage();
servicoPagamentoPage.pagar('0987-7656-3475', 'Samar', 156.87);
```

## Exemplo de uso

```js
import ServicoDePagamento from './src/servicoPagamento.js';

const servicoDePagamento = new ServicoDePagamento();

servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

console.log(servicoDePagamento.consultarUltimoPagamento());
```

Retorno esperado:

```js
{
  codigoBarras: '0987-7656-3475',
  empresa: 'Samar',
  valor: 156.87,
  categoria: 'cara'
}
```

## Instalacao

Instale as dependencias do projeto:

```bash
npm install
```

## Como rodar os testes

Para rodar os testes com Mocha:

```bash
npx mocha
```

Ou pelo script configurado:

```bash
npm test
```

## Como gerar relatorio com Mochawesome

```bash
npm run test:report
```

O relatorio sera gerado na pasta `mochawesome-report`.

## Pipeline no GitHub Actions

O pipeline esta configurado em `.github/workflows/testes.yml`.

Ele executa automaticamente em:

- `push` nas branches `main` e `master`
- `pull_request` para as branches `main` e `master`

Etapas executadas:

- baixa o codigo do repositorio
- configura Node.js 20
- instala as dependencias com `npm install`
- roda os testes com Mochawesome
- publica o relatorio como artefato do GitHub Actions

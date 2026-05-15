# Servico de Pagamento

Projeto Node.js criado para simular pagamentos, consultar o ultimo pagamento realizado e validar as regras com testes automatizados usando Mocha e Node Assert.

## Tecnologias

- Node.js
- JavaScript com ES Modules
- Mocha
- Node Assert
- Mochawesome
- GitHub Actions

## Estrutura do projeto

```text
.
+-- .github/
|   +-- workflows/
|       +-- testes.yml
+-- src/
|   +-- servicoPagamento.js
+-- test/
|   +-- pageObjects/
|   |   +-- servicoPagamento.page.js
|   +-- servicoPagamento.test.js
+-- .gitattributes
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- README.md
```

## Classe principal

A classe principal do projeto e `ServicoDePagamento`, localizada em `src/servicoPagamento.js`.

Ela possui dois metodos:

- `pagar(codigoBarras, empresa, valor)`: realiza um pagamento e armazena o objeto em uma lista interna.
- `consultarUltimoPagamento()`: retorna apenas o ultimo pagamento armazenado.

## Regra de negocio

Cada pagamento possui as propriedades:

- `codigoBarras`
- `empresa`
- `valor`
- `categoria`

Quando o valor do pagamento for maior que `100.00`, a propriedade `categoria` recebe `cara`.

Quando o valor for menor ou igual a `100.00`, a propriedade `categoria` recebe `padrão`.

Caso `consultarUltimoPagamento()` seja chamado sem nenhum pagamento realizado, a classe lanca o erro:

```js
throw new Error('Nenhum pagamento realizado.');
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

## Testes

Os testes ficam na pasta `test` e usam:

- Mocha como executor de testes.
- Node Assert para as validacoes.
- Page Object para organizar as acoes usadas nos testes.

O Page Object fica em `test/pageObjects/servicoPagamento.page.js`.

Os testes seguem o padrao:

```js
// arrange
// act
// assert
```

Cenarios testados:

- pagamento com valor maior que `100.00` deve receber categoria `cara`
- pagamento com valor menor ou igual a `100.00` deve receber categoria `padrão`
- consulta deve retornar apenas o ultimo pagamento realizado
- consulta sem pagamentos deve lancar erro

## Instalacao

Instale as dependencias:

```bash
npm install
```

## Rodar os testes

Para rodar os testes com Mocha:

```bash
npm test
```

Ou:

```bash
npx mocha
```

## Gerar relatorio Mochawesome

Para rodar os testes gerando relatorio:

```bash
npm run test:report
```

O relatorio sera gerado na pasta:

```text
mochawesome-report
```

## GitHub Actions

Se este projeto for o repositorio principal no GitHub, o workflow deve ficar em:

```text
.github/workflows/testes.yml
```

O pipeline deve:

- baixar o codigo com `actions/checkout`
- configurar Node.js
- instalar dependencias com `npm ci`
- rodar os testes com `npm run test:report`
- publicar o relatorio Mochawesome como artefato

O workflow executa em:

- `push` nas branches `main` e `develop`
- `pull_request` para a branch `main`

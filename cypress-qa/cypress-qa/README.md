# Automação de Testes com Cypress (JavaScript)

Resolução das 5 questões da atividade.

| Questão | Site | Arquivo |
|---|---|---|
| 01 | the-internet.herokuapp.com/login | `cypress/e2e/q01_login_erro.cy.js` |
| 02 | the-internet.herokuapp.com/dynamic_loading/1 | `cypress/e2e/q02_dynamic_loading.cy.js` |
| 03 | saucedemo.com | `cypress/e2e/q03_carrinho_e2e.cy.js` |
| 04 | demoblaze.com | `cypress/e2e/q04_laptop_mais_caro.cy.js` |
| 05 | saucedemo.com | `cypress/e2e/q05_produtos_baratos.cy.js` |

## Como executar

```bash
npm install
npx cypress run
```

Para rodar uma questão só: `npx cypress run --spec cypress/e2e/q03_carrinho_e2e.cy.js`

A Questão 05 também gera o arquivo `ofertas.json` com os produtos abaixo de $20.00.

// Questão 03 - E2E: login, adicionar 3 produtos, remover 1, validar badge = 2

describe("Questão 03 - Carrinho de compras (E2E)", () => {
  it("mostra 2 itens no carrinho depois de adicionar 3 e remover 1", () => {
    // 1. Login com sucesso
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");

    // 2. Adiciona três produtos diferentes
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "3");

    // 3. Remove um dos produtos
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    // 4. Valida que o ícone do carrinho mostra exatamente "2"
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "2");
  });
});

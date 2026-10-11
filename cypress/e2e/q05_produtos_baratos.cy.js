// Questão 05 - SauceDemo: listar produtos que custam menos de $20.00

describe("Questão 05 - Produtos abaixo de $20.00", () => {
  it("lista e salva apenas os produtos com preço menor que $20.00", () => {
    // Login
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");

    // Mapeia todos os itens da vitrine
    cy.get(".inventory_item").should("have.length.greaterThan", 0);

    cy.get(".inventory_item").then(($itens) => {
      const todos = [...$itens].map((item) => ({
        nome: item.querySelector(".inventory_item_name").innerText.trim(),
        preco: parseFloat(
          item.querySelector(".inventory_item_price").innerText.replace("$", "")
        ),
      }));

      // Filtra apenas os que custam menos de $20.00
      const ofertas = todos.filter((p) => p.preco < 20.0);

      cy.task("log", `Produtos na vitrine: ${todos.length}`);
      ofertas.forEach((p) =>
        cy.task("log", `OFERTA: ${p.nome} - $${p.preco.toFixed(2)}`)
      );

      // Salva em arquivo
      cy.writeFile("ofertas.json", ofertas);

      expect(ofertas.length).to.be.greaterThan(0);
      ofertas.forEach((p) => expect(p.preco).to.be.lessThan(20.0));
    });
  });
});

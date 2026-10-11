// Questão 04 - Demoblaze: nome e preço do laptop mais caro

describe("Questão 04 - Laptop mais caro", () => {
  it("extrai o laptop mais caro e valida que o preço é maior que $0", () => {
    cy.visit("https://www.demoblaze.com/");

    // Observa a chamada que carrega os produtos da categoria
    cy.intercept("POST", "**/bycat").as("porCategoria");

    // Clica em "Laptops" no menu lateral esquerdo
    cy.contains("#itemc", "Laptops").click();
    cy.wait("@porCategoria");

    // Aguarda os produtos carregarem (a categoria Laptops tem 6 itens)
    cy.get("#tbodyid .card").should("have.length", 6);

    cy.get("#tbodyid .card").then(($cards) => {
      const produtos = [...$cards].map((card) => ({
        nome: card.querySelector(".card-title a").innerText.trim(),
        preco: parseFloat(card.querySelector("h5").innerText.replace("$", "")),
      }));

      const maisCaro = produtos.reduce((a, b) => (b.preco > a.preco ? b : a));

      cy.task("log", `Laptop mais caro: ${maisCaro.nome} - $${maisCaro.preco}`);

      // Asserção final: valor extraído é superior a $0
      expect(maisCaro.preco).to.be.greaterThan(0);
    });
  });
});

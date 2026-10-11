// Questão 01 - Mensagem de erro no login com campos em branco

describe("Questão 01 - Login com campos em branco", () => {
  it("exibe a mensagem de erro com a classe CSS error", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    // Deixa usuário e senha em branco e clica em "Login"
    cy.get('button[type="submit"]').click();

    cy.get("div#flash")
      // 1. Contém o texto esperado
      .should("contain.text", "Your username is invalid!")
      // 2. Contém a classe CSS "error" (vermelho)
      .and("have.class", "error");
  });
});

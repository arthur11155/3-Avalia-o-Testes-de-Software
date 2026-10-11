// Questão 02 - Aguardar o loader sumir e validar o texto final

describe("Questão 02 - Dynamic Loading", () => {
  it("exibe 'Hello World!' depois que o loading desaparece", () => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");

    // Clica em "Start"
    cy.get("#start button").click();

    // O loading aparece e depois desaparece
    cy.get("#loading").should("be.visible");
    cy.get("#loading", { timeout: 15000 }).should("not.be.visible");

    // Valida o texto final
    cy.get("#finish h4").should("be.visible").and("have.text", "Hello World!");
  });
});

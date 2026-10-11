const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    video: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on) {
      // Permite imprimir mensagens no terminal com cy.task("log", "texto")
      on("task", {
        log(mensagem) {
          console.log(mensagem);
          return null;
        },
      });
    },
  },
});

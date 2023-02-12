import { Calculator } from "@/js/modules/Calculator";

const App = (() => {
  function renderApp() {
    document.getElementById("app").innerHTML = `
    <header>
      <h1>Calculator</h1>
    </header>
    <main>
      <div class="calculator"></div>
    </main>
    <footer>Created by <a href="https://github.com/lismgmk/calculator-js" target="_blank">Lis Uladzimir</a> &copy; ${new Date().getFullYear()}</footer>`;

    Calculator.renderCalculator();

    document.addEventListener("click", (event) => {
      const element = event.target;
      element.matches(".number") ? Calculator.selectNumber(element.id) : null;
      element.matches(".operator")
        ? Calculator.selectOperator(element.id)
        : null;
      element.matches("#pos-neg") ? Calculator.togglePosNeg() : null;
      element.matches("#percentage") ? Calculator.convertToPercent() : null;
      element.matches("#clear-all") ? Calculator.clearAll() : null;
      element.matches("#decimal") ? Calculator.selectDecimal() : null;
      element.matches("#equals") ? Calculator.solveEquation() : null;
    });
  }

  return {
    renderApp,
  };
})();

export { App };

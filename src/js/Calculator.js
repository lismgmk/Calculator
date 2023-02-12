import data from '@/js/data'

const Calculator = (() => {
  let screenValue = '0'

  let numA = '0'
  let numB = ''
  let operator = ''
  const calcButtons = data

  function renderCalcButtons() {
    document.querySelector('.calc-buttons-container').innerHTML = calcButtons
      .map(
        (button) =>
          `<button type="button" class="button calc-button${
            typeof button.className !== 'undefined' ? ' ' + button.className : ''
          }" } id="${button.id}">${button.value}</button>`
      )
      .join('')
  }

  function renderCalculator() {
    document.querySelector('.calculator').innerHTML = `
  <div class="screen">0</div>
  <div class="calc-buttons-container">
    </div>`

    renderCalcButtons()
  }

  function selectNumber(number) {
    if (!checkIfError()) {
      if (!operator) {
        if (numA === '0') numA = ''
        numA += number
        screenValue = numA
        document.querySelector('.screen').innerHTML = screenValue
      } else if (numA && numB === '' && operator === 'equals') {
        numA += number
        screenValue = numA
        document.querySelector('.screen').innerHTML = screenValue
      } else {
        if (numB === '0') {
          numB = ''
        }
        numB += number
        screenValue = numB
        document.querySelector('.screen').innerHTML = screenValue
      }
    }
  }

  function selectOperator(operatorValue) {
    if (!checkIfError()) {
      if (numB) solveEquation()
      operator = operatorValue
    }
  }

  function solveEquation() {
    const a = Number(numA)
    const b = Number(numB)
    let formula
    if (numB && operator) {
      if (operator === '/' && numB === '0') {
        numA = ''
        numB = ''
        operator = ''
        screenValue = 'ERROR'
        document.querySelector('.screen').innerHTML = screenValue
      } else {
        switch (operator) {
          case '+':
            formula = a + b
            break
          case '-':
            formula = a - b
            break
          case '*':
            formula = a * b
            break
          case '/':
            formula = a / b
        }
        formula = formula.toString()
        numA = formula
        numB = ''
        operator = ''
        screenValue = formula
        document.querySelector('.screen').innerHTML = screenValue
      }
    }
  }

  function selectDecimal() {
    if (!checkIfError()) {
      if (operator && !numB.includes('.')) {
        numB === '0' || numB === '' ? (numB = '0.') : (numB += '.')
        screenValue = numB
        document.querySelector('.screen').innerHTML = screenValue
      } else if (checkIfOnNumA() && !numA.includes('.')) {
        numA === '0' || numA === '' ? (numA = '0.') : (numA += '.')
        screenValue = numA
        document.querySelector('.screen').innerHTML = screenValue
      }
    }
  }

  function convertToPercent() {
    if (!checkIfError()) {
      if (checkIfOnNumB()) {
        numB /= 100
        numB = numB.toString()
        screenValue = numB
        document.querySelector('.screen').innerHTML = screenValue
      } else if (checkIfOnNumA()) {
        numA /= 100
        numA = numA.toString()
        screenValue = numA
        document.querySelector('.screen').innerHTML = screenValue
      }
    }
  }

  function abs(x) {
    if (x < 0) {
      return -x
    }
    return x
  }

  function togglePosNeg() {
    if (!checkIfError()) {
      if (checkIfOnNumB()) {
        numB < 0 ? (numB = abs(numB)) : numB > 0 ? (numB = -numB) : (numB = 0)
        numB = numB.toString()
        screenValue = numB
        document.querySelector('.screen').innerHTML = screenValue
      } else if (checkIfOnNumA()) {
        numA < 0 ? (numA = abs(numA)) : numA > 0 ? (numA = -numA) : (numA = 0)
        numA = numA.toString()
        screenValue = numA
        document.querySelector('.screen').innerHTML = screenValue
      }
    }
  }

  function clearAll() {
    numA = '0'
    numB = ''
    operator = ''
    screenValue = '0'
    document.querySelector('.screen').innerHTML = screenValue
  }

  function checkIfError() {
    return screenValue === 'ERROR' ? true : false
  }

  function checkIfOnNumA() {
    return !numB && !operator ? true : false
  }

  function checkIfOnNumB() {
    return numB ? true : false
  }

  return {
    renderCalculator,
    selectNumber,
    selectOperator,
    togglePosNeg,
    convertToPercent,
    clearAll,
    selectDecimal,
    solveEquation,
  }
})()

export { Calculator }

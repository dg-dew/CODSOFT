let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function calculate() {
  try {
    let expr = display.value;

    expr = expr.replace(/sin\(([^)]+)\)/g, (_, val) => `Math.sin(degToRad(${val}))`);
    expr = expr.replace(/cos\(([^)]+)\)/g, (_, val) => `Math.cos(degToRad(${val}))`);
    expr = expr.replace(/tan\(([^)]+)\)/g, (_, val) => `Math.tan(degToRad(${val}))`);
    expr = expr.replace(/sqrt\(([^)]+)\)/g, (_, val) => `Math.sqrt(${val})`);
    expr = expr.replace(/log\(([^)]+)\)/g, (_, val) => `Math.log10(${val})`);

    display.value = Function("degToRad", `"use strict"; return (${expr})`)(degToRad);
  } catch {
    display.value = "Error";
  }
}

function toggleDarkMode() {
  document.getElementById('calculator').classList.toggle('dark-mode');
}

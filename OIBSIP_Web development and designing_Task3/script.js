const input = document.getElementById("tempInput");
const type = document.getElementById("tempType");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

function convertTemperature() {
  const value = parseFloat(input.value);
  const selectedType = type.value;

  if (isNaN(value)) {
    celsiusResult.textContent = fahrenheitResult.textContent = kelvinResult.textContent = "--";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (selectedType) {
    case "celsius":
      celsius = value;
      fahrenheit = (value * 9/5) + 32;
      kelvin = value + 273.15;
      break;

    case "fahrenheit":
      celsius = (value - 32) * 5/9;
      fahrenheit = value;
      kelvin = (value - 32) * 5/9 + 273.15;
      break;

    case "kelvin":
      celsius = value - 273.15;
      fahrenheit = (value - 273.15) * 9/5 + 32;
      kelvin = value;
      break;
  }

  celsiusResult.textContent = celsius.toFixed(2);
  fahrenheitResult.textContent = fahrenheit.toFixed(2);
  kelvinResult.textContent = kelvin.toFixed(2);
}

input.addEventListener("input", convertTemperature);
type.addEventListener("change", convertTemperature);

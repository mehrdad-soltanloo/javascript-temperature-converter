const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  // Get the input value
  const tempInput = document.getElementById("temp-input").value;

  const tempType = document.querySelector(
    'input[name="temp-type"]:checked'
  ).value;

  const results = document.getElementById("results");
  if (isNaN(tempInput) || tempInput === "") {
    results.innerHTML = "Please enter a valid number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (tempType === "celsius") {
    celsius = parseFloat(tempInput);
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = celsius + 273.15;
  } else if (tempType === "fahrenheit") {
    fahrenheit = parseFloat(tempInput);
    celsius = ((fahrenheit - 32) * 5) / 9;
    kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
  } else if (tempType === "kelvin") {
    kelvin = parseFloat(tempInput);
    celsius = kelvin - 273.15;
    fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  }

  results.innerHTML = `
  <p>Celsius: ${celsius.toFixed(2)} °C</p>
  <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
  <p>Kelvin: ${kelvin.toFixed(2)} K</p>
  `;
});

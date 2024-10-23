# Temperature Converter

This project is a simple **Temperature Converter** built using **Vanilla JavaScript**, **HTML**, and **CSS**. It allows users to convert temperatures between **Celsius**, **Fahrenheit**, and **Kelvin**.

## Project Structure

```plaintext
temperature-converter/
│
├── index.html        // HTML structure
├── style.css         // CSS for styling
└── script.js         // JavaScript logic for conversion
```

## Features

- Converts between Celsius, Fahrenheit, and Kelvin.
- Includes input validation to ensure proper user input is provided.
- Displays the converted temperature values in a nicely styled card format.

## Formulas Used

- **Celsius to Fahrenheit**: `(C * 9/5) + 32`
- **Celsius to Kelvin**: `C + 273.15`
- **Fahrenheit to Celsius**: `(F - 32) * 5/9`
- **Fahrenheit to Kelvin**: `(F - 32) * 5/9 + 273.15`
- **Kelvin to Celsius**: `K - 273.15`
- **Kelvin to Fahrenheit**: `(K - 273.15) * 9/5 + 32`

## How to Run the Project

1. Clone or download the project repository.
2. Open the `index.html` file in your web browser.

## How It Works

1. The user enters a temperature value in the input field.
2. The user selects the temperature type (Celsius, Fahrenheit, or Kelvin) using radio buttons.
3. Upon clicking the "Convert" button, the temperature is converted into the other two units and displayed in the results section.

## JavaScript Breakdown

The JavaScript handles:

- Fetching the user input value and selected temperature type.
- Performing conversions based on the selected temperature type using basic math operations.
- Validating that the input is a valid number.
- Displaying the converted results on the webpage.

Final JavaScript:

```javascript
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
```

## CSS Design

The CSS file ensures a modern and clean design with a gradient background and card styling for the converter. It adds responsive styling and hover effects to the buttons.

## Improvements & Customizations

- You can improve the UI by adding animations to the card or transitions to the button.
- The input validation can be expanded to handle more cases, such as checking for negative values in Kelvin.

> Thank you 🙂

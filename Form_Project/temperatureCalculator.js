// Convert Celsius to Farenheit
function convertCToF() {
    var celsius = document.getElementById("inputCelsius").value;
    var farenheit = (celsius * 1.8) + 32;
    document.getElementById("solution").innerText = `${celsius}C = ${farenheit}F`;
}

// Convert Farenheit to Celsius
function convertFToC() {
    var farenheit = document.getElementById("inputFarenheit").value;
    var celsius = (farenheit - 32) * 1.8;
    document.getElementById("solution").innerText = `${farenheit}F = ${celsius}C`;
}

// When calculating Celsius, clear what is in the Farenheit input box
function clearFarenheit() {
    inputFarenheit.value = "";
}

// When calculating Farenheit, clear what is in the Celsius input box
function clearCelsius() {
    inputCelsius.value = "";
}

// Reset button that resets input and output
function reset() {
    inputCelsius.value = "";
    inputFarenheit.value = "";
    document.getElementById("solution").innerText = "";
}
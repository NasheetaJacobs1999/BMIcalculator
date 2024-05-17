let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let calculateButton = document.getElementById("calcBtn");
let resultDiv = document.getElementById("result");

calcBtn.addEventListener("click", function() {

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // Checking if valid numbers are given
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "Please enter valid height and weight values.";
        return;
    }

    // Calculating BMI
    let bmi = weight / Math.pow(height / 100, 2);

    // Displaying Result
    resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2);
});

// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Define the function
function checkInput() {

    // Get input value and remove whitespace
    const inputValue = userInput.value.trim();

    // Check empty input
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Convert input into a number
    else {
        const number = Number(inputValue);

        // Check invalid number
        if (!Number.isFinite(number)) {
            result.textContent = "Please enter a valid number!";
        }

        // Compare number with 10
        else if (number < 10) {
            result.textContent = "The number is lower than 10";
        }

        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }

        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Add click event listener
checkBtn.addEventListener("click", checkInput);

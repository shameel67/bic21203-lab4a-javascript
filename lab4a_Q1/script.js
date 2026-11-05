
// Select the paragraph and button
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Define the function
function changeMessage() {
    message.textContent = "Hello there!";
}
// Add click event listener
changeBtn.addEventListener("click", changeMessage);

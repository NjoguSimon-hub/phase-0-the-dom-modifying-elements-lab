// 1. Remove the <main id="main"> element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// 2. Create a new <h1> element and store it in a variable
const newHeader = document.createElement("h1");

// 3. Set the id to "victory"
newHeader.id = "victory";

// 4. Set the inner text to "YOUR-NAME is the champion"
newHeader.textContent = "Simon is the champion"; // Replace "Simon" with your name

// 5. Append it to the body (or another container)
document.body.appendChild(newHeader);
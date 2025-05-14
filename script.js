// Task 1: Change the text content of the paragraph with id 'intro-text'
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("intro-text").textContent = "The text has been changed dynamically!";
});

// Task 2: Modify the CSS style dynamically - Toggle background color
document.getElementById("toggle-bg-btn").addEventListener("click", function() {
    const body = document.body;
    // Toggle background color between white and lightgray
    body.style.backgroundColor = (body.style.backgroundColor === "lightgray") ? "white" : "lightgray";
});

// Task 3: Add a new element to the page when a button is clicked
function addNewElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new dynamically added paragraph!";
    document.getElementById("dynamic-section").appendChild(newElement);
}


setTimeout(addNewElement, 3000);  // Automatically add a new element after 3 seconds

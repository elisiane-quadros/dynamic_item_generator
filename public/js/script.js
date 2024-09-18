document.getElementById("quantity").addEventListener("input", function () {
  const quantity = parseInt(this.value, 10);
  const itemList = document.getElementById("item-list");
  const errorMessage = document.getElementById("error-message");

  itemList.innerHTML = "";

  errorMessage.style.visibility = "hidden";
  errorMessage.textContent = "";

  if (quantity < 0 ) {
    errorMessage.textContent = "*Please enter a valid number greater than 0.";
    errorMessage.style.visibility = "visible"; 
    this.value = "";
  } else {
    for (let i = 1; i <= quantity; i++) {
      const li = document.createElement("li");
      const circle = document.createElement("div");

      circle.classList.add("circle");
      circle.textContent = i;

      li.appendChild(circle);
      itemList.appendChild(li);
    }
  }
});

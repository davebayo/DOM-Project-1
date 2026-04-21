// Adjust item quantity (+ / – buttons)

/* plusBtn.addEventListener("click", () => {
  quantity.textContent = parseInt(quantity.textContent) + 1;
  updateTotal();
});

minusBtn.addEventListener("click", () => {
  if (parseInt(quantity.textContent) > 0) {
    quantity.textContent = parseInt(quantity.textContent) - 1;
    updateTotal();
  }
});


// Delete items from the cart
deleteBtn.addEventListener("click", () => {
  itemRow.remove();
  updateTotal();
});



// like items (heart button)
heartBtn.addEventListener("click", () => {
  heartBtn.classList.toggle("liked");
});

// update total price dynamically 
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".item").forEach(item => {
    const price = parseFloat(item.querySelector(".price").textContent);
    const qty = parseInt(item.querySelector(".quantity").textContent);
    total += price * qty;
  });
  document.querySelector("#total").textContent = total.toFixed(2);
}

*/

// Function to update the total price
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".card").forEach(card => {
    const priceText = card.querySelector(".unit-price").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    const qty = parseInt(card.querySelector(".quantity").textContent);
    total += price * qty;
  });
  document.querySelector(".total").textContent = total + " $";
}

// Handle quantity increase
document.querySelectorAll(".fa-plus-circle").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.nextElementSibling;
    qty.textContent = parseInt(qty.textContent) + 1;
    updateTotal();
  });
});

// Handle quantity decrease
document.querySelectorAll(".fa-minus-circle").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.previousElementSibling;
    if (parseInt(qty.textContent) > 0) {
      qty.textContent = parseInt(qty.textContent) - 1;
      updateTotal();
    }
  });
});

// Handle delete item
document.querySelectorAll(".fa-trash-alt").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Handle like (heart toggle)
document.querySelectorAll(".fa-heart").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.style.color = btn.classList.contains("liked") ? "red" : "black";
  });
});

// Initialize total on page load
updateTotal();

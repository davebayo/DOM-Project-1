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

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".item").forEach(item => {
    const price = parseFloat(item.querySelector(".price").textContent);
    const qty = parseInt(item.querySelector(".quantity").textContent);
    total += price * qty;
  });
  document.querySelector("#total").textContent = total.toFixed(2);
}

document.querySelectorAll(".plus").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.previousElementSibling;
    qty.textContent = parseInt(qty.textContent) + 1;
    updateTotal();
  });
});

document.querySelectorAll(".minus").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.nextElementSibling;
    if (parseInt(qty.textContent) > 0) {
      qty.textContent = parseInt(qty.textContent) - 1;
      updateTotal();
    }
  });
});

document.querySelectorAll(".delete").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
    updateTotal();
  });
});

document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// Initialize total on page load
updateTotal();

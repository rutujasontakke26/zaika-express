let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" 
        style="width:80px; height:80px; object-fit:cover; border-radius:8px; margin-right:10px;">
      <div style="flex-grow:1;">
        <p><strong>${item.name}</strong></p>
        <p>₹${item.price}</p>
      </div>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotalElement.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  // Save cart data before redirecting
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "payment.html"; 
}

// Initial load
displayCart();

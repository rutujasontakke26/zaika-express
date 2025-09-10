function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTable = document.getElementById("cart-items");
  let total = 0;

  if (cartTable) {
    cartTable.innerHTML = "";
    cart.forEach((item, i) => {
      total += item.price;
      cartTable.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>₹${item.price}</td>
          <td><button onclick="removeItem(${i})">Remove</button></td>
        </tr>`;
    });
    document.getElementById("total").innerText = "Total: ₹" + total;
  }
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

window.onload = loadCart;

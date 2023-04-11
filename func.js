// Define array of available products and their prices
const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 4", price: 40 },
    { name: "Product 5", price: 50 },
  ];
  
  // Display available products
  const itemsDiv = document.getElementById("items");
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productDiv = document.createElement("div");
    productDiv.innerText = `${product.name} - $${product.price}`;
    productDiv.addEventListener("click", () => addToCart(product));
    itemsDiv.appendChild(productDiv);
  }
  
  // Define cart array to hold selected items
  const cart = [];
  
  // Add item to cart
  function addToCart(product) {
    cart.push(product);
    displayCart();
  }
  
  // Remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
  }
  
  // Display cart and total cost
  function displayCart() {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");
    cartDiv.innerHTML = "<h2>Cart</h2>";
    totalDiv.innerHTML = "<h2>Total Cost</h2>";
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      const productDiv = document.createElement("div");
      productDiv.innerText = `${product.name} - $${product.price}`;
      const removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.addEventListener("click", () => removeFromCart(i));
      productDiv.appendChild(removeButton);
      cartDiv.appendChild(productDiv);
      totalCost += product.price;
    }
    // Apply discount (for example, 10% off if total cost is over $100)
    let discount = 0;
    if (totalCost > 100) {
      discount = totalCost * 0.1;
    }
    totalCost -= discount;
    totalDiv.innerText = `Total Cost: $${totalCost} (Discount: $${discount})`;
  }
// Image paths for the background
const images = [
    "image1.jpg", 
    "image2.jpg", 
    "image3.jpg" 
];

// Array of ice cream data (10 items)
const iceCreams = [
    { name: "Chocolate Fudge Sundae", image: "c1.jpg", price: 5.99 },
    { name: "Strawberry Shortcake", image: "c2.jpg", price: 4.99 },
    { name: "Mint Chip Cookie Dough", image: "c3.jpg", price: 6.99 },
    { name: "Vanilla Bean with Sprinkles", image: "c4.jpg", price: 4.50 },
    { name: "Cookies and Cream", image: "c5.jpg", price: 5.50 },
    { name: "Mango Sorbet", image: "c6.jpg", price: 3.99 },
    { name: "Coffee Caramel Swirl", image: "c7.jpg", price: 5.99 },
    { name: "Black Raspberry Cheesecake", image: "c8.jpg", price: 6.50 },
    { name: "Peanut Butter Cup", image: "c9.jpg", price: 4.99 },
    { name: "Lemon Meringue Pie", image: "c10.jpg", price: 5.99 }
];

// Function to choose a random background image
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.style.backgroundImage = `url(${images[randomIndex]})`;
}

// Function to create and display an ice cream widget
function createIceCreamWidget(iceCream, index) {
    const iceCreamList = document.getElementById("ice-cream-list");
    const widget = document.createElement("div");
    widget.classList.add("ice-cream-widget");
    widget.innerHTML = `
        <img src="${iceCream.image}" alt="${iceCream.name}">
        <h3>${iceCream.name}</h3>
        <p>Price: $${iceCream.price.toFixed(2)}</p>
        <input type="number" id="quantity-${index}" min="0" value="0" class="quantity-input">
        <button onclick="addItemToCart(${index})" class="add-button">Add</button>
    `;
    iceCreamList.appendChild(widget);
}

// Function to add an item to the cart
function addItemToCart(index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        const iceCream = iceCreams[index];
        const orderDetails = document.getElementById("order-details");
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <h4>${iceCream.name} x ${quantity}</h4>
            <p>Subtotal: $${(iceCream.price * quantity).toFixed(2)}</p>
        `;
        orderDetails.appendChild(cartItem);
        updateTotalPrice();
        quantityInput.value = "0"; // Reset quantity input
    }
}

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;
    const cartItems = document.querySelectorAll("#order-details h4");
    cartItems.forEach(item => {
        const priceText = item.nextElementSibling.textContent.split("$")[1];
        totalPrice += parseFloat(priceText);
    });
    document.getElementById("total-value").textContent = "$" + totalPrice.toFixed(2);
}

// Function to handle checkout (placeholder)
function checkout() {
    const totalPrice = parseFloat(document.getElementById("total-value").textContent.split("$")[1]);
    alert("Checkout successful! Total: $" + totalPrice.toFixed(2));
    // Add your actual checkout logic here (e.g., redirect to a payment page)
}

// Initialize the cart items and display the ice cream list
window.onload = () => {
    changeBackgroundImage();
    iceCreams.forEach((iceCream, index) => {
        createIceCreamWidget(iceCream, index);
    });
};

// Change background image every 10 seconds
setInterval(changeBackgroundImage, 10000);
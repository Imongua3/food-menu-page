const menuItems = [
    { name: "Margherita Pizza", price: "$8.99" },
    { name: "Spaghetti Carbonara", price: "$10.99" },
    { name: "Caesar Salad", price: "$7.99" },
    { name: "Grilled Chicken Sandwich", price: "$9.99" },
    { name: "Beef Burger", price: "$11.99" },
    { name: "Chocolate Lava Cake", price: "$5.99" }
];

const menuList = document.getElementById('menu-list');
const addItemButton = document.getElementById('add-item-button');
const foodNameInput = document.getElementById('food-name');
const foodPriceInput = document.getElementById('food-price');

// Function to render the menu items
function renderMenu() {
    menuList.innerHTML = ''; // Clear the current menu list
    menuItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price}`;

        // Add click event to remove the item
        listItem.addEventListener('click', () => {
            removeMenuItem(index);
        });

        menuList.appendChild(listItem);
    });
}

// Function to add a new menu item
function addMenuItem() {
    const foodName = foodNameInput.value.trim();
    const foodPrice = foodPriceInput.value.trim();

    if (foodName && foodPrice) {
        menuItems.push({ name: foodName, price: foodPrice });
        renderMenu();
        foodNameInput.value = '';
        foodPriceInput.value = '';
    } else {
        alert("Please enter both a food name and a price.");
    }
}

// Function to remove a menu item
function removeMenuItem(index) {
    menuItems.splice(index, 1);
    renderMenu();
}

// Add event listener to the "Add Item" button
addItemButton.addEventListener('click', addMenuItem);

// Initial render of the menu
renderMenu();


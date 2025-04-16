document.getElementsByClassName('menu-toggle')[0].onclick = function () {
    var navList = document.getElementsByClassName('list')[0];
    var iconscontainer = document.getElementsByClassName('icons-container')[0];


    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    } else {
        navList.classList.add('active');
    }
};

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-products");
    const totalPriceElement = document.getElementById("total-price"); // Create this in your HTML

    function renderCart() {
        if (cart.length > 0) {
            cartContainer.innerHTML = cart.map((product, index) => `
                <div class="cart" data-index="${index}">
                    <img src="${product.images[0]}" alt="${product.title}">
                    <div>
                        <h2>${product.name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Price: $${product.price}</p>
                        <div class="quantity-controls">
                            <button class="decrease rounded-circle " data-index="${index}">−</button>
                            <span>${product.quantity || 1}</span>
                            <button class="increase rounded-circle " data-index="${index}">+</button>
                            <button class="remove btn" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </div>
            `).join("");

            updateTotalPrice();
        } else {
            cartContainer.innerHTML = "<p>No products in the cart.</p>";
            totalPriceElement.textContent = "Total Price: $0.00";
        }
    }

    function updateTotalPrice() {
        const total = cart.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
        totalPriceElement.textContent = `Total Price: $${total.toFixed(2)}`;
    }

    cartContainer.addEventListener("click", function (e) {
        const index = e.target.dataset.index;
        if (index !== undefined) {
            if (e.target.classList.contains("increase")) {
                cart[index].quantity = (cart[index].quantity || 1) + 1;
            } else if (e.target.classList.contains("decrease")) {
                cart[index].quantity = (cart[index].quantity || 1) - 1;

                // If quantity is 0, remove the product
                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1);
                }
            } else if (e.target.classList.contains("remove")) {
                cart.splice(index, 1); // Remove the product manually
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    renderCart();
});


////////////

const themeIcon = document.getElementById('theme-icon');

        // Check saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            
            // Update icon based on mode
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', '');
            }
        }

        // System preference detection
        if (window.matchMedia) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            if (prefersDark.matches && !savedTheme) {
                document.body.classList.add('dark-mode');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }

            prefersDark.addEventListener('change', (e) => {
                if (e.matches) {
                    document.body.classList.add('dark-mode');
                    themeIcon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    document.body.classList.remove('dark-mode');
                    themeIcon.classList.replace('fa-sun', 'fa-moon');
                }
            });
        }
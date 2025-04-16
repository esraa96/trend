// Retrieve selected product data from localStorage
var productData = localStorage.getItem("selectedProduct");

if (productData) {
  var product = JSON.parse(productData);

  var mainImage = document.getElementById("mainImage");
  var descDiv = document.getElementById("description");
  var titleDiv = document.getElementById("productTitle");
  var priceDiv = document.getElementById("price");
  var thumbsContainer = document.getElementById("thumbnails");
  var addToCartBtn = document.getElementById("add-to-cart");

  console.log("Product Data:", product); // Debugging log

  if (!product || !product.id) {
    alert("Invalid product data.");
  } else {
    if (mainImage) mainImage.src = product.images?.[0] || "placeholder.jpg";
    if (descDiv) descDiv.textContent = product.description || "No description available.";
    if (titleDiv) titleDiv.textContent = product.name || "Product Title";
    if (priceDiv) priceDiv.textContent = product.price ? product.price + " EGP" : "Price not available";

    // Display all images in the thumbnails container
    if (thumbsContainer && Array.isArray(product.images) && product.images.length > 0) {
      thumbsContainer.innerHTML = ""; // Clear previous thumbnails

      product.images.forEach(function(imgUrl) {
        var img = document.createElement("img");
        img.src = imgUrl;
        img.classList.add("thumbnail"); // Add class for styling

        // Change main image on hover
        img.addEventListener("mouseenter", function() {
          if (mainImage) mainImage.src = imgUrl;
        });

        thumbsContainer.appendChild(img);
      });
    }

    // Ensure the button exists before adding the event listener
    if (addToCartBtn) {
      console.log("Add to Cart button found!"); // Debugging log
      addToCartBtn.addEventListener("click", function() {
        console.log("Button clicked"); // Debugging log
        addToCart(product);
      });
    } else {
      console.error("Add to Cart button not found!");
    }
  }
} else {
  alert("No product data found in localStorage.");
}

// Add to Cart function (Global Scope)
function addToCart(product) {
  console.log("Adding to cart:", product); // Debugging log

  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product is already in the cart
  var isInCart = cart.some(item => item.id === product.id);
  if (isInCart) {
    alert(product.name + " is already in your cart.");
    return;
  }

  // Add the product to cart
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " has been added to your cart!");
}



/////////////

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
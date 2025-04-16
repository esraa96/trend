document.getElementsByClassName('menu-toggle')[0].onclick = function () {
  var navList = document.getElementsByClassName('list')[0];


  if (navList.classList.contains('active')) {
      navList.classList.remove('active');
  } else {
      navList.classList.add('active');
  }
};



let allProducts = [];

document.addEventListener("DOMContentLoaded", function () {

  fetch("../product.json")
    .then((response) => response.json())
    .then((data) => {
      allProducts = data.products;
      displayProducts(allProducts);
    })
    .catch((error) => console.error("Error fetching data:", error));

  document
    .querySelector("input[name='searchkey']")
    .addEventListener("input", function (event) {
      const searchValue = event.target.value.toLowerCase();
      const filteredProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue) ||
          (product.description
            ? product.description.toLowerCase()
            : ""
          ).includes(searchValue)
      );
      displayProducts(filteredProducts);
    });
});

function displayProducts(products) {
  const productsDiv = document.getElementById("productsDiv");
  productsDiv.innerHTML = "";

  if (products.length === 0) {
    productsDiv.innerHTML = "<p>No products found</p>";
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const rating = Math.floor(Math.random() * 3) + 3;
    let starsHTML = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starsHTML += '<i class="fa-solid fa-star"></i>';
      } else {
        starsHTML += '<i class="fa-regular fa-star"></i>';
      }
    }

    productCard.innerHTML = `
    <a href="Des.html" class="view-details" data-id="${product.id}">
      <img src="${product.images[0]}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="rating">${starsHTML}</p> 
      <p class="price">Price: ${product.price} EGP</p> 
       </a>
      <div class="buttons">
       
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;

    productsDiv.appendChild(productCard);

    productCard
      .querySelector(".view-details")
      .addEventListener("click", function () {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
      });

    productCard
      .querySelector(".add-to-cart")
      .addEventListener("click", function () {
        const productId = this.getAttribute("data-id");
        addToCart(productId);
      });
  });
}

function addToCart(productId) {
  console.log("the product has added " + productId);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = allProducts.find((p) => p.id == productId);
  if (!product) return;

  let existingProduct = cart.find((item) => item.id == productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart successfully!");
}



/////

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
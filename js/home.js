//toggle

document.getElementsByClassName('menu-toggle')[0].onclick = function () {
    var navList = document.getElementsByClassName('list')[0];
    var iconscontainer = document.getElementsByClassName('icons-container')[0];


    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    } else {
        navList.classList.add('active');
    }
};



////slider 
document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelector(".slides");
    var slide = document.querySelectorAll(".slide");
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var index = 0;

    function showSlide(i) {
        if (i >= slide.length) {
            index = 0;
        } else if (i < 0) {
            index = slide.length - 1;
        } else {
            index = i;
        }
        var offset = -index * 100;
        slides.style.transform = "translateX(" + offset + "%)";
    }

    nextButton.addEventListener("click", function () {
        showSlide(index + 1);
    });

    prevButton.addEventListener("click", function () {
        showSlide(index - 1);
    });

    window.onload = function () {
        showSlide(index);
    };
});

/////////products//



function getDataFromDB() {
    var prodcuts = [
        { id: 121, name: "Dress", price: 690.0, description: "yellow with a large beige bow at the front. It features white lace stripes on both sides. The overall design is playful and cheerful,", images: ["./images/Designer Natiaberlito.jpeg"] },
        { id: 122, name: "Baby Girl Long Sleeve", price: 1399.0, description: "Main Fabric Content : Cotton 100%,Elastane 0%,Polyester 0%.", images: ["./images/f5356243-96e7-46a8-8160-0f8c85a10842.jpeg"] },
        { id: 123, name: "Man T-shirt", price: 400.0, description: "Main Fabric Content : Cotton 67%,Elastane 3%,Polyester 30%.", images: ["./images/INCERUN Men Shirt Solid Color 2023 Lapel Short Sleeve Korean Style Men.jpeg"] },
        { id: 124, name: "Baby Boy Waterproof Plush Puffer Jacket", price: 1400.0, description: "Main Fabric Content : Polyester 100%.", images: ["./images/037afdc9-f863-4141-96b9-2f751e08530a.jpeg"] },
        { id: 125, name: "Faux Leather Flat Sole Boots", price: 900.0, description: "Main Fabric Content : Polyurethane 100%.", images: ["./images/Children's shoes Hello Kitty - Pink _ 21 _ Fille.jpeg"] },
    { id: 126, name: "Girl  Sneakers", price: 900.0, description: "Main Fabric Content : Textile Materials 40%,Polyurethane 60%.", images: ["./images/Our Top Picks_ Thanksgiving Dresses for Kids - The Cuteness.jpeg"] },
    { id: 127, name: "Girl Thick Sole Sneakers", price: 900.0, description: "Main Fabric Content : Textile Materials 80%,Polyurethane 20%.", images: ["./images/Girls' Fashion Simple British Style Bow Soft Bottom Casual Shoes - Beige, 24.jpeg"] },
    { id: 128, name: "baby Gitl Dress", price: 800.0, description: "Main Fabric Content : Polyurethane 100%.", images: ["./images/ชุดเดรสสลิปแขนกุดสำหรับเด็ก, ชุดเดรสเจ้าหญิงกระโปรงลายทางผ้าฝ้ายสำหรับเด็กใส่ในฤดูร้อนกระโปรงยาวพริ้วเด็กเล็กเด็กผู้หญิงพรรคเด็กวันเกิด - AliExpress 1501.jpeg"] },
    // { id: 129, name: "Man Flat Bottom Home Boots", price: 600.0, description: "Main Fabric Content : Textile Materials 100%.", images: ["./images/sh4.jpg", "./images/sh5.jpg", "./images/sh6.jpg"] },
    // { id: 130, name: "DOUBLE STRAP HIGH HEEL SHOES", price: 1600.0, description: "Stiletto heel shoes with double thin strap detail on the front. Ankle strap with buckle fastening. Pointed toe.", images: ["./images/sh7.jpg", "./images/sh8.jpg", "./images/sh9.jpg"] },
    // { id: 131, name: "FLAT ANKLE BOOTS WITH BUCKLE", price: 1200.0, description: "Ankle boots. Buckle detail on the leg. Back pull tab. Side zip fastening. Round toe.", images: ["./images/shoes7.jpg", "./images/shoes8.jpg", "./images/shoes9.jpg"] },
    // { id: 132, name: "CHELSEA BUCKLE HEELED ANKLE BOOTS", price: 1800.0, description: "Heeled ankle boots with ridged sole. Chelsea style. Buckle detail on the shaft and elasticated side panels. Pull tab at the back. Zip fastening. Round toe.", images: ["./images/shoes10.jpg", "./images/shoes11.jpg", "./images/shoes12.jpg"] },
    { id: 133, name: "Woman Suede Shoulder Bag", price: 800.0, description: "Main Fabric Content : Polyurethane 100%.", images: ["./images/bag1.jpg", "./images/bag2.jpg", "./images/bag3.jpg"] },
    { id: 134, name: "Woman Faux Leather Shoulder Bag", price: 700.0, description: "Main Fabric Content : Polyurethane 100%.", images: ["./images/bag4.jpg", "./images/bag5.jpg", "./images/bag6.jpg"] },
    { id: 135, name: "Woman Faux Leather Shoulder Bag", price: 1000.0, description: "Main Fabric Content : Polyurethane 100%.", images: ["./images/bag7.jpg", "./images/bag8.jpg", "./images/bag9.jpg"] },
    {
        id: 102,
        name: "SweatyRocks",
        description: "Women's Casual Lace Up Long Sleeve Pullover Crop Top Sweatshirt",
        price: 1000.0,
        "category_id": 1,
        images: [
            "./images/4c92b9e4-f4c0-4e1c-8c2b-a05f62fc834d.jpeg",
        ]
       
    },
            { 
                id: 118, 
                name: "Shirts", 
                price: 1800.0, 
                description: "Toddler Boys 4 Pieces T-shirts and Shorts Summer Outfit Striped Shirt Short Set.", 
                images: ["./images/a04d70b2-1b9b-4354-ae11-ff352d1a8a32.jpeg", ] 
            },
            { 
                id: 119, 
                name: "Modest Dress", 
                price: 1600.0, 
                description: "BTween Kids Girl's Fashion Stretch Waist Ultra Soft Jogger Pants Set  It features white lace stripes on both sides..", 
                images: ["./images/b8fd30a3-ada0-4e0c-8bf3-abf8dd690ab5.jpeg"] 
            },
            { 
                id: 120, 
                name: "Modest Dress", 
                price: 600.0, 
                description: "The Children's Place Baby Girls' and Toddler Pull on Chambray Shorts.", 
                images: ["./images/78171e25-c10c-41fc-83fc-30d4fbc6c273.jpeg"] 
            },
            { 
                id: 121, 
                name: "Crop Top", 
                price: 690.0, 
                description: "Girls Summer Crop Tops Color Block Vest Cute.", 
                images: ["./images/CropTop.jpg", "./images/CropTop.1.jpg", "./images/CropTop.2.jpg"] 
            },
            { 
                id: 122, 
                name: "Baby Boy Long Sleeve", 
                price: 1399.0, 
                description: "Main Fabric Content : Cotton 100%,Elastane 0%,Polyester 0%.", 
                images: ["./images/Camisas masculinas de manga longa solta de algodão cor sólida com bolsos com aba.jpeg"] 
            },
            { 
                id: 123, 
                name: "Boy Jogger Trousers", 
                price: 400.0, 
                description: "Main Fabric Content : Cotton 67%,Elastane 3%,Polyester 30%.", 
                images: ["./images/New In.jpeg"] 
            },
            { 
                id: 124, 
                name: "Baby Boy Waterproof Plush Puffer Jacket", 
                price: 1400.0, 
                description: "Main Fabric Content : Polyester 100%.", 
                images: ["./images/waterproof1.jpg", "./images/waterproof2.jpg", "./images/waterproof3.jpg"] 
            },
            { 
                id: 125, 
                name: "Faux Leather Flat Sole Boots", 
                price: 900.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/boot1.jpg", "./images/boot2.jpg", "./images/boot3.jpg"] 
            },
            { 
                id: 126, 
                name: "Boy short", 
                price: 900.0, 
                description: "Main Fabric Content : Textile Materials 40%,Polyurethane 60%.", 
                images: ["./images/b33f7954-c0de-4375-aeea-606ebf835ffd.jpeg"] 
            },
            { 
                id: 127, 
                name: "Girl Thick Sole Sneakers", 
                price: 900.0, 
                description: "Main Fabric Content : Textile Materials 80%,Polyurethane 20%.", 
                images: ["./images/shoes4.jpg", "./images/shoes5.jpg", "./images/shoes6.jpg"] 
            },
            { 
                id: 128, 
                name: "Boy Faux Leather Thick Sole Sneaker", 
                price: 800.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/sh1.jpg", "./images/sh2.jpg", "./images/sh3.jpg"] 
            },
            { 
                id: 129, 
                name: "Man Flat Bottom Home Boots", 
                price: 600.0, 
                description: "Main Fabric Content : Textile Materials 100%.", 
                images: ["./images/sh4.jpg", "./images/sh5.jpg", "./images/sh6.jpg"] 
            },
            { 
                id: 130, 
                name: "DOUBLE STRAP HIGH HEEL SHOES", 
                price: 1600.0, 
                description: "Stiletto heel shoes with double thin strap detail on the front. Ankle strap with buckle fastening. Pointed toe.", 
                images: ["./images/sh7.jpg", "./images/sh8.jpg", "./images/sh9.jpg"] 
            },
            { 
                id: 131, 
                name: "FLAT ANKLE BOOTS WITH BUCKLE", 
                price: 1200.0, 
                description: "Ankle boots. Buckle detail on the leg. Back pull tab. Side zip fastening. Round toe.", 
                images: ["./images/shoes7.jpg", "./images/shoes8.jpg", "./images/shoes9.jpg"] 
            },
            { 
                id: 132, 
                name: "CHELSEA BUCKLE HEELED ANKLE BOOTS", 
                price: 1800.0, 
                description: "Heeled ankle boots with ridged sole. Chelsea style. Buckle detail on the shaft and elasticated side panels. Pull tab at the back. Zip fastening. Round toe.", 
                images: ["./images/Sandália Monaliza Salto Alto - Branca _ 37.jpeg"] 
            },
            { 
                id: 133, 
                name: "Woman Suede Shoulder Bag", 
                price: 800.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/bag1.jpg", "./images/bag2.jpg", "./images/bag3.jpg"] 
            },
            { 
                id: 134, 
                name: "Woman Faux Leather Shoulder Bag", 
                price: 700.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/Harlee Shoulder Bag - Brown.jpeg"] 
            },
            { 
                id: 150, 
                name: "Woman suet", 
                price: 700.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/cf42c416-4a67-461c-8282-1a7dc5eaa173.jpeg"] 
            },
            { 
                id: 190, 
                name: "baby Girl dres", 
                price: 700.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/4ca31ccb-6dc5-449c-b2fd-34a6274e0530.jpeg"] 
            },
            { 
                id: 180, 
                name: "baby Girl dres", 
                price: 700.0, 
                description: "Main Fabric Content : Polyurethane 100%.", 
                images: ["./images/Men Inspo Winter _ Streetwear Men Outfits Inspiration.jpeg"] 
            }
    ];
    return prodcuts; 
}

var prodcuts = getDataFromDB();

function draw(product) {
    var div = document.createElement("div");
    div.classList.add("plant-card"); 
    
    var img = document.createElement("img");
    img.src = product.images[0];  
  
    img.classList.add("plant-card-img"); 

    var h1 = document.createElement("h3");
    h1.innerText = product.name; 

    var p1 = document.createElement("p");
    p1.innerText = product.description;
    
    var p2 = document.createElement("p");
    p2.innerText = product.price + "$";
    p2.className = "price";

    var btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.addEventListener("click", function() {
        addToCart(product);
    });
    div.addEventListener("click", function() {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "Des.html";
        // alert("Product details saved! Now another page can access it.");
    });
    div.append(img, h1, p1, p2, btn);

    var con = document.getElementById("plantsSectionContainer");
    con.appendChild(div);
}
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 
    cart.push(product); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
    alert(`${product.name} has been successfully added to your cart!`);
}


for (var i = 0; i < prodcuts.length; i++) {
    draw(prodcuts[i]);
}
///search

var EagleFilter = {
    filterProducts: function() {
        var searchInput = document.getElementById('searchInput').value.toLowerCase();
        var products = document.querySelectorAll('.plant-card'); 

        products.forEach(function(product) {
            
            var titleElement = product.querySelector('h3');
            
          
            if (titleElement) {
                var title = titleElement.innerText.toLowerCase();
                if (title.includes(searchInput)) {
                    product.style.display = 'block';  
                } else {
                    product.style.display = 'none';   
                }
            }
        });
    }
};


//categories
var categories = [
    { "id": 101, "name": "Women Clothes", "category_id": 1 },
    { "id": 112, "name": "Mens ", "category_id": 2 },
    { "id": 120, "name": "Boys", "category_id": 3 },
    { "id": 130, "name": "Girls", "category_id": 4 }
];

document.addEventListener("DOMContentLoaded", function () {
    var categories = [
        {
            "id": 101,
            "name": "Women Clothes",
            "category_id": 1,
            "image": "../assets/Rectangle 19451.png"
        },
        {
            "id": 112,
            "name": "Mens Clothes",
            "category_id": 2,
            "image": "../assets/Rectangle 19449.png"
        },
        {
            "id": 120,
            "name": "Boys Clothes",
            "category_id": 3,
            "image": "../assets/Rectangle 19450.png"
        },
        {
            "id": 130,
            "name": "Girls Clothes",
            "category_id": 3,
            "image": "../assets/The Kids New Luxury Brand “One Two Three”.jpeg"
        }
    ];

    var container = document.getElementById("categories-section");

    categories.forEach(category => {
        var categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        var img = document.createElement("img");
        img.src = category.image;
        img.alt = category.name;


        var link = document.createElement("a");
        link.href = "product.html?category_id=" + category.category_id;
        link.textContent = category.name;
        link.classList.add("category-link");
        categoryDiv.appendChild(img);
        categoryDiv.appendChild(link);
        container.appendChild(categoryDiv);
    });
});


//////////slider22
var sLiderrIndex = 0;
var sLiderrData = [
    { url: "images/latest8.jpg.webp",  },
    { url: "images/latest7.jpg.webp", /*name: "Item 2", price: "$20" */},
    { url: "images/latest6.jpg.webp",/* name: "Item 3", price: "$30"*/ },
    { url: "images/latest8.jpg.webp",/* name: "Item 4", price: "$40"*/ },
    { url: "images/latest7.jpg.webp",/* name: "Item 3", price: "$30"*/ }
    
];

window.addEventListener("load", function() {
    loadsLiderrSlides();
    document.getElementById("sLiderrPrevBtn").addEventListener("click", prevsLiderrSlide);
    document.getElementById("sLiderrNextBtn").addEventListener("click", nextsLiderrSlide);
});

function loadsLiderrSlides() {
    var sLiderrSlider = document.getElementById("sLiderrSlider");
    sLiderrSlider.innerHTML = "";
    sLiderrData.forEach(function(item) {
        var slide = document.createElement("div");
        slide.classList.add("sLiderr-slide");
        var card = document.createElement("div");
        card.classList.add("sLiderr-card");
        var img = document.createElement("img");
        img.src = item.url;
        var title = document.createElement("h3");
        title.textContent = item.name;
        var price = document.createElement("p");
        price.textContent = item.price;
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        slide.appendChild(card);
        sLiderrSlider.appendChild(slide);
    });
}

function nextsLiderrSlide() {
    if (sLiderrIndex < sLiderrData.length - 4) {
        sLiderrIndex++;
    } else {
        sLiderrIndex = 0;
    }
    updatesLiderrSlider();
}

function prevsLiderrSlide() {
    if (sLiderrIndex > 0) {
        sLiderrIndex--;
    } else {
        sLiderrIndex = sLiderrData.length - 4;
    }
    updatesLiderrSlider();
}

function updatesLiderrSlider() {
    document.getElementById("sLiderrSlider").style.transform = "translateX(-" + (sLiderrIndex * 25) + "%)";
}
/////////////////


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
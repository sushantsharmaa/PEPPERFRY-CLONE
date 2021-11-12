let ProductInfo = JSON.parse(localStorage.getItem("ProductInfo"))
let clicked = ProductInfo[ProductInfo.length - 1]

let Nam = document.getElementById("NAME")
Nam.textContent = clicked.name

let Img = document.getElementById("sofaimg")
    // let Img = document.createElement("img")
Img.src = clicked.img

let Price = document.getElementById("mrp")
Price.textContent = clicked.price



localStorage.setItem("ProductInfo", JSON.stringify(ProductInfo))

if (localStorage.getItem("Pf_cart") === null) {
    localStorage.setItem("Pf_cart", JSON.stringify([]))
}

function ADDTOCART() {


    let productCart = JSON.parse(localStorage.getItem("Pf_cart"))

    let Product_Name = document.getElementById("NAME")


    let Image = document.getElementById("sofaimg")

    let Price = document.getElementById("mrp")


    let productDetails = {
        Name: Product_Name.textContent,
        Image: Image.src,
        Price: Price.textContent,
    }

    productCart.push(productDetails)
    console.log(productCart)



    localStorage.setItem("Pf_cart", JSON.stringify(productCart));

    console.log("products_cart:", productDetails)

    alert("Added to Cart");

    console.log("products_cart:", productDetails)

    let btn = document.getElementById("cart-btn");
    btn.innerHTML = "GO TO CART";
    
    let go = document.getElementById("go");
    go.setAttribute("href","../html/cart.html")
}

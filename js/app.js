/* app.js */
const productsE1 = document.querySelector(".render1");
const productsE2 = document.querySelector(".render2");
const productsE3 = document.querySelector(".render3");
const productsE4 = document.querySelector(".render4");
const productsE5 = document.querySelector(".render5");
const productsE6 = document.querySelector(".render6");
const productsE7 = document.querySelector(".render7");
const productsE8 = document.querySelector(".render8");
const productsE9 = document.querySelector(".render9");
const productsE10 = document.querySelector(".render10");
const productsE11 = document.querySelector(".render11");
const productsE12 = document.querySelector(".render12");
const productsE13 = document.querySelector(".render13");
const productsE14 = document.querySelector(".render14");
const cartItemE1 = document.querySelector(".cart-items");
const subtotalE1 = document.querySelector(".subtotal");
const totalItemsInCartE1 = document.querySelector(".total-items-in-cart");
//渲染產品 
function renderProdcuts(){
    products[0].forEach( (product) => {
        productsE1.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow"> 加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[1].forEach( (product) => {
        productsE2.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top " loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[2].forEach( (product) => {
        productsE3.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[3].forEach( (product) => {
        productsE4.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[4].forEach( (product) => {
        productsE5.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[5].forEach( (product) => {
        productsE6.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[6].forEach( (product) => {
        productsE7.innerHTML +=`
        <div class="col-6  col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[7].forEach( (product) => {
        productsE8.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[8].forEach( (product) => {
        productsE9.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[9].forEach( (product) => {
        productsE10.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[10].forEach( (product) => {
        productsE11.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[11].forEach( (product) => {
        productsE12.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[12].forEach( (product) => {
        productsE13.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    products[13].forEach( (product) => {
        productsE14.innerHTML +=`
        <div class="col-6 col-md-3 text-center  m-0 p-0">
        <div class="card h-100" >
            <div class="imgwapper">
            <a href="${product.href}"><img src="${product.imgSrc}"class="card-img-top "loading="lazy"></a>
            </div>
            <div class="card-body id="${product.id}"">
                <h4 class="card-text">${product.name}</h4>
                <p class="money">$${product.price}</p>
                <input type="button" value="詳細內容" onclick="location.href='${product.href}'" class="bottonhadow">
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button type="button" class="bottonshadow">加入購物車</button>
            </div>
        </div>
    </div>`;
    })
    
   
   
}

renderProdcuts();


// 購物車陣列
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();
// 加入購物車
function addToCart(id) {
    // 檢查購物車中是否重複商品
    if (cart.some((item) => item.id === id)) {
        alert("商品已經在購物車囉!")
    }else {
        const newProducts = [].concat(...products);
        const item = newProducts.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits : 1
        });
        Swal.fire({
            text:'商品已加入購物車',
            icon:'success'
          })
        
    }
    
    updateCart();

}


// 更新購物清單
function  updateCart(){
    renderCartItems();
    renderSubtoal();

    // 儲存購物清單
    localStorage.setItem("CART",JSON.stringify(cart));
}
// 更新金額
function renderSubtoal(){
    let totalPrice = 0, 
    totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subtotalE1.innerHTML = `總金額 (${totalItems} 項商品): $${totalPrice.toFixed(2)}`;
    totalItemsInCartE1.innerHTML = totalItems
}
// 渲染購物清單
function renderCartItems(){
    cartItemE1.innerHTML = ""; //購物車清空
    cart.forEach((item) => {
        cartItemE1.innerHTML +=`
        <div class="cart-item">
        <div class="removeitem" >
            <i class="fa-solid fa-trash" onclick="removeItemFromCart(${item.id})"></i>
        </div>

        <div class="item-info">
            <img src="${item.imgSrc}" alt="${item.name}">
        </div>

        <div class="rightitem">
            <h4>${item.name}</h4>
            <p>商品編號:#${item.id}</p>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                數量:
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">
                <img src="img/minus.png" alt="">
                </div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">
                <img src="img/add.png" alt="">
                </div>           
            </div>
        </div>
    </div>`;
    });
}
// 改變刪除購物選項
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
  }

// 改變購物清單數字
function changeNumberOfUnits(action, id){
    cart = cart.map((item) => {
        
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === "minus" && numberOfUnits >1){
                numberOfUnits--;
            }else if(action === "plus" && numberOfUnits < item.instock){
                numberOfUnits++;
            }
        }


        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}
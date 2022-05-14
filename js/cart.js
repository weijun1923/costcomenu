// 購物車陣列
const cartItemE1 = document.querySelector(".cart-items");
const subtotalE1 = document.querySelector(".subtotal");
const totalItemsInCartE1 = document.querySelector(".total-items-in-cart");
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
console.log(updateCart());
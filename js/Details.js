const productsE1 = document.querySelector(".back");
const newProducts = [].concat(...products);
var str = location.pathname; //獲取檔名
var a = str.substr(str.lastIndexOf("/") + 1);
var addCartId = a.replace(".html", "");
var addCartId = Number(addCartId);
var newarry = []; //成立新陣列
const item = newProducts.find((product) => product.id === addCartId); //找到id 傳回物件
newarry.push(item); // 將物件添加到新陣列中
function renderProdcuts() {
    newarry.forEach((product) => {
        productsE1.innerHTML += `
            <div class="add-to-cart btn  btn-floating " style="background-color: #f8f9fb;" onclick="addToCart(${product.id})">
                <button type="button" class="bottonshadow"> 加入購物車</button>
            </div>
    `;
    })
};
renderProdcuts();
let cart = JSON.parse(localStorage.getItem("CART")) || [];
function updateCart() {
    // 儲存購物清單
    localStorage.setItem("CART", JSON.stringify(cart));
}
updateCart();
// 加入購物車
function addToCart(id) {
    // 檢查購物車中是否重複商品
    if (cart.some((item) => item.id === id)) {
        alert("商品已經在購物車囉!")
    } else {
        const newProducts = [].concat(...products);
        const item = newProducts.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1
            
        });
        Swal.fire({
            text:'商品已加入購物車',
            icon:'success'
          })
        
    }

    updateCart();

}
console.log(updateCart());

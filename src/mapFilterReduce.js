let cart = [
    {id:1, productName:"Telefon" , quantity:3, unitPrice:4000},
    {id:2, productName:"bardak" , quantity:2, unitPrice:30},
    {id:3, productName:"kalem" , quantity:1, unitPrice:20},
    {id:4, productName:"sarj cihazı" , quantity:2, unitPrice:100},
    {id:5, productName:"kitap" , quantity:3, unitPrice:30},
    {id:6, productName:"pot" , quantity:5, unitPrice:150},
]

//cart.push({id:7, productName:"ruhsat" , quantity:1, unitPrice:20})

function addToCart(sepet) {
   sepet.push({id:7, productName:"ruhsat" , quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)

let sayi = 10
function sayiTopla(number) {
    number += 1
    console.log(number)
}
sayiTopla(sayi) //11
console.log(sayi) //10 çünkü değer tip

console.log("+++++++++ map operation +++++++++++++")

cart.map(product => {
    console.log(product.productName + " : "+ product.unitPrice * product.quantity)
})

console.log("+++++++++ filter operation +++++++++++++")

let quantityOver2 =cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

console.log("+++++++++ reduce operation +++++++++++++")
//sepete eklenen ürün fiyatlarını toplamak gibi düşünülebilir
let total = cart.reduce((acc,product) => acc+ product.unitPrice * product.quantity , 0 )
console.log(total)
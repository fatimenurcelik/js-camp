function addToCart(quantity,productName="çay") { //sona değeri olan parametreyi yazmak daha işlevsel olacaktır
    console.log("sepete eklendi " + productName +" adet "+quantity)
}
addToCart("elma",2)
addToCart("armut",5)
addToCart()
addToCart("karpuz",7)

let sayHello = ()=>{
    //bir fonksiyonu bir değişkene atayabiliriz
    console.log("hello world")
}

sayHello()

let sayHello2 = function () {
    console.log("hello world 2")
}

sayHello2()
//sayHello ve sayHello2 arasında this kullanımı acısından fark vardır.

function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2("elma",5,10)
addToCart2("armut",2,3)

//object notation da denebilir
let product2={productName:"elma",unitPrice:10,quantity:5}
let product3={productName:"elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="karpuz"
console.log(product3.productName)
//referans tip

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)
//değer tip

console.log("**********************************")

function addToCart3(product) {
    console.log("ürün: "+product.productName)
    console.log("adet: "+product.quantity)
    console.log("fıyat: "+ product.unitPrice)
}

addToCart3(product2)

console.log("-------------------")

function addToCart4(x) {
    console.log(products) //scope  
} //parantez içleri aynıysa zaten problem yok , farklıysa da problem yok :) sonuc ayni cikar

let products = [
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:10,quantity:5},
    {productName:"muz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(...numbers) { //rest
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        total+=numbers[index]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

console.log("++++++++++++++++++++++")

let numbers = [30,10,500,600,120]
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,Marmara,Karadeniz,[icAnadoluSehirleri]] = [
    {name:"ic anadolu",population:"20m"},
    {name:"marmara",population:"30m"},
    {name:"karadeniz",population:"10m"},
    [
        ["ankara","konya"],
        ["ist","bursa"],
        ["sinop","trab"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

//distract ediyoruz parçalıyoruz
let newproductName,newunitPrice, newquantity 
({productName:newproductName,unitPrice:newunitPrice, quantity:newquantity } 
    = {productName:"elma",unitPrice:10,quantity:5})
console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)
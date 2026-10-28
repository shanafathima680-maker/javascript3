// var cart={

// name:"Shana",
// age:19,
// cart:["laptop","mouse","keyboard"],
// prices:[50000,800,1500]
// }
// console.log(cart)
// cart.cart.push("headphone")
// cart.prices.push(2000)
// console.log(cart.cart);
// console.log(cart.prices);
// cart.cart.pop()
// cart.prices.pop()
// cart.cart.push("Monitor","Webcam")
// cart.prices.push(12000,3000)
// console.log(cart.cart)
// console.log(cart.prices)
// console.log(cart.name)
// console.log(cart.age)
// console.log(cart.cart)
// var total=(cart.prices[0],cart.prices[1],cart.prices[2],cart.prices[3],cart.prices[4])
// console.log(cart.prices[0]+cart.prices[1]+cart.prices[2]+cart.prices[3]+cart.prices[4])
// console.log(total<50000)
// console.log(cart.cart.length>5)
// console.log(cart.cart.length)
var store={
    Storename:"SmartMart",
    products:["Rice","Milk","Sugar","oil"],
    prices:[60,30,45,150],
    stock:[20,15,10,8],
}
    console.log(store)

    store.products.push("bread")
    store.prices.push(40)
    store.stock.push(12)

    console.log(store.product)
    console.log(store.prices)
    console.log(store.stock)
    store.products.pop()
    store.prices.pop()
    store.stock.pop()
    store.products.push("Egg","Biscuits")
    store.prices.push(70,25)
store.stock.push(30,50)
console.log(store.Storename)
console.log(store.products)
var rice=store.prices[0]*store.stock[0]
console.log(rice)
var milk =store.prices[1]*store.stock[1]
console.log(milk)
var Sugar=store.prices[2]*store.stock[2]
console.log(Sugar)
var oil=store.prices[3]*store.stock[3]
console.log(oil)
var Egg=store.prices[4]*store.stock[4]
console.log(Egg)
var Biscuits=store.prices[5]*store.stock[5]
console.log(Biscuits)
console.log(store)
var total=rice+milk+Sugar+oil+Egg+Biscuits
console.log(total)
console.log(total>10000)
console.log(store.products.length>5) &&(store.products.rice>10)
console.log(store.products.length)



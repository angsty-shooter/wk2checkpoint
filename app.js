
let ducks = 0

let clickUp={
    bread: {
        price: 50,
        quantity: 0,
        multiplier: 1
    }
}

let autoUp={
    pond: {
        price: 100,
        quantity: 0,
        multiplier: 5
    }
}


function collectDucks(){
    ++ducks
    //ducks += clickUp.bread.multiplier
    //ducks += autoUp.pond.multiplier
    update()
}

function buyBread(){
    if (ducks >= clickUp.bread.price){
        ducks -= clickUp.bread.price
        ++clickUp.bread.quantity
        ++clickUp.bread.multiplier
        clickUp.bread.price += 50
        console.log(clickUp.bread.multiplier)
    }
    update()    
}

function buyPond(){
    if (ducks >= autoUp.pond.price){
        ducks -= autoUp.pond.price
        ++autoUp.pond.quantity
        ++autoUp.pond.multiplier
        autoUp.pond.price += 100
    }
    update()    
}

//function startInterval(){
//    collectionInterval = setInterval(collectAutoUp, 3000)
//}

function update(){
    document.getElementById("rubber").innerText = `${ducks}`
    document.getElementById("crumbs").innerText = `${clickUp.bread.quantity}`
    document.getElementById("breadBtn").innerText = `${clickUp.bread.price}`
    document.getElementById("liquid").innerText = `${autoUp.pond.quantity}`
    document.getElementById("pondBtn").innerText = `${autoUp.pond.price}`
}
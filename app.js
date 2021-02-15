
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

//Clicking the Duck
function collectDucks(){
    ++ducks
    multipleDucks()
    update()
}

//Adds ducks
function multipleDucks(){
    ducks += clickUp.bread.multiplier*clickUp.bread.quantity
}

function collectAutoUp(){
    console.log("got item")
    update()
    if(autoUp.pond.quantity >= 1){
        ducks += autoUp.pond.multiplier*autoUp.pond.quantity
    }
}

//Affects quantity and multiplier
function buyBread(){
    if (ducks >= clickUp.bread.price){
        ducks -= clickUp.bread.price
        ++clickUp.bread.quantity
        clickUp.bread.price += 50
    }
    update()    
}

function buyPond(){
    if (ducks >= autoUp.pond.price){
        ducks -= autoUp.pond.price
        ++autoUp.pond.quantity
        autoUp.pond.price += 100
    }
    update()    
}

function startInterval(){
    setInterval(collectAutoUp, 3000)
}
startInterval()

function update(){
    document.getElementById("rubber").innerText = `${ducks}`

    document.getElementById("crumbs").innerText = `${clickUp.bread.quantity}`
    document.getElementById("breadBtn").innerText = `${clickUp.bread.price}`
    document.getElementById("breadX").innerText = `${clickUp.bread.multiplier}`
    document.getElementById("liquid").innerText = `${autoUp.pond.quantity}`
    document.getElementById("pondBtn").innerText = `${autoUp.pond.price}`
    document.getElementById("pondX").innerText = `${autoUp.pond.multiplier}`
}
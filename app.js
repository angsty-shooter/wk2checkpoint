
let ducks = 0

let clickUp={
    bread: {
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    grapes: {
        price: 150,
        quantity: 0,
        multiplier: 10
    }
}

let autoUp={
    pond: {
        price: 100,
        quantity: 0,
        multiplier: 5
    },
    waddles: {
        price: 200,
        quantity: 0,
        multiplier: 15
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
    ducks += clickUp.grapes.multiplier*clickUp.grapes.quantity
}

function collectAutoUp(){
    console.log("adding ducks")
    update()
    if(autoUp.pond.quantity >= 1){
        ducks += autoUp.pond.multiplier*autoUp.pond.quantity
    }
    if(autoUp.waddles.quantity >= 1){
        ducks += autoUp.waddles.multiplier*autoUp.waddles.quantity
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

function buyGrapes(){
    if (ducks >= clickUp.grapes.price){
        ducks -= clickUp.grapes.price
        ++clickUp.grapes.quantity
        clickUp.grapes.price += 50
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

function buyWaddles(){
    if (ducks >= autoUp.waddles.price){
        ducks -= autoUp.waddles.price
        ++autoUp.waddles.quantity
        autoUp.waddles.price += 100
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
    
    document.getElementById("juice").innerText = `${clickUp.grapes.quantity}`
    document.getElementById("grapeBtn").innerText = `${clickUp.grapes.price}`
    document.getElementById("grapeX").innerText = `${clickUp.grapes.multiplier}`
    
    document.getElementById("slap").innerText = `${autoUp.waddles.quantity}`
    document.getElementById("waddleBtn").innerText = `${autoUp.waddles.price}`
    document.getElementById("waddleX").innerText = `${autoUp.waddles.multiplier}`
}
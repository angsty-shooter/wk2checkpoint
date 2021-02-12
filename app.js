
let ducks = 0

let clickUp={
    bread: {
        price: 100,
        quantity: 0,
        multiplier: 1
    }
}

let autoUp={
    pond: {
        price: 600,
        quantity: 0,
        multiplier: 10
    }
}


function collectDucks(){
    ++ducks
    console.log(ducks)
    update()
}

function startInterval(){
    collectionInterval = setInterval(collectAutoUp, 3000)
}

function update(){
    document.getElementById("rubber").innerText = `${ducks}`
}
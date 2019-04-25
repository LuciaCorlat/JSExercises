var myCar = new Object();
myCar.model = "Volkswagen Polo";
myCar.price = "1800";
myCar.owner = "Lucia";
myCar.description = "2001 VW Polo, white with tinted windows";

function car(x) {
    console.log(x.model + " costs " + x.price + " and is owned by " + x.owner)
}

car(myCar);

var carPark = [
    {
        model: "Volkswagen Polo",
        price: 1800,
        owner: "Lucia",
    },
    {
        model: "Dacia Logan",
        price: 1250,
        owner: "NotLucia",
    },
    {
        model: "Renault Megane",
        price: 1450,
        owner: "Still Not Lucia"
    }
];

var newCarPark = [];
function increasePrices(carPark, price) {
    var cars = carPark.length;
    for(i = 0; i < cars; i++ ) {
        newCarPark.push(carPark[i]);
        newCarPark[i].price = carPark[i].price + price;
    }
}

/* Should have used map */

increasePrices(carPark, 2000);


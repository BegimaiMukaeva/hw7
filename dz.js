class Transport {
    constructor(name, color, weight, length ) {
        this.name = name
        this.color = color
        this.weight = weight
        this.length = length
    }
    startEngine (msg){
        console.log(msg)
    }
}
class Car extends Transport{
    constructor(name, color, weight, length, model, engine, speed) {
        super(name, color, weight, length);
        this.model = model // модель
        this.engine = engine //двигатель
        this.speed = speed //скорость
    }
    startEngine(msg) {
        super.startEngine(msg);
    }
}

const car = new Car('Porsche','black','5,7тонн','11,5','Porsche Carrera GT','M 80','330 км/ч')
car.startEngine('Машина заводится через кнопку')
console.log(car)

class Plane extends Transport {
    constructor(name, length, weight, color, model, speed, height) {
        super(name, length, weight, color);
        this.model = model
        this.speed = speed
        this.height = height
    }
    startEngine(msg) {
        super.startEngine(msg);
    }
}

const plane = new Plane ("Eclipse", 10.20, "5 тонн", "white", "Eclipse 500", "685 км/ч", 3.35)
plane.startEngine("Самолет заводится.")
console.log(plane)


class Boat extends Transport {
    constructor(name,length, weight, color, speed, diving) {
        super(name, length, weight, color);
        this.speed = speed
        this.diving = diving
    }
    startEngine(msg) {
        super.startEngine(msg);
    }
}
const boat = new Boat ("941 Акула", "172,8 м", "23,3 м", "grey", "46,3 км/ч", "500м")
boat.startEngine('Лодка заводится через ключ.')
console.log(boat)

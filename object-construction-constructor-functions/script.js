function Car(type) {
    this.speed = 0;
    this.type = type;
    this.drive = function () {
        this.speed = 60;
    };
}

var bmw = new Car('BMW');
console.log('car type:', bmw.type);
console.log(bmw.speed);
bmw.drive();
console.log(bmw.speed);
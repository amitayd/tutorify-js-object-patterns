var car = new Object();
car.speed = 0;
car.drive = function () {
    this.speed = 60;
};


console.log("car speed:", car.speed);
console.log("driving...")
car.drive();
console.log("car speed:", car.speed);
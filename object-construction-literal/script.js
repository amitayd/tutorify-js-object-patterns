var car = {
    speed: 0,
    drive: function() {
        this.speed = 60;
    }
};

console.log("car speed:", car.speed);
console.log("driving...");
car.drive();
console.log("car speed:", car.speed);
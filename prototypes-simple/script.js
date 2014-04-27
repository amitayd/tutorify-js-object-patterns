function Car(maxSpeed) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
}

Car.prototype = {
  drive: function() {
      this.speed = this.maxSpeed;
  }
};

var bmw = new Car(160);
console.log('bmw speed:', bmw.speed);
bmw.drive();
console.log('bmw speed (after drive):', bmw.speed);

var susita = new Car(80);
console.log('susita speed:', susita.speed);
susita.drive();
console.log('susita speed (after drive):', susita.speed);
var car = {
    type: "Honda Civic",
    position: 1,
    speed: 10,
    move: function() {
        var prev = this.position
        this.position = this.position + 1
        console.log(this.type + " is moving from " + prev + " to " + this.position + this.speed)
    }
}

car.move();
car.move();
car.move();
car.move();
car.move();

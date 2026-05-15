class vehicle() {
constructor (model,brand,fueltype){
this.model = model;
this.brand = brand;
this.fueltype = fueltype;
}
}
class car extends vehicle(model,brand,fueltype,seating) {
    super(model,brand,fueltype);
    this.seating = seating;
}
get details(){
    console.log('${this.model} is a ${this.brand} car that runs on ${this.fueltype} and has seating capacity of ${this.seating}.');
}

const myCar = new car('Model S', 'Tesla', 'Electric', 5);
myCar.details;





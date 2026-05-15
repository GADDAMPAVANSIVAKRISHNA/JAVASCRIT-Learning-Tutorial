// In 2015 javascript had introduceed the classes voncept this classed is having different types of methods to perform differernt types of operations .
// and also this classes are having consturctor method which is used to initialize the object of the class and also we can have different types of methods in the class like static
// and also this classes are having the object also which is the instance of the class 


class calculator {
    constructor (num1,num2){
    this.num1=num1;
    this.num2=num2;
    }
    add(){
        return this.num1+this.num2;
    }
    subtract() {
        return this.num1-this.num2;

    }
    let calculator = new calculator(10,5);
    console.log(calculator.add());
    console.log(calculator.subtract());

}
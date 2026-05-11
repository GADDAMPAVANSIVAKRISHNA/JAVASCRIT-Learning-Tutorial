function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5));
console.log(multiply(5,3));

//in this when we assign the default values to the parameter also it will ovverridea nd take the newly declared arguments only .
// if not declared the default value will be taken.
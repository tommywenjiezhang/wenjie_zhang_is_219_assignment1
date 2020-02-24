
const MathOperations = require('./MathOperation');

class Calculator {
    Add(a, b) {
        return this.Result = MathOperations.sum(a, b);
    }
    Divide(a, b) {
        return this.Result = MathOperations.quotient(a, b);
    }
    Multiply(a, b) {
        return this.Result = MathOperations.product(a, b);
    }
    sumList(myarray) {
        return this.Result = MathOperations.sumList(myarray);
    }
    square(a){
        return this.Result = MathOperations.square(a)
    }
    squareRoot(a){
        return this.Result = MathOperations.squareRoot(a);
    }
}
module.exports = Calculator;
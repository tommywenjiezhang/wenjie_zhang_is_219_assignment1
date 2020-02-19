const sum = require('./sum');
const divide = require('./divide')
const multiply = require('./multiply')
const square  = require('./square')
const squareRoot = require('./squareRoot')
const Sanitization = require('./Sanitization')

// var a  = 2
// var b = 4
// console.log("a = 2, b=4")
// c = sum(a,b);
// console.log("The answer for sum is: " + c);
// c= divide(b,a)
// console.log("The answer for b/a divide is: " + c);
// c = multiply(a,b)
// console.log("The answer for multiply is: " + c);
// c=square(a)
// console.log("The answer for {a} square is: " + c);
// c=squareRoot(b)
// console.log("The answer for b squareRoot is: " + c);

let c = async() => {
    let d = await Sanitization.checkIfNumber(2)
    return d
}
c().then(data => console.log(data))

const  MathOperation = require('./MathOperation');

class StatisticsOperation{
    static mean(arr =[]){
        return MathOperation.sumList(arr) / arr.length;
    }

    static stdev(arr = []){
        let mean = mean(arr);
        let size = arr.length;
        let squareSumResult = arr.map(value 
                                => {
                return MathOperation.square(value - mean);
            }).reduce((acc,next) => {acc + next},0)
        let result = MathOperation.squareRoot(MathOperation.quotient(squareSumResult,size));
        return result;

    }
}
const  MathOperation = require('./MathOperation');
const  { jStat } = require('jstat');

class StatisticsOperation{
    static mean(arr =[]){
        return MathOperation.sumList(arr) / arr.length;
    }

    static stdev(arr){
        let mean = StatisticsOperation.mean(arr);
        let size = arr.length;
        let variance = arr.map((value)=> 
            {   
                if(typeof value === 'number'){
                    return MathOperation.square(value - mean);
                }
            }).filter(value=> value != NaN);
        let  squareSumResult = MathOperation.sumList(variance);
        let result = MathOperation.squareRoot(MathOperation.quotient(squareSumResult,size));
        return result;
    }

    static normPdf(xArr){
        return xArr.map((value) => {
            return jStat.normal.pdf(value,StatisticsOperation.mean(xArr),StatisticsOperation.stdev(xArr));
        })
    }
}

let number = StatisticsOperation.normPdf([7,9,12,13,14,15])
console.log(number)
module.exports = StatisticsOperation;
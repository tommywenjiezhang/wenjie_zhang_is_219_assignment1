const  MathOperation = require('./MathOperation');
const  { jStat } = require('jstat');

class StatisticsOperation{
    static mean(arr =[]){
        return MathOperation.sumList(arr) / arr.length;
    }
    
    static variance(arr){
        let mean = StatisticsOperation.mean(arr);

        let variance = arr.map((value)=>
        {
            if(typeof value === 'number'){
                return MathOperation.square(value - mean);
            }
        }).filter(value=> value != NaN);
        
        return variance;
    }
    static stdev(arr){
        let size = arr.length;
        let  varianceSumResult = MathOperation.sumList(StatisticsOperation.variance(arr));
        let result = MathOperation.squareRoot(MathOperation.quotient(varianceSumResult,size));
        return result;
    }
    static median(arr){
       return jStat.median(arr)
    }
    static normPdf(xArr){
        return xArr.map((value) => {
            return jStat.normal.pdf(value,StatisticsOperation.mean(xArr),StatisticsOperation.stdev(xArr));
        })
    }

    static zScore(x,arr){
        return (x - StatisticsOperation.mean(arr)) / StatisticsOperation.stdev(arr);
    }

}

let number = StatisticsOperation.median([7,9,12,13,14,15])
console.log(number)
module.exports = StatisticsOperation;
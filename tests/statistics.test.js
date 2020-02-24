const Stats= require('../calculation/StatisticsOperation');

test('Statistic Calculator Mean', () => {
    expect(Stats.mean([7,9,12,13,14,15])).toBeCloseTo(11.666666666667, 5);
});


test('Statistic Calculator stdev', () => {
    expect(Stats.stdev([7,9,12,13,14,15])).toBeCloseTo(2.808716591, 5);
});


test('Statistic Calculator normalPdf', () => {
    let sourceArr = [7,9,12,13,14,15];
    let testArr = Stats.normPdf(sourceArr);
    let resultArr = [0.03573739, 0.09052359,0.14103682,0.12688766,0.10056680,0.07021634]
    for(var i = 0; i < sourceArr.length; i++){
        expect(testArr[i]).toBeCloseTo(resultArr[i], 3);
    }
});

test('Statistic Calculator z-score', () => {
    let sourceArr = [7,9,12,13,14,15];
    let test = Stats.zScore(11, sourceArr);
    let result = -0.23735;
    expect(test).toBeCloseTo(result, 3);

});

test('Statistic Calculator median', () => {
    let sourceArr = [7,9,12,13,14,15];
    let test = Stats.median(sourceArr);
    let result = 12.5;
    expect(test).toBeCloseTo(result, 1);

});




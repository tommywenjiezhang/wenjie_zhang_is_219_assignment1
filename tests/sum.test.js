const sum = require('../calculation/sum');


describe('adds 1 + 2 to equal 3',()=>{
  test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
  });
})

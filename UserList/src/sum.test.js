function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  describe('test for sum function', () => {
    it('should return 3 when pass 1 and 2', () => {
      expect(sum(1, 2)).toEqual(3);
    });
    it('should return 10 when pass 5 and 5', () => {
      expect(sum(5, 5)).toEqual(10);
    });
  });
  
  describe('test for multiply function', () => {
    it('should return 4 when pass 1 and 4', () => {
      expect(multiply(1, 4)).toEqual(4);
    });
    it('should return 10 when pass 2 and 5', () => {
      expect(multiply(2, 5)).toEqual(10);
    });
  });
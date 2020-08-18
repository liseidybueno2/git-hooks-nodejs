const mult = require('../src/mult')

it('should return correct product', () => {
    const product = mult(2, 5)
    expect(product).toBe(10)
}) 
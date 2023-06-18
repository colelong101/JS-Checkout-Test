const { Product, CheckoutSystem } = require('./checkoutSystem');
const assert = require('assert');

describe('CheckoutSystem', () => {
  let checkoutSystem;

  beforeEach(() => {
    checkoutSystem = new CheckoutSystem();
    const apple = new Product('Apple', 50);
    checkoutSystem.addProduct(apple);
  });

  it('should charge 50 cents when scanning an apple', () => {
    checkoutSystem.scan('Apple');
    const total = checkoutSystem.getTotal();
    assert.strictEqual(total, 50);
  });

  it('should charge 150 cents when scanning 3 apples', () => {
    checkoutSystem.scan('Apple');
    checkoutSystem.scan('Apple');
    checkoutSystem.scan('Apple');
    const total = checkoutSystem.getTotal();
    assert.strictEqual(total, 150);
  });

  it('should throw an error when scanning an unknown product', () => {
    assert.throws(() => {
      checkoutSystem.scan('Banana');
    }, Error);
  });
});

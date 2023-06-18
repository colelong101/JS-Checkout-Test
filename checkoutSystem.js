class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class CheckoutSystem {
  constructor() {
    this.products = new Map();
    this.scannedItems = [];
  }

  addProduct(product) {
    this.products.set(product.name, product);
  }

  scan(itemName) {
    const product = this.products.get(itemName);
    if (product) {
      this.scannedItems.push(product);
    } else {
      throw new Error(`Product '${itemName}' not found.`);
    }
  }

  getTotal() {
    let total = 0;
    for (const item of this.scannedItems) {
      total += item.price;
    }
    return total;
  }
}

module.exports = {Product, CheckoutSystem}

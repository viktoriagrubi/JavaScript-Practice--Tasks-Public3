/*Napisz funkcję sumByCategory(products, category), która zwróci sumę cen
produktów w podanej kategorii. */

function sumByCategory(products, category) {
  return products
    .filter((product) => product.category === category)
    .reduce((sum, product) => sum + product.price, 0);
}

const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Shirt", price: 50, category: "clothing" },
  { name: "Pants", price: 70, category: "clothing" },
];

console.log(sumByCategory(products, "electronics"));
console.log(sumByCategory(products, "clothing"));

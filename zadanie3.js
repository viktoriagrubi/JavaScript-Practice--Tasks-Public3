/* Napisz funkcję itemsSummary(orders), która zwróci obiekt, gdzie kluczami są nazwy
produktów, a wartościami liczba ich wystąpień we wszystkich zamówieniach. */

function itemsSummary(orders) {}

const orders = [
  { id: 1, items: ["apple", "banana"], total: 10 },
  { id: 2, items: ["banana", "orange"], total: 12 },
  { id: 3, items: ["apple", "orange"], total: 15 },
];

console.log(itemsSummary(orders));

/* Napisz funkcję itemsSummary(orders), która zwróci obiekt, gdzie kluczami są nazwy
produktów, a wartościami liczba ich wystąpień we wszystkich zamówieniach. */

function itemsSummary(orders) {
  const summary = {};

  orders.forEach((order) => {
    order.items.forEach((item) => {
      if (summary[item]) {
        summary[item]++;
      } else {
        summary[item] = 1;
      }
    });
  });

  return summary;
}

const orders = [
  { id: 1, items: ["apple", "banana"], total: 10 },
  { id: 2, items: ["banana", "orange"], total: 12 },
  { id: 3, items: ["apple", "orange"], total: 15 },
];

console.log(itemsSummary(orders));

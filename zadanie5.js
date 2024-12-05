function mergeUserOrders(users, orders) {
  const sums = {};

  //sumowanie
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const userId = order.userId;
    if (!sums[userId]) {
      sums[userId] = 0;
    }
    sums[userId] += order.total;
  }

  //tworzenie nowej tablicy
  const result = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userId = user.id;
    result.push({
      name: user.name,
      totalOrders: sums[userId] || 0,
    });
  }

  return result;
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const orders = [
  { userId: 1, total: 50 },
  { userId: 2, total: 30 },
  { userId: 1, total: 20 },
  { userId: 3, total: 70 },
];

console.log(mergeUserOrders(users, orders));

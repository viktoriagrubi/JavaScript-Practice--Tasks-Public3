/* Napisz funkcję toggleActive(users, id), która przyjmuje tablicę użytkowników oraz
identyfikator użytkownika, a następnie zwraca nową tablicę, w której zmieniono status
active danego użytkownika. */

function toggleActive(users, id) {
  return users.map((user) => {
    if (user.id === id) {
      return { ...user, active: !user.active };
    }
    return user;
  });
}

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

console.log(toggleActive(users, 1));
console.log(toggleActive(users, 2));
console.log(toggleActive(users, 3));

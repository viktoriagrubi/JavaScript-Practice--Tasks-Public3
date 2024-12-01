/*Napisz funkcję groupByAge(users), która zwróci obiekt, gdzie kluczami są wieki, a
wartościami tablice imion użytkowników w danym wieku. */

function groupByAge(users) {
  return users.reduce((result, user) => {
    const { age, name } = user;
    if (!result[age]) {
      result[age] = [];
    }
    result[age].push(name);
    return result;
  }, {});
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 35 },
];

console.log(groupByAge(users));

const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

//Task 1
const incomeTransactions = transactions.filter(
  (transaction) => transaction[0] === "income"
);
console.log(incomeTransactions);

//Task 2
const expenseTransactions = transactions.filter(
  (transaction) => transaction[0] === "expense"
);

console.log(expenseTransactions);

//Task 3
const totalIncome = incomeTransactions.reduce(
  (total, transaction) => total + transaction[1],
  0
);
console.log(totalIncome);

//Task 4
const totalExpense = expenseTransactions.reduce(
  (total, transaction) => total + transaction[1],
  0
);
console.log(totalExpense);

//Task 5
const netTotal = totalIncome - totalExpense;
console.log(netTotal);

//task 6
const both = transactions.filter((transaction) => transaction[1] >= 500);
console.log(both);

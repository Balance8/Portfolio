/*
 User have a credit line with 35% APR.
 
 Scenario 1:

  They draw $500 on day one. They keep the money drawn for 30 days. They should owe $500 * 0.35 / 365 * 30 = 14.38$ worth of interest on day 30. Total payoff amount would be $514.38
*/

var input = {
  start_date: new Date("2018-01-01"),
  end_date: new Date("2018-01-30"),
  interest_rate: 0.35,
  starting_balance: 0,
  starting_interest: 0,
  transactions: [
    {
      type: "withdraw",
      amount_cents: 50000,
      date: new Date("2018-01-01")
    }
  ]
};

const oneDay = 1000 * 60 * 60 * 24;
console.log(oneDay);

function calculate_interest(obj) {
  let start = Math.abs(obj.end_date - obj.start_date) / oneDay + 1;
  console.log(start);
  return (
    (((obj.transactions[0].amount_cents / 100) * obj.interest_rate) / 365) *
    start
  ).toFixed(2);
}

// console.log("Solution 1");
// console.log(calculate_interest(input));

/*
 Scenario 2:

	They draw $500 on day one. They pay back $200 on day 15 and then draws another 100$ on day 25. Their total owed interest on day 30 should be 500 * 0.35 / 365 * 15 + 300 * 0.35 / 365 * 10 + 400 * 0.35 / 365 * 5 which is 11.99. Total payment should be $411.99.
*/

// Stub the data
// Run the code

var input2 = {
  start_date: new Date("2018-01-01"),
  end_date: new Date("2018-01-30"),
  interest_rate: 0.35,
  starting_balance: 0,
  starting_interest: 0,
  transactions: [
    {
      type: "withdraw",
      amount_cents: 50000,
      date: new Date("2018-01-01")
    },
    {
      type: "pay",
      amount_cents: 20000,
      date: new Date("2018-01-15")
    },
    {
      type: "withdraw",
      amount_cents: 10000,
      date: new Date("2018-01-25")
    }
  ]
};
function calculate_interest2(obj) {
  for (let i = 0; i < obj.transactions.length; i++) {
    let tDate =
      i < obj.transactions.length - 1
        ? i === 0
          ? Math.abs(obj.transactions[i + 1].date - obj.transactions[i].date) /
              oneDay +
            1
          : Math.abs(obj.transactions[i + 1].date - obj.transactions[i].date) /
            oneDay
        : Math.abs(
            obj.end_date - obj.transactions[obj.transactions.length - 1].date
          ) / oneDay;
    console.log(tDate);
    obj.transactions[i].type === "withdraw"
      ? (obj.starting_balance += obj.transactions[i].amount_cents)
      : (obj.starting_balance += -obj.transactions[i].amount_cents);
    obj.starting_interest +=
      (((obj.starting_balance * obj.interest_rate) / 365) * tDate) / 100;
  }
  return obj.starting_interest.toFixed(2);
}

console.log("Solution 2");
console.log(calculate_interest2(input2));

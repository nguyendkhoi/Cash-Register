let price = 4.56;
cid = [ 
  [ 'PENNY', 0.09 ],
  [ 'NICKEL', 0.05 ],
  [ 'DIME', 0.6 ],
  [ 'QUARTER', 0.75 ],
  [ 'ONE', 0 ],
  [ 'FIVE', 5 ],
  [ 'TEN', 0 ],
  [ 'TWENTY', 0 ],
  [ 'ONE HUNDRED', 0 ] ];
price = 73.51;
const currencies = [
  [100, "ONE HUNDRED"],
  [20, "TWENTY"],
  [10, "TEN"],
  [5, "FIVE"],
  [1, "ONE"],
  [0.25, "QUARTER"],
  [0.1, "DIME"],
  [0.05, "NICKEL"],
  [0.01, "PENNY"]
];
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const totalPrice = document.getElementsByClassName("screen")[0];
totalPrice.innerHTML = `<p>Price total: $${price}<p>`

const chargeInDrawer = document.getElementsByClassName("body")[0]
chargeInDrawer.innerHTML = `<p>Change in drawer:</p>`;
for (let [key, value] of cid) {
  chargeInDrawer.innerHTML += `<p>${key}: $${value}</p>`
}


const changer = (cash) => {
  let cidCopy = cid.map(arr => [...arr]);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cash === price) {
    changeDue.innerHTML = "No change due - customer paid with exact cash"
    return;
  }

  let cashValue = cash - price;
  let change = {};

  for (let [key, value] of currencies) {
    key = Number(key);
    while (key <= cashValue && cidCopy.find(item => item[0] === value)[1] > 0 && cashValue > 0) {
      cashValue -= key;
      cashValue = Math.round(cashValue * 100) / 100;
      cidCopy.find(item => item[0] === value)[1] = Math.round((cidCopy.find(item => item[0] === value)[1] - key) * 100) / 100;
      change[value] = (change[value] ?? 0) + key;
    }
  }

  if (statusCash(cidCopy, cashValue)) {
    Object.entries(change).forEach(([key, value]) => {
      changeDue.innerHTML += `<p>${key}: $${value}</p>`
    })
  };
}

function statusCash(cid, cashValue) {
  if (cashValue > 0) {
    changeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
    return false;
  }
  let isDrawNotEmpty = false
  for (let item of cid) {
    if (item[1] > 0) {
      isDrawNotEmpty = true;
    }
  }
  if (isDrawNotEmpty) {
    changeDue.innerHTML = "<p>Status: OPEN</p>";
    return true;
  } else {
    changeDue.innerHTML = "<p>Status: CLOSED</p>";
    return true;
  }
}

purchaseBtn.addEventListener("click", () => {
  const cash = Number(document.getElementById("cash").value); 
  changer(cash); 
});
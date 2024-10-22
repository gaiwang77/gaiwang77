let foodPay = parseInt(prompt("這餐多少錢"));
let foodPercent = parseInt(prompt("小費幾%")) / 100;
let foodTips = foodPay * foodPercent;
let foodTotal = foodPay + foodTips;
console.log("餐點費用:" + foodPay);
console.log("小費:" + foodTips);
console.log("總價格:" + foodTotal);


var candySalesDay = {};
var sale = {};

function reduceFun(sale, candy, index) {
  switch (index) {
    case 0:
      sale.item = candy;
      break;
    case 1:
      sale.price = candy;
      break;
    case 2:
      sale.quantity = candy;
      break;
      default:
      return;
  }
  return sale;
}

function mapFunc(candy, index) {
  switch (index) {
    case 0:
      sale.item = candy;
      break;
    case 1:
      sale.price = Number(candy);
      break;
    case 2:
      sale.quantity = candy;
      break;
      default:
      return;
  }
  return sale;
}


// Test 1
function candySalesToObject(arr) {
  var candySalesToObject = arr.reduce (reduceFun,{});
  return candySalesToObject;
}

// Test 2
function reducePushFun(item, candy) {
  candySalesDay.sales.push(candy.reduce(reduceFun, {}));
}

function salesDayToObject(date, obj) {
  candySalesDay.date = date;
  candySalesDay.sales = [];
  obj[date].reduce(reducePushFun, {});
  return candySalesDay;
}

// Test 3
function allSalesToArray(object) {
  var newSalesArray = [];
  var saleDates = Object.keys(object);
  saleDates.map(mapFun);

  function mapFun(candy, index) {
    sale = {
      date: saleDates[index],
      sales: []
    };
    newSalesArray.push(sale);
  };
  newSalesArray.map(function(currentValue, index) {
    object[saleDates[index]].map(function(newValue) {
      sale = {};
      newValue.map(mapFunc);
      currentValue.sales.push(sale);
    });
  });
  return newSalesArray;
}

module.exports = {
  candySalesToObject,
  salesDayToObject,
  allSalesToArray
};

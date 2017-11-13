
var candySalesDay = {};
var sale = {};

function reduceFun(sale, thing, index) {
  switch (index) {
    case 0:
      sale.item = thing;
      break;
    case 1:
      sale.price = thing;
      break;
    case 2:
      sale.quantity = thing;
      break;
    default:
     return;
  }
  return sale;
}

function mapFunc(thing, index) {
  switch (index) {
    case 0:
      sale.item = thing;
      break;
    case 1:
      sale.price = thing;
      break;
    case 2:
      sale.quantity = thing;
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
function reducePushFun(item, thing) {
  candySalesDay.sales.push(thing.reduce(reduceFun, {}));
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

  function mapFun(thing, index) {
    sale = {
      date: saleDates[index],
      sales: []
    };
    newSalesArray.push(sale);
  };


  for (var j = 0; j < newSalesArray.length; j++) {
    for (var k = 0; k < object[saleDates[j]].length; k++) {
      sale = {};
      object[saleDates[j]][k].map(mapFunc);
      newSalesArray[j].sales.push(sale)
    }
  }
  return newSalesArray;
}

module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};

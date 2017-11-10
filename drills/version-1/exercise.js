

function candySalesToObject(arr) {
   var candySalesToObject = arr.reduce (test,{});
function test(sale, thing, index) {
  switch (index) {
    case 0:
      sale.item = thing;
      break;
    case 1:
      sale.price = thing;
    case 2:
      sale.quantity = thing;
      break;
    default:
     return;
  }
  return sale;
}
return candySalesToObject;
}

// Test 2

var candySalesOldObject =
{
    "2015-01-06": [
        ["Dark Chocolate Crunchies", "4.39", 1],
        ["Mint Wafers", "1.19", 3]
    ]
}

function salesDayToObject(date, obj) {
  var candySalesDay = {};
  candySalesDay.date = date;
  candySalesDay.sales = [];

  for (var i = 0; i < obj[date].length; i++) {
     candySalesDay.sales.push(obj[date][i].reduce(reduceFun, {}));
     }

  function reduceFun(sale, thing, index) {
    switch (index) {
      case 0:
        sale.item = thing;
        break;
      case 1:
        sale.price = thing;
      case 2:
        sale.quantity = thing;
        break;
      default:
       return;
    }
    return sale;
  }
  return candySalesDay;
}

console.log(salesDayToObject("2015-01-06", candySalesOldObject));


function allSalesToArray(object) {
  var newSalesArray = [];
  var saleDates = Object.keys(object);
  var tempObject = {};
  for (var i = 0; i < saleDates.length; i++) {
    tempObject = {
      date: saleDates[i],
      sales: []
    };
    newSalesArray.push(tempObject);
  }
  for (var j = 0; j < newSalesArray.length; j++) {
    for (var k = 0; k < object[saleDates[j]].length; k++) {
      tempObject = {};
      object[saleDates[j]][k].map(function(thing, index) {
        switch (index) {
          case 0:
            tempObject.item = thing;
            break;
          case 1:
            tempObject.price = thing;
            break;
          case 2:
            tempObject.quantity = thing;
            break;
          default:
            return tempObj;
        }
      });
      newSalesArray[j].sales.push(tempObject)
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

// Bryan's Test #1
function getTotalItemSales(sales, id) {
  return sales.reduce((sum, item) => {
    if (item.itemId === id) {
      sum += item.quantity;
    }
    return sum;
  }, 0);
}

// Bryan's Test #2
function addTotalSalesToItems(sales, items) {
  return items.map(data => {
    data.quantity = getTotalItemSales(sales, data.id);
    return data;
  });
}

// Bryan's Test #3
function addTotalValueToItems(sales, items) {
  return items.map(data => {
    data.quantity = getTotalItemSales(sales, data.id);
    return data;
  }).map(data => {
    data.totalValue = ((data.quantity) * (data.price)).toFixed(2);
    return data;
  });
}

module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}

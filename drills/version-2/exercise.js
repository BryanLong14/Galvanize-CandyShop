function getItemById(items, id) {
  return items.filter(data => data.id === id)[0];

  }

function buildTransactions(sales, items) {
  return sales.map(data => {
      return Object.assign(data, getItemById(items, data.itemId));
    }).map(data => {
      delete data.id;
      return data;
    });
}

function getTransactionsByItemDescription(items, description) {
  return items.filter(data => data.description === description);
};

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}

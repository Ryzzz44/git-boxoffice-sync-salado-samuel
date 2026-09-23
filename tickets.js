function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let total = quantity * basePrice;
  total = total * 1.50;
  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };

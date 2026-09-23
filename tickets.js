function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let total = quantity * basePrice;
  total = total * 1.50;
  total = total - 10;
  if (quantity >= 5) {
    total = total * 0.90;
  }
  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };
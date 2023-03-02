export function calcDiscountedPrice(price, discount) {
  if (!discount) return price;

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return finalPrice;
}

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-EN", {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(price: number) {
  return CURRENCY_FORMATTER.format(price);
}

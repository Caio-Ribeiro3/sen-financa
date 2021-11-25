export function getRandomTimer() {
  return 250 + Math.random() * 5 * 125;
}

export function formatFinanceValue(value = 0) {
  return `R$ ${value}`;
}

export function formatDate(value) {
  return new Date(value).toLocaleString();
}

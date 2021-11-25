import { financeTypes } from "./services/contants";

export const handleFinanceBalance = (
  data,
  { totalEntries = 0, totalExpenditure = 0, balance = 0 } = {}
) => {
  if (!Array.isArray(data)) return {};
  return data.reduce(
    (previousValue, currentValue) => {
      const value = (currentValue.remove ? -1 : 1) * currentValue.value;
      if (currentValue.type === financeTypes[0]) {
        previousValue.totalEntries += value;
        previousValue.balance += value;
      } else {
        previousValue.totalExpenditure += value;
        previousValue.balance -= value;
      }
      return previousValue;
    },
    { totalEntries, totalExpenditure, balance }
  );
};

export function getBalanceValues(values) {
  const keys = [...financeTypes, "Total"];
  return keys.reduce((previousValue, currentValue, currentIndex) => {
    previousValue.push({ label: currentValue, value: values[currentIndex] });
    return previousValue;
  }, []);
}

export function createURLString(URLObject) {
  return new URLSearchParams(
    Object.entries(URLObject).reduce((previousValue, [key, value]) => {
      if (value !== undefined) {
        previousValue[key] = value;
      }
      return previousValue;
    }, {})
  ).toString();
}

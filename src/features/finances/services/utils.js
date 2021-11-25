import { financeTypes } from "./contants";

export function isValidFinanceValue({ value }) {
  return typeof value === "number" && value >= 0;
}

export function isValidFinanceType({ type }) {
  return financeTypes.includes(type);
}

export function isValidFinanceTitle({ title }) {
  return typeof title === "string" && title;
}

export function isValidFinanceCategory({ category }) {
  return typeof category === "string" && category;
}

export function isValidFinanceDateRegister({ dt_register }) {
  return typeof dt_register === "number" && !isNaN(new Date(dt_register));
}

export function isvalidFinanceId({ id }) {
  return typeof id === "number";
}

export function parseURLParams({ params }) {
  return JSON.parse(
    '{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );
}

export const likeFilter =
  ({ value, key }) =>
  (valueToCompare) => {
    return valueToCompare[key]?.includes?.(value);
  };

export const equalFilter =
  ({ value, key }) =>
  (valueToCompare) =>
    valueToCompare[key] === value;

export const dateFilter =
  ({ value, key }) =>
  (valueToCompare) => {
    const dateToCompare = new Date(valueToCompare[key]);
    const date = new Date(value);
    return (
      dateToCompare.getFullYear() === date.getFullYear() &&
      dateToCompare.getMonth() === date.getMonth() &&
      dateToCompare.getDate() === date.getDate()
    );
  };

export const numberSanitizer = (number) => Number(number);

export const fields = {
  id: {
    isValidInput: isvalidFinanceId,
  },
  title: {
    isValidInput: isValidFinanceTitle,
    filterLogic: likeFilter,
  },
  type: {
    isValidInput: isValidFinanceType,
    filterLogic: likeFilter,
  },
  category: {
    isValidInput: isValidFinanceCategory,
    filterLogic: likeFilter,
  },
  value: {
    isValidInput: isValidFinanceValue,
    filterLogic: equalFilter,
    sanitize: numberSanitizer,
  },
  dt_register: {
    isValidInput: isValidFinanceDateRegister,
    filterLogic: dateFilter,
    sanitize: numberSanitizer,
  },
  checkFields: function (fields) {
    return !Object.entries(fields)
      .reduce((previousValue, [key, value]) => {
        previousValue.push(this[key].isValidInput({ [key]: value }));
        return previousValue;
      }, [])
      .filter((bool) => !bool).length;
  },
  updateFields: function (fields, registerToUpdate) {
    console.log({ fields, registerToUpdate });
    const updatedRegister = { ...registerToUpdate };
    Object.entries(fields).forEach(([key, value]) => {
      registerToUpdate[key] = this[key].isValidInput({ [key]: value })
        ? value
        : registerToUpdate[key];
    });
    return updatedRegister;
  },
};

export const filter = (array = [], filters) => {
  const filterCallback = (valueToCompare) => {
    return !Object.entries(filters)
      .reduce((previousValue, [key, value]) => {
        previousValue.push(
          fields[key].filterLogic({
            value: fields[key].sanitize ? fields[key].sanitize(value) : value,
            key,
          })(valueToCompare)
        );
        return previousValue;
      }, [])
      .filter((bool) => !bool).length;
  };

  return array.filter(filterCallback);
};

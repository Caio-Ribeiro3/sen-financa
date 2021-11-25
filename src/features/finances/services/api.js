import { getRandomTimer } from "../../../utils/utils";
import { fields, filter, parseURLParams } from "./utils";

export async function listAllFinanceRegisters({ params }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rawArray = JSON.parse(localStorage.getItem("finances")) ?? [];
      if (params) {
        const parsedParams = parseURLParams({ params });
        resolve(filter(rawArray, parsedParams));
        return;
      }
      resolve(rawArray);
    }, getRandomTimer());
  });
}

export async function createFinanceRegister({ title, type, category, value }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fields.checkFields({ title, type, category, value })) {
        let indexTracker = JSON.parse(
          localStorage.getItem("financesIndexTracker")
        );
        if (indexTracker === null) indexTracker = 0;
        const registers = JSON.parse(localStorage.getItem("finances")) ?? [];
        const newRegister = {
          title,
          type,
          category,
          value,
          dt_register: Date.now(),
          id: indexTracker,
        };
        registers.unshift(newRegister);
        localStorage.setItem("finances", JSON.stringify(registers));
        localStorage.setItem(
          "financesIndexTracker",
          JSON.stringify(indexTracker + 1)
        );
        resolve(newRegister);
      } else {
        reject("Invalid inputs");
        return;
      }
    }, getRandomTimer());
  });
}

export async function updateFinanceRegister({
  id,
  title,
  type,
  category,
  value,
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fields.id.isValidInput({ id })) {
        const registers = JSON.parse(localStorage.getItem("finances")) ?? [];
        const registerToUpdateIndex = registers.findIndex(
          (register) => register.id === id
        );
        if (registerToUpdateIndex === -1) {
          reject("No register with this id");
          return;
        }
        const registerToUpdate = registers[registerToUpdateIndex];
        registers[registerToUpdateIndex] = fields.updateFields(
          {
            title,
            type,
            category,
            value,
          },
          registerToUpdate
        );
        localStorage.setItem("finances", JSON.stringify(registers));
        resolve(registerToUpdate);
      } else {
        reject("Invalid id");
        return;
      }
    }, getRandomTimer());
  });
}

export async function removeFinanceRegister({ id }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fields.id.isValidInput({ id })) {
        const registers = JSON.parse(localStorage.getItem("finances")) ?? [];
        const registerToRemoveIndex = registers.findIndex(
          (register) => register.id === id
        );
        if (registerToRemoveIndex === -1) {
          reject("No register with this id");
          return;
        }
        localStorage.setItem(
          "finances",
          JSON.stringify([
            ...registers.slice(0, registerToRemoveIndex),
            ...registers.slice(registerToRemoveIndex + 1),
          ])
        );
        resolve(true);
      } else {
        reject("Invalid id");
        return;
      }
    }, getRandomTimer());
  });
}

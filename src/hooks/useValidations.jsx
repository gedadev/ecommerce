export default function useValidations() {
  const validateNumber = (num) => {
    if (!num) {
      return { message: "Enter your card number", input: "number" };
    } else if (num.length < 15) {
      return { message: "Enter a valid card number", input: "number" };
    } else {
      return { message: "", input: "" };
    }
  };

  const validateDate = (date) => {
    if (!date) {
      return { message: "Enter card's expiration date", input: "expiration" };
    } else {
      return { message: "", input: "" };
    }
  };

  const validateName = (name) => {
    if (!name) {
      return { message: "Enter your name", input: "name" };
    } else {
      return { message: "", input: "" };
    }
  };

  return { validateNumber, validateDate, validateName };
}

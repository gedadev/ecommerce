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
    const month = date.substring(0, 2);
    const year = date.substring(2, 4);

    const isExpired = () => {
      if (date.length === 4) {
        const dateObj = new Date(`20${year}`, month - 1).getTime();

        if (dateObj < Date.now()) return true;
      }
      return false;
    };

    if (!date) {
      return { message: "Enter card's expiration date", input: "expiration" };
    } else if (String(month) > 12) {
      return { message: "Invalid date", input: "expiration" };
    } else if (isExpired()) {
      return { message: "Card is expired", input: "expiration" };
    } else {
      return { message: "", input: "" };
    }
  };

  const validateName = (name) => {
    if (!name) {
      return { message: "Enter your name", input: "name" };
    } else if (name.split(" ").length === 1) {
      return { message: "Enter your full name", input: "name" };
    } else {
      return { message: "", input: "" };
    }
  };

  return { validateNumber, validateDate, validateName };
}

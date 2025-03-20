import { useState } from "react";

export default function useValidations() {
  const [error, setError] = useState(null);

  const validateNumber = (num) => {
    if (!num) {
      setError({ message: "Enter your card number", input: "number" });
      return false;
    } else if (num.length < 15) {
      setError({ message: "Enter a valid card number", input: "number" });
      return false;
    } else {
      setError(null);
      return true;
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
      setError({
        message: "Enter card's expiration date",
        input: "expiration",
      });
      return false;
    } else if (String(month) > 12 || date.length < 4) {
      setError({ message: "Invalid date", input: "expiration" });
      return false;
    } else if (isExpired()) {
      setError({ message: "Card is expired", input: "expiration" });
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const validateName = (name) => {
    if (!name) {
      setError({ message: "Enter your name", input: "name" });
      return false;
    } else if (name.split(" ").length === 1) {
      setError({ message: "Enter your full name", input: "name" });
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return { validateNumber, validateDate, validateName, error };
}

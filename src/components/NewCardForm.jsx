import { useEffect, useRef, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { MdOutlineAddCard } from "react-icons/md";
import { formatText } from "../utils/main";
import useValidations from "../hooks/useValidations";

export function NewCardForm({ toggleForm }) {
  const { validateNumber, validateDate, validateName, error } =
    useValidations();
  const toggleRef = useRef(null);
  const [validForm, setValidForm] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiration: "",
  });
  const [validData, setValidData] = useState({
    name: false,
    number: false,
    expiration: false,
  });

  useEffect(() => {
    const isValid = Object.values(validData).reduce(
      (valid, current) => valid && current,
      true
    );

    setValidForm(isValid);
  }, [validData]);

  useEffect(() => {
    toggleRef.current?.click();
  }, []);

  const toggleType = (e) => {
    const { target } = e;
    if (!target.matches("input")) return;

    const container = target.parentNode;
    const slider = container.lastChild;

    if (target.id === "debit") {
      slider.style.transform = "translateX(100%)";
    }
    if (target.id === "credit") {
      slider.style.transform = "translateX(0)";
    }

    const currentLabel = [...container.children].find(
      (element) => element.htmlFor && element.htmlFor === target.id
    );
    const oppositeLabel = [...container.children].find(
      (element) => element.htmlFor && element.htmlFor !== target.id
    );
    if (currentLabel && oppositeLabel) {
      currentLabel.style.opacity = "1";
      oppositeLabel.style.opacity = "0.5";
    }
  };

  const handleNewCard = (e) => {
    e.preventDefault();
  };

  const handleValues = (e) => {
    const { id, value } = e.target;

    if (id === "number") {
      const cardNumber = value.split(" ").join("");
      if (cardNumber.length > 16 || !/^\d*$/.test(cardNumber)) return;

      const validNumber = validateNumber(cardNumber);
      setValidData({ ...validData, number: validNumber });

      const formatted = cardNumber ? cardNumber.match(/.{1,4}/g).join(" ") : "";
      setCardData({ ...cardData, number: formatted });
    }

    if (id === "expiration") {
      const expirationDate = value.split("/").join("");
      if (expirationDate.length > 4 || !/^\d*$/.test(expirationDate)) return;

      const validExpiration = validateDate(expirationDate);
      setValidData({ ...validData, expiration: validExpiration });

      const formatted = expirationDate
        ? expirationDate.match(/.{1,2}/g).join("/")
        : "";
      setCardData({ ...cardData, expiration: formatted });
    }

    if (id === "name") {
      const formattedName = value.toUpperCase();
      if (!/^[A-Z Ñ]*$/.test(formattedName)) return;

      const validName = validateName(formattedName);
      setValidData({ ...validData, name: validName });

      setCardData({ ...cardData, name: formattedName });
    }
  };

  return (
    <form className="new-card-form" onSubmit={handleNewCard}>
      <div onClick={toggleType} className="card-type-toggle">
        <label htmlFor="credit" ref={toggleRef}>
          Credit
        </label>
        <input type="radio" name="type" id="credit" defaultChecked />
        <label htmlFor="debit">Debit</label>
        <input type="radio" name="type" id="debit" />
        <span className="toggle-slider"></span>
      </div>
      {Object.entries(cardData).map(([name, value], i) => (
        <FormInput
          key={i}
          name={name}
          value={value}
          handleValues={handleValues}
          error={error}
        />
      ))}
      <div className="form-buttons">
        <button onClick={toggleForm} type="button">
          Cancel <FcCancel />
        </button>
        <button className="add-card-button" disabled={!validForm}>
          Add Card <MdOutlineAddCard />
        </button>
      </div>
    </form>
  );
}

function FormInput({ name, value, handleValues, error }) {
  return (
    <div>
      <label htmlFor={name}>* {formatText(name)}:</label>
      <input type="text" id={name} value={value} onChange={handleValues} />
      {error && error["input"] === name && (
        <span className="error-msg">{error["message"]}</span>
      )}
    </div>
  );
}

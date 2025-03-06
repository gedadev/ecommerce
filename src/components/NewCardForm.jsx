import { useEffect, useRef, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { MdOutlineAddCard } from "react-icons/md";
import { formatText } from "../utils/main";

export function NewCardForm({ toggleForm }) {
  const toggleRef = useRef(null);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiration: "",
  });

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

    setCardData({ ...cardData, [id]: value });
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
        />
      ))}
      <div className="form-buttons">
        <button onClick={toggleForm} type="button">
          Cancel <FcCancel />
        </button>
        <button className="add-card-button">
          Add Card <MdOutlineAddCard />
        </button>
      </div>
    </form>
  );
}

function FormInput({ name, value, handleValues }) {
  return (
    <div>
      <label htmlFor={name}>* {formatText(name)}:</label>
      <input type="text" id={name} value={value} onChange={handleValues} />
    </div>
  );
}

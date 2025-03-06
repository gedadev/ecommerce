import { useEffect, useRef } from "react";
import { FcCancel } from "react-icons/fc";
import { MdOutlineAddCard } from "react-icons/md";

export function NewCardForm({ toggleForm }) {
  const toggleRef = useRef(null);

  useEffect(() => {
    toggleRef.current?.click();
    console.log(toggleRef.current);
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
      <div>
        <label htmlFor="name">* Name:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="number">* Number:</label>
        <input type="text" id="number" />
      </div>
      <div>
        <label htmlFor="expiration">* Expiration:</label>
        <input type="text" id="expiration" />
      </div>
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

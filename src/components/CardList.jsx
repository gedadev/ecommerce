import { useEffect, useRef, useState } from "react";
import useCustomer from "../hooks/useCustomer";
import { formatValue } from "../utils/main";
import { IoSettings } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddCard } from "react-icons/md";
import { FcCancel } from "react-icons/fc";

export function CardList({ payment, selectCard, selectedCard }) {
  const { selectProviderLogo, hideCardNumber } = useCustomer();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(false);

    if (
      hideCardNumber(payment.number).ending ===
      hideCardNumber(selectedCard.number).ending
    ) {
      setIsSelected(true);
    }
  }, [payment, selectedCard, hideCardNumber]);

  return (
    <div className={`card-item ${isSelected ? "selected" : ""}`}>
      <Flag payment={payment} />
      <div className="payment-logo">
        {selectProviderLogo(formatValue(payment.provider))}
      </div>
      <div onClick={() => selectCard(payment)} className="card-info">
        <p>Ending: {hideCardNumber(payment.number).ending}</p>
        <p>
          {payment.bank} {payment.type}
        </p>
      </div>
    </div>
  );
}

export function NewCard({ toggleForm }) {
  return (
    <div className="add-card" onClick={toggleForm}>
      <button>
        Add card <MdOutlineAddCard />
      </button>
    </div>
  );
}

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

  return (
    <form className="new-card-form">
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

function Flag({ payment }) {
  const [activeOptions, setActiveOptions] = useState(false);

  return (
    <div className="flag">
      {payment.default ? (
        <span>Default</span>
      ) : (
        <>
          <IoSettings
            className="card-settings"
            onClick={() => setActiveOptions(!activeOptions)}
          />
          <div
            className="options-menu"
            style={{ opacity: `${activeOptions ? "1" : "0"}` }}
          >
            <ul>
              <li className="delete-card">
                Delete <FaRegTrashAlt />
              </li>
              {!payment.default && <li>Make Default</li>}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

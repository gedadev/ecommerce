import { useEffect, useState } from "react";
import useCustomer from "../hooks/useCustomer";
import { IoSettings } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatValue } from "../utils/main";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineAddCard } from "react-icons/md";

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

export function NewCard() {
  return (
    <div className="card-item">
      <div className="payment-logo">
        <CiCreditCard1 />
      </div>
      <button>
        Add card <MdOutlineAddCard />
      </button>
    </div>
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

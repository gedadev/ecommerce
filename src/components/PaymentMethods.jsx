import { BiLogoMastercard as Mastercard } from "react-icons/bi";
import { BiLogoVisa as Visa } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import useCustomer from "../hooks/useCustomer";
import { formatValue } from "../utils/main";
import { useEffect, useState } from "react";

export function PaymentMethods() {
  const { paymentMethods } = useCustomer();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (!paymentMethods) return;

    setSelectedCard(paymentMethods.find((card) => card.default));
  }, [paymentMethods]);

  const selectProviderLogo = (provider) => {
    switch (provider) {
      case "visa":
        return <Visa />;
      case "mastercard":
        return <Mastercard />;
      default:
        return <CiCreditCard1 />;
    }
  };

  const hideNumber = (number) => {
    const ending = number.slice(-4);
    const hidden = "•".repeat(12).concat(ending);
    const formattedHidden = hidden.match(/.{1,4}/g).join(" ");

    return { formattedHidden, ending };
  };

  const selectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <section className="profile-payments">
      {paymentMethods && selectedCard && (
        <>
          <div className="card">
            <div className="bank">
              <span>{selectedCard.bank}</span>
            </div>
            <div className="owner-data">
              <span>{hideNumber(selectedCard.number).formattedHidden}</span>
              <span>{selectedCard.name}</span>
            </div>
            <div className="provider-info">
              <span>{selectedCard.type}</span>
              <span className="provider-logo">
                {selectProviderLogo(formatValue(selectedCard.provider))}
              </span>
            </div>
          </div>
          <div className="card-list">
            {paymentMethods.map((payment) => (
              <CardList
                key={payment.id}
                payment={payment}
                selectProviderLogo={selectProviderLogo}
                hideNumber={hideNumber}
                selectCard={selectCard}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function CardList({ payment, selectProviderLogo, hideNumber, selectCard }) {
  return (
    <div className="card-item" onClick={() => selectCard(payment)}>
      <div className="payment-logo">
        {selectProviderLogo(formatValue(payment.provider))}
      </div>
      <div>
        <p>Ending: {hideNumber(payment.number).ending}</p>
        <p>
          {payment.bank} {payment.type}
        </p>
      </div>
    </div>
  );
}

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

  const selectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <section className="profile-payments">
      {paymentMethods && selectedCard && (
        <>
          <SelectedCard selectedCard={selectedCard} />
          <div className="card-list">
            {paymentMethods.map((payment) => (
              <CardList
                key={payment.id}
                payment={payment}
                selectCard={selectCard}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function CardList({ payment, selectCard }) {
  const { selectProviderLogo, hideCardNumber } = useCustomer();

  return (
    <div className="card-item" onClick={() => selectCard(payment)}>
      <div className="payment-logo">
        {selectProviderLogo(formatValue(payment.provider))}
      </div>
      <div>
        <p>Ending: {hideCardNumber(payment.number).ending}</p>
        <p>
          {payment.bank} {payment.type}
        </p>
      </div>
    </div>
  );
}

function SelectedCard({ selectedCard }) {
  const { selectProviderLogo, hideCardNumber } = useCustomer();

  return (
    <div className={`card ${formatValue(selectedCard.provider)}`}>
      <div className="bank">
        <span>{selectedCard.bank}</span>
      </div>
      <div className="owner-data">
        <span>{hideCardNumber(selectedCard.number).formattedHidden}</span>
        <span>{selectedCard.name}</span>
      </div>
      <div className="provider-info">
        <span>{selectedCard.type}</span>
        <span className="provider-logo">
          {selectProviderLogo(formatValue(selectedCard.provider))}
        </span>
      </div>
    </div>
  );
}

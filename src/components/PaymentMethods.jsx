import useCustomer from "../hooks/useCustomer";
import { formatValue } from "../utils/main";
import { useEffect, useState } from "react";

export function PaymentMethods() {
  const { paymentMethods } = useCustomer();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (!paymentMethods) return;

    const foundDefaultCard = paymentMethods.find((card) => card.default);
    selectCard(foundDefaultCard);
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
                selectedCard={selectedCard}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function CardList({ payment, selectCard, selectedCard }) {
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
    <div
      className={`card-item ${isSelected ? "selected" : ""}`}
      onClick={() => selectCard(payment)}
    >
      {payment.default && <div className="default-flag">Default</div>}
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
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [selectedCard]);

  return (
    <div
      key={animationKey}
      className={`card ${formatValue(selectedCard.provider)}`}
    >
      {selectedCard.default && <div className="default-flag">Default</div>}
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

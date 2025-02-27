import useCustomer from "../hooks/useCustomer";
import { formatValue } from "../utils/main";
import { useEffect, useState } from "react";
import { CardList, NewCard } from "./CardList";

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
            <NewCard />
          </div>
        </>
      )}
    </section>
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
      {selectedCard.default && <div className="flag">Default</div>}
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

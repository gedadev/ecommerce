import { BiLogoMastercard as Mastercard } from "react-icons/bi";
import { BiLogoVisa as Visa } from "react-icons/bi";
import useCustomer from "../hooks/useCustomer";
import { formatValue } from "../utils/main";

export function PaymentMethods() {
  const { paymentMethods } = useCustomer();

  return (
    <section className="profile-payments">
      {paymentMethods && (
        <>
          <div className="card"></div>
          <div className="card-list">
            {paymentMethods.map((payment) => (
              <CardList payment={payment} key={payment.id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function CardList({ payment }) {
  const selectProviderLogo = (provider) => {
    switch (provider) {
      case "visa":
        return <Visa />;
      case "mastercard":
        return <Mastercard />;
      default:
        break;
    }
  };

  const hideNumber = (number) => {
    const ending = number.slice(-4);
    const hidden = "•".repeat(12).concat(ending);

    return hidden.match(/.{1,4}/g).join(" ");
  };

  return (
    <div className="card-item">
      <div className="payment-logo">
        {selectProviderLogo(formatValue(payment.provider))}
      </div>
      <div>
        <p>{hideNumber(payment.number)}</p>
        <p>
          {payment.bank} {payment.type}
        </p>
      </div>
      {/* <p>{payment.name}</p>
        <p>{payment.number}</p>
      <p>{payment.default ? "default" : ""}</p>
      <p>{payment.type}</p> */}
    </div>
  );
}

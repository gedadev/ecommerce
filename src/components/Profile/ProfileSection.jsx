import { Link, useNavigate } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";

export { PaymentMethods } from "./PaymentMethods";

export function ProfileHeader() {
  const { customer } = useCustomer();

  return (
    <header>
      {customer && (
        <>
          <h3>Welcome, {customer.username}</h3>
          <p>{customer.email}</p>
        </>
      )}
    </header>
  );
}

export function ProfileMenu() {
  const { logout } = useCustomer();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside>
      <ul className="profile-menu">
        <Link to={"/profile"}>
          <li>Summary</li>
        </Link>
        <Link to={"/profile/info"}>
          <li>Personal Information</li>
        </Link>
        <Link to={"/profile/orders"}>
          <li>Shop History</li>
        </Link>
        <Link to={"/profile/payments"}>
          <li>Payment Methods</li>
        </Link>
        <Link to={"/profile/addresses"}>
          <li>Addresses</li>
        </Link>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </aside>
  );
}

export function ProfileInfo() {
  const { customer } = useCustomer();

  return (
    <section className="profile-info">
      {customer && (
        <div>
          <p>Username: {customer.username}</p>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
        </div>
      )}
    </section>
  );
}

export function Orders() {
  const { orders } = useCustomer();

  return (
    <section className="profile-info">
      {orders && (
        <>
          {orders.map((order) => (
            <div key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Items: {order.items.length}</p>
              <p>Total: ${order.total}</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export function Addresses() {
  const { addresses } = useCustomer();

  return (
    <section className="profile-info">
      {addresses && (
        <>
          {addresses.map((address) => (
            <div key={address.id}>
              <p>Address: {address.street}</p>
              <p>City: {address.city}</p>
              <p>State: {address.state}</p>
              <p>Zip: {address.zip}</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

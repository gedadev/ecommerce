import useCustomer from "../hooks/useCustomer";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <main className="profile-section">
      <ProfileHeader />
      <ProfileMenu />
    </main>
  );
}

function ProfileHeader() {
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

function ProfileMenu() {
  return (
    <aside>
      <ul className="profile-menu">
        <li>Summary</li>
        <li>Personal Information</li>
        <li>Shop History</li>
        <li>Payment Methods</li>
        <li>Addresses</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}

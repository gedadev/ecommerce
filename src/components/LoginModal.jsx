import { useState } from "react";
import useCustomer from "../hooks/useCustomer";
import { FaWindowClose } from "react-icons/fa";

export function LoginModal({ handleModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authUser, isLoggedIn } = useCustomer();

  const handleSubmit = (e) => {
    e.preventDefault();

    authUser({ username, password });
  };

  return (
    <div className="login-modal">
      <FaWindowClose className="close-icon" onClick={handleModal} />
      {isLoggedIn ? (
        <CustomerModal handleModal={handleModal} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button>Login</button>
          <p>
            New customer? <span>Click here!</span>
          </p>
        </form>
      )}
    </div>
  );
}

function CustomerModal() {
  const { customer, logout } = useCustomer();

  return (
    <div className="customer-modal">
      {customer && <p>Welcome, {customer.username}</p>}
      <span></span>
      <h3>My Profile</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

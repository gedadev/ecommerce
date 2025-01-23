import { useState } from "react";
import useCustomer from "../hooks/useCustomer";

export function LoginModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authUser } = useCustomer();

  const handleSubmit = (e) => {
    e.preventDefault();

    authUser({ username, password });
  };

  return (
    <div className="login-modal">
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
    </div>
  );
}

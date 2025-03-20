import { mockUserData } from "../mocks/main";

export const formatWord = (word) =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : null;

export const formatValue = (value) =>
  value ? value.split(" ").join("-").toLowerCase() : "other";

export const formatText = (value) =>
  value
    ? value
        .split(/[ -]+/)
        .map((word) => formatWord(word))
        .join(" ")
    : "other";

export const formatDate = (isoDate) => {
  const dateObject = new Date(isoDate);
  const date = dateObject.toLocaleDateString();
  const time = dateObject.toLocaleTimeString();

  return { date, time };
};

export const serverURL = "http://localhost:3000/auth/login";

export const getUserData = async (token) => {
  if (token === null) {
    return null;
  }

  return mockUserData;
};

export const authService = async (credentials) => {
  const { username, password } = credentials;

  if (username === "john" && password === "1234") {
    setTimeout(() => {
      return {
        user: {
          id: 1,
          name: "John Doe",
          username: "John",
          email: "jdoe@mail.com",
          phone: "1234567890",
          role: "admin",
        },
        token: "1234567890",
      };
    }, "1000");
  }

  return {
    user: {
      id: 1,
      name: "John Doe",
      username: "John",
      email: "jdoe@mail.com",
      phone: "1234567890",
      role: "admin",
    },
    token: "1234567890",
  };
  // fetch(`${serverURL}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(credentials),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const { user, token } = data;
  //     return { user, token };
  //   });
};

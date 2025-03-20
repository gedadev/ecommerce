export const mockUserData = {
  orders: [
    {
      id: 1,
      date: "2021-09-01T12:00:00",
      total: 100,
      items: [
        {
          id: 1,
          name: "Product 1",
          price: 50,
          quantity: 2,
        },
        {
          id: 2,
          name: "Product 2",
          price: 25,
          quantity: 2,
        },
      ],
    },
    {
      id: 2,
      date: "2021-09-02T12:00:00",
      total: 75,
      items: [
        {
          id: 3,
          name: "Product 3",
          price: 25,
          quantity: 3,
        },
      ],
    },
  ],
  paymentMethods: [
    {
      id: 1,
      type: "credit",
      number: "5555555555554444",
      expiration: "12/25",
      name: "John Doe",
      bank: "HSBC",
      provider: "Mastercard",
      default: true,
    },
    {
      id: 2,
      type: "credit",
      number: "4242424242424242",
      expiration: "12/26",
      name: "John Doe",
      bank: "Banamex",
      provider: "Visa",
      default: false,
    },

    {
      id: 3,
      type: "debit",
      number: "4000056655665556",
      expiration: "5/25",
      name: "John Doe",
      bank: "Santander",
      provider: "Visa",
      default: false,
    },
    {
      id: 4,
      type: "debit",
      number: "5200828282828210",
      expiration: "1/25",
      name: "John Doe",
      bank: "BBVA",
      provider: "Mastercard",
      default: false,
    },
    {
      id: 6,
      type: "credit",
      number: "378282246310005",
      expiration: "12/25",
      name: "John Doe",
      bank: "American Express",
      provider: "amex",
      default: false,
    },
  ],
  addresses: [
    {
      id: 1,
      name: "Home",
      type: "home",
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      country: "USA",
      phone: "1234567890",
      receiver: "John Doe",
      default: true,
    },
    {
      id: 2,
      name: "Work",
      type: "work",
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      country: "USA",
      phone: "1234567890",
      receiver: "John Doe",
      default: false,
    },
  ],
};

export default {
  userComplete: {
    fullname: "Harry Potter",
    email: "harry@hogwarts.com",
    telephone: "11911111111",
    password: "1234",
  },
  userUnique: {
    fullname: "Hermione Granger",
    email: "hermionegranger@hogwarts.com",
    telephone: "11911111112",
    password: "1234",
  },

  userInvalidBody: {
    fullname: 1234,
    telephone: 11911111112,
    email: [],
  },
  userInvalidBody2: {
    fullname:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    email: "mail",
    password: 123456,
  },
};

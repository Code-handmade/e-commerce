const jwt = require("jsonwebtoken");
const secretKey = "secret";

const tokenGenerator = (user) => {
  const { id, username, email, birth_date, gender, avatar, type } = user;
  const token = jwt.sign(
    {
      id,
      username,
      email,
      birth_date,
      gender,
      avatar,
      type,
    },
    secretKey
  );
  return token;
};
const tokenVerifier = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};

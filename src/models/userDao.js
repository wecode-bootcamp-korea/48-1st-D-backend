const {AppDataSource} = require("./data-source")

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.email = ?
    `,
    [email]

  );

  return user;
};

module.exports = {getUserByEmail};

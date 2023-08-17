const { AppDataSource } = require("../models/data-source");
const getUserById = async (id) => {
  const [user] = await AppDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.id = ?
    `,
    [id]
  );
  console.log(user);
  return user;
};

const { AppDataSource } = require("./data-source");

const createUser = async (
  email,
  password,
  nickname,
  phoneNumber,
  birthday,
  profileImage
) => {
  await AppDataSource.query(
    `
INSERT INTO users(
    email,
    password,
    nickname,
    phone_number,
    birthday,
    profile_image
) VALUES (
    ?, ?, ?, ?, ?, ?
)
`,
    [email, password, nickname, phoneNumber, birthday, profileImage]
  );
};

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

const getUserById = async(id) => {
  const userFromId = await AppDataSource.query(`SELECT * FROM users WHERE id =?`,[id])
  return userFromId;
}

module.exports = { createUser, getUserByEmail, getUserById };

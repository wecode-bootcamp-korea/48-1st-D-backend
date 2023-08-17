const { AppDataSource } = require("./data-source");

const createUser = async (
  email,
  password,
  nickname = process.env.DEFAULT_NAME,
  phoneNumber,
  birthday,
  profileImage = process.env.DEFAULT_PROFILE_IMAGE
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
  const userData = await AppDataSource.query(
  `SELECT id, 
  email, 
  password, 
  nickname, 
  phone_number, 
  birthday, 
  profile_image, 
  created_at, 
  updated_at 
  FROM users WHERE id =?`,[id])
  return userData;
}

module.exports = { createUser, getUserByEmail, getUserById };

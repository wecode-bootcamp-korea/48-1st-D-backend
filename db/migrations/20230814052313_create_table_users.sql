-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  passowrd VARCHAR(300) NOT NULL,
  nickname VARCHAR(50) NULL DEFAULT "Name",
  phone_number VARCHAR(20) NULL,
  birthday TIMESTAMP NULL,
  porfile_image VARCHAR(200) NULL DEFAULT 'https://img.icons8.com/?size=512&id=ABBSjQJK83zf&format=png',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down


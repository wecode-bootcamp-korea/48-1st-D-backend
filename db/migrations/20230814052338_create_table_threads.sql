-- migrate:up
CREATE TABLE threads (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(500) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down

mysql> INSERT INTO threads (passowrd, phone_number, birthday) VALUES (123, 1210-130-131, 10-19);
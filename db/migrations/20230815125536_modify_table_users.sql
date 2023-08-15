-- migrate:up
ALTER TABLE users RENAME COLUMN passowrd TO password;

-- migrate:down


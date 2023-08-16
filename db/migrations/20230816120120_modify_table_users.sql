-- migrate:up
ALTER TABLE users RENAME COLUMN passowrd TO password;
ALTER TABLE users RENAME COLUMN porfile_image TO profile_image;

-- migrate:down


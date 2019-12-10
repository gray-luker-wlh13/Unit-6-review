-- used for all CREATE commands
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(100),
    user_password VARCHAR(250)
);

CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    image_url VARCHAR(250)
);
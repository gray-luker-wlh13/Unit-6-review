INSERT INTO post (
    user_id,
    image_url
) VALUES (
    $1,
    $2
);
SELECT * FROM post;
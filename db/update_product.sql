UPDATE shelfie
SET image_url = $1,
    price = $2,
    name = $3

WHERE id = $4;

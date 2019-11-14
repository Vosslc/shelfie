INSERT INTO shelfie( image_url, price, name )
VALUES ( 'https://www.wthr.com/sites/default/files/styles/article_image/public/2019/10/25/beer970.jpg?itok=lrQzku9h', 10, 'Ale' );

SELECT * FROM shelfie;


UPDATE shelfie
SET address = $1
WHERE id = $2

SELECT * FROM shelfie
ORDER BY id;
-- WTF are you wantint to do?
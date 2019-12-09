
USE bamazon_db;
CREATE TABLE products (
id INTEGER(20) AUTO_INCREMENT NOT NULL,
product VARCHAR(20),
product_price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(5) NOT NULL, 
PRIMARY KEY (id)
);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(1, 'baseball glove', 102.95, 100);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(2, 'blank hat', 35.60, 105);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(3, 'baseball bat', 200.78, 86);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(4, 'blank jersey', 47.75, 200);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(5, 'baseball helmet', 95.60, 80);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(6, 'metal cleats', 150.34, 75);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(7, 'batting gloves', 60.45, 90);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(8, 'sunglasses', 175.95, 100);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(9, 'eye black', 25.50, 50);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(10, 'arm sleeve', 30.75, 30);

INSERT INTO products(id, product, product_price, stock_quantity)
VALUES(11, 'elbow guard', 55.90, 35);

SELECT * FROM products;

DROP TABLE products

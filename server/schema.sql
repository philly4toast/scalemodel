

CREATE DATABASE IF NOT EXISTS groceryListTracker;

USE groceryListTracker;

CREATE TABLE IF NOT EXISTS groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(50),
  quantity INT
);

-- INSERT INTO groceries (item, quantity) VALUES ('Carrots', 5);

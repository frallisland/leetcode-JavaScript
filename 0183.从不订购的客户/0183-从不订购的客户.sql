# Write your MySQL query statement below
SELECT customers.name AS 'Customers' FROM customers WHERE customers.id not in (SELECT customerId FROM Orders);
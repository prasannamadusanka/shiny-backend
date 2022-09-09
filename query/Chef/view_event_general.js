exports.VIEW_EVENT_GENERAL = "SELECT * FROM `event` WHERE date='2022-08-17' CROSS JOIN `users` WHERE event.user_id=users.user_id";

// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// CROSS JOIN Orders
// WHERE Customers.CustomerID=Orders.CustomerID;

// CROSS JOIN `users`
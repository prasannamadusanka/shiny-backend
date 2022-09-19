exports.VIEW_EVENT_GENERAL = "SELECT * FROM `event`  JOIN `users` ON event.user_id=users.user_id JOIN `menu` ON event.menu_id=menu.menu_id WHERE event.date=?";

// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// CROSS JOIN Orders
// WHERE Customers.CustomerID=Orders.CustomerID;

// CROSS JOIN `users`
//
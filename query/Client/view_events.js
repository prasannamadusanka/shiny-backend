exports.VIEW_EVENTS = "SELECT * FROM `event` INNER JOIN banquet ON event.banquet_id=banquet.banquet_id WHERE event.user_id=?";
exports.GET_EVENT = "SELECT * FROM `event` WHERE event_id=?";

exports.GET_USER ="SELECT * FROM `users` WHERE user_id=?";
exports.VIEW_BANQUETS_DATE = "SELECT * FROM `event` INNER JOIN banquet ON event.banquet_id=banquet.banquet_id where event.date!=? GROUP BY banquet.banquet_id";
exports.VIEW_BANQUETS = "SELECT * FROM `banquet`";
exports.ADD_EVENT = " INSERT INTO `event` VALUES(null,?,?,null,null,?,?,?,?,null,null)"
exports.GET_ORDER = "SELECT * FROM `event_food_item_list` LEFT JOIN `food item` ON `event_food_item_list`.`food_item_id`=`food item`.`id`   WHERE `event_food_item_list`.`event_id`=?"
exports.GET_EVENT_COUNT = "SELECT COUNT(`event_id`) as eventCount FROM `event` where `user_id`=? and `date`>CURRENT_DATE";
exports.VIEW_EVENTS_WITH_LIMIT = "SELECT * FROM `event` INNER JOIN banquet WHERE event.banquet_id=banquet.banquet_id GROUP BY date limit 5";

exports.myEvent = "SELECT * FROM `event` INNER JOIN banquet ON event.banquet_id=banquet.banquet_id INNER JOIN menu  on event.menu_id=menu.menu_id where event.event_id=?"

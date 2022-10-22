exports.VIEW_EVENTS = "SELECT * FROM `event` INNER JOIN banquet WHERE event.banquet_id=banquet.banquet_id";
exports.VIEW_BANQUETS = "SELECT * FROM `banquet`";
exports.ADD_EVENT = " INSERT INTO `event` VALUES(null,?,?,null,null,?,null,?,?,null,null)"
exports.GET_ORDER = "SELECT * FROM `event_food_item_list` LEFT JOIN `food item` ON `event_food_item_list`.`food_item_id`=`food item`.`id`   WHERE `event_food_item_list`.`event_id`=?"

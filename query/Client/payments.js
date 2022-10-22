exports.INITIAL_ADVANCE = " INSERT INTO `advance_payment` VALUES(?,?,?,null,?)" ;
exports.MY_PAYMENTS = "SELECT * FROM `advance_payment` WHERE event_id=?";
exports.SUBSCRIPTIONS = "SELECT * FROM `subscriptions` WHERE event_id=?";
exports.TOTAL ="SELECT `event`.`event_id`,`event`.`type`,`event`.`date`,SUM(`subscriptions`.`total_amount`) as subsciption,SUM(`advance_payment`.`amount`) as advance FROM `event` LEFT JOIN `subscriptions` ON `event`.`event_id`=`subscriptions`.`event_id` LEFT JOIN `advance_payment` ON `event`.`event_id`=`advance_payment`.`event_id` WHERE `event`.`user_id`=? GROUP BY `event`.`event_id`";


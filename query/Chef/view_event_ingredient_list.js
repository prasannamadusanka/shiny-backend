exports.VIEW_EVENT_INGREDIENT_LIST = "SELECT * FROM `event_ingredient_list` JOIN `event` ON event_ingredient_list.event_id=event.event_id INNER JOIN `ingredients` ON event_ingredient_list.ingredient_id=ingredients.ingredient_id WHERE event.event_id=?";

//FULL OUTER JOIN `ingredients` ON event_ingredient_list.ingredient_id=ingredients.ingredient_id
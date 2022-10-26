exports.VIEW_EVENT_INGREDIENT_LIST = "SELECT * FROM `event_ingredient_list` JOIN `event` ON event_ingredient_list.event_id=event.event_id INNER JOIN `ingredients` ON event_ingredient_list.ingredient_id=ingredients.ingredient_id INNER JOIN `ingredient_types` ON ingredients.type_id=ingredient_types.type_id WHERE event.event_id=3";

//FULL OUTER JOIN `ingredients` ON event_ingredient_list.ingredient_id=ingredients.ingredient_id

// SELECT * FROM `event_ingredient_list` JOIN `event` ON event_ingredient_list.event_id=event.event_id INNER JOIN `ingredients` ON event_ingredient_list.ingredient_id=ingredients.ingredient_id INNER JOIN `ingredient_types` ON ingredients.type_id=ingredient_types.type_id WHERE event.event_id=3

// EVENT_FOOD_ITEMS="SELECT * FROM `event_food_item_list` INNER JOIN `event_food_item_list` ON event.event_id=event_food_item_list.event_id"
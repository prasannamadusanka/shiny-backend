exports.VIEW_NO_OF_PENDING_INGREDIENT_LISTS = "SELECT COUNT(*) AS number FROM `event` WHERE ingredient_list_completion_status = 'pending'";
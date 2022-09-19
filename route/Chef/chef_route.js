const express = require('express');
const chef_route = express.Router();

const menu_view_controller = require('../../controller/Chef/menu_view_controller');
const food_item_view_controller = require('../../controller/Chef/food_item_view_controller');
const ingredient_view_controller = require('../../controller/Chef/ingredient_view_controller');
const full_event_view_controller = require('../../controller/Chef/full_event_view_controller');
const item_ingredients_view_controller = require('../../controller/Chef/food_item_ingredients_controller');
const event_general_view_controller = require('../../controller/Chef/event_general_view_controller');
const pending_ingredients_list_view_controller = require('../../controller/Chef/pending_ingredients_list_view_controller');
const recepes_view_controller = require('../../controller/Chef/recepes_view_controller');
const no_of_pending_ingredients_view_controller = require('../../controller/Chef/no_of_pending_ingredients_view_controller');
const no_of_pending_ingredient_lists_view_controller = require('../../controller/Chef/no_of_pending_ingredient_lists_view_controller');
const event_ingredient_list_view_controller = require('../../controller/Chef/event_ingredient_list_view_controller');
const no_of_remaining_events_for_week_view_controller = require('../../controller/Chef/no_of_remaining_events_for_week_view_controller');

const create_recepe_insert_controller = require('../../controller/Chef/create_recepe_insert_controller');
const create_recepe_next_insert_controller = require('../../controller/Chef/create_recepe_next_insert_controller');

// Thisrouts for menus
chef_route.get("/view_menus",menu_view_controller.VIEW_menus);

chef_route.get("/view_items",food_item_view_controller.VIEW_items);

chef_route.get("/view_ingredients",ingredient_view_controller.VIEW_ingredients);

chef_route.get("/view_full_event",full_event_view_controller.VIEW_full_event);

chef_route.get("/view_item_ingredients",item_ingredients_view_controller.VIEW_item_ingredients);

chef_route.get("/view_event_general",event_general_view_controller.VIEW_event_general);

chef_route.get("/view_pending_ingredients_list",pending_ingredients_list_view_controller.VIEW_pending_ingredients_list);

chef_route.get("/view_recepes",recepes_view_controller.VIEW_recepes);

chef_route.get("/no_of_pending_ingredients",no_of_pending_ingredients_view_controller.VIEW_no_of_pending_ingredients);

chef_route.get("/no_of_pending_ingredient_lists",no_of_pending_ingredient_lists_view_controller.VIEW_no_of_pending_ingredient_lists);

chef_route.get("/event_ingredient_list",event_ingredient_list_view_controller.VIEW_event_ingredient_list);

chef_route.get("/no_of_remaining_events_for_week",no_of_remaining_events_for_week_view_controller.VIEW_no_of_remaining_events_for_week);



chef_route.post("/insert_create_recepe",create_recepe_insert_controller.insert_recepe);

chef_route.post("/insert_create_recepe_next",create_recepe_next_insert_controller.insert_recepe_next);


module.exports = chef_route;
 
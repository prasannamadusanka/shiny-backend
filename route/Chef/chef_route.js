const express = require('express');
const chef_route = express.Router();

const menu_view_controller = require('../../controller/Chef/menu_view_controller');
const food_item__view_controller = require('../../controller/Chef/food_item_view_controller');
const ingredient__view_controller = require('../../controller/Chef/ingredient_view_controller');
const full_event__view_controller = require('../../controller/Chef/full_event_view_controller');

// Thisrouts for menus
chef_route.get("/view_menus",menu_view_controller.VIEW_menus);

chef_route.get("/view_items",food_item__view_controller.VIEW_items);

chef_route.get("/view_ingredients",ingredient__view_controller.VIEW_ingredients);

chef_route.get("/view_full_event",full_event__view_controller.VIEW_full_event);

module.exports = chef_route;

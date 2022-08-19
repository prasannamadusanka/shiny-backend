const express = require('express');
const cl_route = express.Router();
const menu_view_controller = require('../../controller/Client/menu_view_controller');
const food_view_controller = require('../../controller/Client/food_view_controller');

// Thisrouts for menus
cl_route.get("/view_menus",menu_view_controller.VIEW_menus);

cl_route.get("/view_items",food_view_controller.VIEW_items);

module.exports = cl_route;

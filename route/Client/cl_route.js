const express = require('express');
const cl_route = express.Router();
const menu_view_controller = require('../../controller/Client/menu_view_controller');
const food_view_controller = require('../../controller/Client/food_view_controller');
const schedule_controller = require('../../controller/Client/schedule_controller');


// Thisrouts for menus
cl_route.get("/view_menus", menu_view_controller.VIEW_menus);

cl_route.get("/view_items", food_view_controller.VIEW_items);
cl_route.get("/welcomeitems", food_view_controller.welcomeitems);
cl_route.post("/addSchedule", schedule_controller.addSchedule);


module.exports = cl_route;

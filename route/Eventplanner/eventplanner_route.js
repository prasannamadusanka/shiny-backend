const express = require('express');
const chef_route = express.Router();

const full_event_view_controller = require('../../controller/Eventplanner/full_event_view_controller');

const rough_event_plan_view_controller = require('../../controller/Eventplanner/rough_event_plan_view_controller');

// Thisrouts for menus

chef_route.get("/view_full_event",full_event_view_controller.VIEW_full_event);

chef_route.get("/view_rough_event_plan",rough_event_plan_view_controller.VIEW_rough_event_plan);


module.exports = chef_route;
 
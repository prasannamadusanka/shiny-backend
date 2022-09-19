const express = require('express');
const chef_route = express.Router();

const full_event_view_controller = require('../../controller/Eventplanner/full_event_view_controller');

// Thisrouts for menus

chef_route.get("/view_full_event",full_event_view_controller.VIEW_full_event);


module.exports = chef_route;
 
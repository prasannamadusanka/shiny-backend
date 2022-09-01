const express = require('express');
const mn_route = express.Router();
const invoice_view_controller = require('../../controller/Manager/invoice_view_controller');
const service_provider_view_controller = require('../../controller/Manager/service_provider_view_controller');
const ingredients_view_controller = require('../../controller/Manager/ingredients_view_controller');
const menus_view_controller = require('../../controller/Manager/menus_view_controller');
const eventplan_view_controller = require('../../controller/Manager/eventplan_view_controller');
const banquet_view_controller = require('../../controller/Manager/banquet_view_controller');
const expence_view_controller = require('../../controller/Manager/expence_view_controller');

// Thisrouts for menus
mn_route.get("/view_invoices",invoice_view_controller.VIEW_invoices);
mn_route.get("/view_serviceprovider",service_provider_view_controller.VIEW_serviceprovider);
mn_route.get("/view_ingredients",ingredients_view_controller.VIEW_ingredients);
mn_route.get("/view_menus",menus_view_controller.VIEW_menus);
mn_route.get("/view_eventplan",eventplan_view_controller.VIEW_eventplan);
mn_route.get("/view_banquet",banquet_view_controller.VIEW_banquet);
mn_route.get("/view_expence",expence_view_controller.VIEW_expence);


module.exports = mn_route;

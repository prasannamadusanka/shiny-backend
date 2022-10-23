const express = require('express');
const mn_route = express.Router();
const invoice_view_controller = require('../../controller/Manager/invoice_view_controller');
const service_provider_view_controller = require('../../controller/Manager/service_provider_view_controller');
const ingredients_view_controller = require('../../controller/Manager/ingredients_view_controller');
const menus_view_controller = require('../../controller/Manager/menus_view_controller');
const eventplan_view_controller = require('../../controller/Manager/eventplan_view_controller');
const banquet_view_controller = require('../../controller/Manager/banquet_view_controller');
const expence_view_controller = require('../../controller/Manager/expence_view_controller');
const pre_ingre_view_controller = require('../../controller/Manager/pre_ingredient_view_controller');
const req_serviceprovider_view_controller = require('../../controller/Manager/req_serviceprovider_view_controller');
const paid_invoice_view_controller = require('../../controller/Manager/paid_invoice_view_controller');
const add_decoration_controller = require('../../controller/Manager/add_decoration_controller');
const event_view_controller = require('../../controller/Manager/event_view_controller');




// Thisrouts for menus
mn_route.get("/view_invoices",invoice_view_controller.VIEW_invoices);
mn_route.get("/view_serviceprovider",service_provider_view_controller.VIEW_serviceprovider);
mn_route.get("/view_ingredients",ingredients_view_controller.VIEW_ingredients);
mn_route.get("/view_menus",menus_view_controller.VIEW_menus);
mn_route.get("/view_eventplan",eventplan_view_controller.VIEW_eventplan);
mn_route.get("/view_banquet",banquet_view_controller.VIEW_banquet);
mn_route.get("/view_expence",expence_view_controller.VIEW_expence);
mn_route.get("/view_pre_ingre_list",pre_ingre_view_controller.VIEW_pre_ingre_list);
mn_route.get("/view_req_serviceprovider",req_serviceprovider_view_controller.VIEW_req_serviceprovider);
mn_route.get("/view_paid_invoice",paid_invoice_view_controller.VIEW_paid_invoice);
mn_route.get("/add_decoration",add_decoration_controller.ADD_decoration);
mn_route.get("/view_event",event_view_controller.VIEW_event);

module.exports = mn_route;

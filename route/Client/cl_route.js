const express = require('express');
const cl_route = express.Router();
const menu_view_controller = require('../../controller/Client/menu_view_controller');
const food_view_controller = require('../../controller/Client/food_view_controller');
const schedule_controller = require('../../controller/Client/schedule_controller');
const event_controller = require('../../controller/Client/event_view_controller');
const add_menu_controller = require('../../controller/Client/add_menu_controller');
const payment_controller = require('../../controller/Client/payment_controller');

// Thisrouts for menus
cl_route.get("/view_menus", menu_view_controller.VIEW_menus);
cl_route.get("/myevent", event_controller.myEvent);

cl_route.get("/view_items", food_view_controller.VIEW_items);
cl_route.get("/welcomeitems", food_view_controller.welcomeitems);
cl_route.get("/chickendishes", food_view_controller.chickendishes);
cl_route.get("/viewevents", event_controller.VIEW_events);
cl_route.get("/getEvent", event_controller.getEvent);
cl_route.get("/getuser", event_controller.getUser);
cl_route.post("/addSchedule", schedule_controller.addSchedule);
cl_route.get("/viewSchedule", schedule_controller.viewSchedule);
cl_route.post("/addFoodItem", add_menu_controller.addNewMenu);
cl_route.post("/updateEventMenu", add_menu_controller.updateEventMenu);
cl_route.get("/getEventDates", event_controller.getDates);
cl_route.get("/getbanquets", event_controller.getBanquets);
cl_route.get("/getbanquetsDate", event_controller.getBanquetsDate);
cl_route.post("/addNewEvent", event_controller.addevent);
cl_route.post("/initialAdvance", payment_controller.initialAdvance);
cl_route.get("/getOrder", event_controller.getOrder);
cl_route.get("/advancePayments", payment_controller.Advance_payments);
cl_route.get("/subscriptions", payment_controller.Subscriptions);
cl_route.get("/total", payment_controller.Total);
cl_route.get("/eventAdvances", payment_controller.getEventAdvances);
cl_route.get("/eventTotal", payment_controller.getEventTotal);
cl_route.get("/getEventCount", event_controller.getEventCount);
cl_route.get("/getBillTotal", payment_controller.getToatalBill);
cl_route.get("/getAdvanceotal", payment_controller.getToatalAdvances);
cl_route.get("/getEventLimit", event_controller.getEventWithLimiit);
cl_route.get("/getclientmenu",menu_view_controller.VIEW_client_menu);
cl_route.post("/updateSubscription",menu_view_controller.updateSubscription);

module.exports = cl_route;

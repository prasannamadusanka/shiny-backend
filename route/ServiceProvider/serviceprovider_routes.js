const express = require('express');
const serviceprovider_route = express.Router();
const bookings_view_controller = require('../../controller/ServiceProvider/bookings_view_controller');
const the_bookings_view_controller = require('../../controller/ServiceProvider/the_bookings_view_controller');
const payments_view_controller = require('../../controller/ServiceProvider/payments_view_controller');
const sprr_controller = require('../../controller/ServiceProvider/sprr_controller');
const sprr2_controller = require('../../controller/ServiceProvider/sprr2_controller');
// student_route.post("/" , student_controller.student_register);
// student_route.get("/" , student_controller.student_login);

// serviceprovider_route.route("/")
    //.post(serviceprovider_controller.serviceprovider_register)
    //.get(serviceprovider_controller.serviceprovider_login)
serviceprovider_route.get("/view_bookings",bookings_view_controller.VIEW_BOOKINGS) // get 
serviceprovider_route.get("/view_full_bookings",the_bookings_view_controller.VIEW_FULL_BOOKINGS) // get
serviceprovider_route.get("/view_full_payments",payments_view_controller.VIEW_FULL_PAYMENTS) // get
serviceprovider_route.post("/register_request",sprr_controller.SPRR) // get
serviceprovider_route.post("/register_request_2",sprr2_controller.SPRR2) // get

module.exports = serviceprovider_route;

// exports.VIEW_FULL_BOOKINGS = "SELECT * FROM event INNER JOIN services ON event.package_id = services.package_id WHERE services.service_provider_id=23";
exports.VIEW_FULL_BOOKINGS = "SELECT services.package_name, services.package_description, services.package_price, services.service_type, services.service_provider_id, banquet.name AS bname, client.name, client.password, banquet.description, banquet.address, banquet.image, banquet.capacity, banquet.email, banquet.contact_no, my_event.event_name, my_event.event_status, event.event_id, event.type, event.pax, event.time_slot, event.date, event.menu_id, event.user_id, event.banquet_id, event.package_id FROM event INNER JOIN services ON event.package_id = services.package_id INNER JOIN client ON event.user_id = client.user_id INNER JOIN banquet ON event.banquet_id = banquet.banquet_id INNER JOIN my_event ON event.event_id = my_event.event_id WHERE services.service_provider_id=23 AND my_event.event_status='New booking'";
// events of logged in service provider
//get user_id and banquet_id to get names of client and banquet
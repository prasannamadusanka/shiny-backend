exports.CHECK_STUDENT_EMAIL = "SELECT * FROM users WHERE email = ?";
exports.REGISTER_STUDENT = " INSERT INTO users  VALUES( Null, ?)" ;
exports.REGISTER_CLIENT = " INSERT INTO client VALUES(Null,Null,Null,?,?,?,?)" ;
exports.REGISTER_USERS = " INSERT INTO users VALUES(Null,'1',?,?,?,?)" ;

const { isEmpty } = require('../utils/is_empty');
const conn = require('../service/db_service');
const { CHECK_STUDENT_EMAIL, REGISTER_STUDENT,REGISTER_CLIENT ,REGISTER_USERS } = require('../query/student');
const { STUDENT_MODEL, STUDENT_LOGIN_MODEL } = require('../model/student');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const JWT = require('jsonwebtoken');


exports.student_login = (req, res, next) => {

    const email = req.query.email
    const password = req.query.password
    const data1 = {
        "email": email,
        "password": password
    }
    console.log(data1)
    if (isEmpty(data1)) return next(new AppError("form data not found", 400));
    try {
        const { error } = STUDENT_LOGIN_MODEL.validate(data1);
        if (error) return next(new AppError(error.details[0].message, 400))

        conn.query(CHECK_STUDENT_EMAIL, [data1.email], async (err, data, feilds) => {
            if (err) return next(new AppError(err, 500));
            console.log("data from database")
            console.log(data)
            if (!data.length) return next(new AppError("Email or Password Invalid", 401));
            const isMatched = await bcrypt.compare(data1.password, data[0].password);
            console.log(!isMatched)
            if (isMatched) return next(new AppError("Email or Password Invalid 1", 401));

            const token = JWT.sign({ name: data[0].name, s_id: data[0].user_id }, "ucscucscucsc", { expiresIn: "1d" });

            res.header("auth-token", token).status(200).json({
                data: data[0].type,
                token: token
            })

        })
    } catch (err) {

    }

}

exports.student_register = (req, res, next) => {
    if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    try {
        const { error } = STUDENT_MODEL.validate(req.body);

        if (error) return next(new AppError(error.details[0].message, 400));

        conn.query(CHECK_STUDENT_EMAIL, [req.body.email], async (err, data, feilds) => {
            if (err) return next(new AppError(err, 500));

            if (data.length) return next(new AppError("Email already used!", 400));
            const salt = await bcrypt.genSalt(10);
            const hashedValue = await bcrypt.hash(req.body.password, salt);

            conn.query(REGISTER_CLIENT, [[req.body.addressOne], [req.body.addressTwo], [req.body.nic], [req.body.username]], (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));
                res.status(201).json({
                    data: "okay"
                })

            })
        })
        // try {
            conn.query(REGISTER_USERS, [[req.body.password], [req.body.username], [req.body.email], [req.body.contactNumber]], (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));
                res.status(201).json({
                    data: "registration success"
                })
            })
        // } catch (err){
        //     console.log("errors")
        // }


    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}
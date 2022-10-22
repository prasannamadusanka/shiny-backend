const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    INITIAL_ADVANCE

} = require('../../query/Client/payments');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.initialAdvance = (req, res, next) => {
    console.log("hi");
    try {
        conn.query(INITIAL_ADVANCE, (err, data, feild) => {

            if (err) {
                return next(new AppError(err))
            }
            else {
                res.status(200).json({
                    food1: data
                })
            }

        })
    } catch (err) {

    }
}


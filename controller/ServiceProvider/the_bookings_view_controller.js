// const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_FULL_BOOKINGS
} = require('../../query/ServiceProvider/view_full_bookings');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
// const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
// const JWT = require('jsonwebtoken');

exports.VIEW_FULL_BOOKINGS = (req, res, next) => {
    console.log("hi, service provider view items");
    console.log(req.body);
    try {
        conn.query(VIEW_FULL_BOOKINGS,[req.body], (err,data)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}

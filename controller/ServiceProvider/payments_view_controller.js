// const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_FULL_PAYMENTS
} = require('../../query/ServiceProvider/view_full_payments');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
// const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
// const JWT = require('jsonwebtoken');

exports.VIEW_FULL_PAYMENTS = (req, res, next) => {
    console.log("hi, service provider view payments");
    console.log(req.body);
    try {
        conn.query(VIEW_FULL_PAYMENTS,[req.body], (err,data)=>{

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

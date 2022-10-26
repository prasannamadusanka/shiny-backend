const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_PAID_INVOICE
} = require('../../query/Manager/view_paid_invoice');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_paid_invoice = (req, res, next) => {
    console.log("hi");
    try {
        conn.query(VIEW_PAID_INVOICE,[req.body],(err,data,feild)=>{

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

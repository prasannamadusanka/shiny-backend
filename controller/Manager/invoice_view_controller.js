const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_INVOICES
} = require('../../query/Manager/view_invoices');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_invoices = (req, res, next) => {
    console.log("hi");
    console.log(req.body);
    try {
        conn.query(VIEW_INVOICES,[req.body],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    invoices:data
                })
            }

        })
    } catch ( err ) {

    }
}

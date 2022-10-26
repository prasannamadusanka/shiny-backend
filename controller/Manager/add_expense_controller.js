const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    ADD_EXPENSE
} = require('../../query/Manager/add_expense');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
//const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
//const JWT = require('jsonwebtoken');

exports.ADD_expense = (req, res, next) => {
    console.log("hi, Add expense");
    console.log(req.body);
    if (isEmpty(req.body)) return next(new AppError("form data not found", 400));
    try {
        // conn.query(SPRR,[req.body], (err,data,fields)=>{
        conn.query(ADD_EXPENSE,[req.body.banquet_id, req.body.date, req.body.description, req.body.expence], (err,data,fields)=>{

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
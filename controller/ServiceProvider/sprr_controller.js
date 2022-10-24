const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    SPRR
} = require('../../query/ServiceProvider/service_provider_register_request');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
// const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
// const JWT = require('jsonwebtoken');

exports.SPRR = (req, res, next) => {
    console.log("hi, service provider REGISTRATION");
    console.log(req.body);
    console.log(req.body.name);
    if (isEmpty(req.body)) return next(new AppError("form data not found", 400));
    try {
        // conn.query(SPRR,[req.body], (err,data,fields)=>{
        conn.query(SPRR, [req.body.service_provider_id, req.body.name, req.body.business_name, req.body.email, req.body.contact_no, req.body.address, req.body.credit_card_no, req.body.password, req.body.banquet_id], (err,data,fields)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    // menus:data
                })
                console.log("Service provider REQUEST SENT");
            }

        })
    } catch ( err ) {
        console.log("Service provider REQUEST SENT", err);
    }
}

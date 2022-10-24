const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    SPRR2
} = require('../../query/ServiceProvider/service_provider_register_request_2');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
// const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
// const JWT = require('jsonwebtoken');

exports.SPRR2 = (req, res, next) => {
    console.log("hi, service provider REGISTRATION step 2");
    console.log(req.body);
    console.log(req.body.name);
    if (isEmpty(req.body)) return next(new AppError("form data not found", 400));
    try {
        // conn.query(SPRR,[req.body], (err,data,fields)=>{
        conn.query(SPRR2, [req.body.service_provider_id, req.body.service_type, req.body.package_name, req.body.package_description, req.body.package_price], (err,data,fields)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    // menus:data
                })
                console.log("Service provider REQUEST DETAILS SENT");
            }

        })
    } catch ( err ) {
        console.log("Service provider REQUEST DETAILS SENT", err);
    }
}

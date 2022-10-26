const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_MENUS,VIEW_CLIENT_MENU,Add_subscription
} = require('../../query/Chef/view_menus');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_menus= (req, res, next) => {
    console.log("hi");
    try {
        conn.query(VIEW_MENUS,(err,data,feild)=>{

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
exports.VIEW_client_menu= (req, res, next) => {
    console.log("dataaa")
    console.log(req.query.event_id);
    try {
        conn.query(VIEW_CLIENT_MENU,[req.query.event_id],(err,data,feild)=>{

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
exports.updateSubscription= (req, res, next) => {
    console.log("dataaahhhhhhhhhhhhhhhh")
    console.log(req);
    try {
        conn.query(Add_subscription,[req.params.event_id,req.params.service_id,req.params.rate,req.params.quantity,req.params.description,req.params.subscribed_date,req.params.total_amount],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
                console.log("madhuni")
            }

        })
    } catch ( err ) {

    }
}


var router = require('express').Router(),
    JsonProducts = require('../mock/products')

//** 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.route('/products')
    .post(function(req, res, next) {

        console.log(req.body)

        //res.json({
        //    code:0,
        //    data:{
        //        list:JsonProducts,
        //        postdata:req.body
        //    },
        //});

        res.send({
            code:0,
            data:{
                list:JsonProducts,
                postdata:req.body
            }
        });

        next();
    },function(req,res,next){
        console.log('商品列表')
    })




//router.route('/addresses')
//    .get(function(req,res){
//        res.json({
//            code:1,
//            data:{
//                list:addresses
//            },
//        });
//    })
//
//router.route('/addresses/:id')
//    .get(function(req,res){
//        res.json({
//            code:1,
//            data:addresses[0],
//        });
//    })

module.exports=router;
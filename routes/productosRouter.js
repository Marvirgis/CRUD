const router=require('express').Router()

const productoController=require("../controllers/productosController")

router.get("/",productoController.list)

module.exports=router
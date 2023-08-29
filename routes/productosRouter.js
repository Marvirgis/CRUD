const router=require('express').Router()

const productoController=require("../controllers/productosController")

router.get("/",productoController.list)
router.get('/create',productoController.create)
router.post("/create",productoController.stock)
// router.post('/', uploadFile.single('imagen'), productoController.stock);
router.get('/productos/:id/edit', productoController.edit)
router.patch('/productos/:id', productoController.update);
router.delete('/delete/:id',productoController.destroy); 

module.exports=router
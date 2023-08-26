const path=require('path')
const fs=require('fs')
const productosFilePath=path.join(__dirname,"../data/productos.json")
const productos=JSON.parse(fs.readFileSync(productosFilePath,'utf-8'))

const productosController={
    list:(req,res)=>{
        res.render("index",{productos})
    },
    create:(req,res)=>{
        res.render("productos/creacionProd");
    },
    stock:(req,res)=>{
        const{nombre,descripcion,precio,imagen}=req.body;
        const nuevoProd={
            id:productos.length+1,
            nombre,
            descripcion,
            precio,
            imagen,
        }
        productos.push(nuevoProd)
		fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "))
		res.redirect("/")
    }
}
module.exports=productosController
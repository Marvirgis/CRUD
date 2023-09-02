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
            ...req.body,
            imagen: req.file ? req.file.filename : 'default-img-png',
        }
        productos.push(nuevoProd)
		fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "))
		res.redirect("/")
    },
    edit:(req,res)=>{
        let id = req.params.id;
        let editProduc = productos.find(producto => producto.id == id)
        res.render("productos/editProd", { editProduc } )
        },
    update: (req,res)=>{
        let id=req.params.id;
        let editProduc= productos.find(producto => producto.id == id)
        editProduc= {
            id: editProduc.id,
            ...req.body,
            imagen: editProduc.imagen
        };
        let nuevoProd = productos.map(producto =>{
            if (producto.id === editProduc.id){
                return producto={...editProduc};
            }
            return producto;
        })
        fs.writeFileSync(productosFilePath, JSON.stringify(nuevoProd, null, ' '));
		res.redirect('/');
    },
    destroy: (req, res) => {
		let id = req.params.id;
		let finalProductos = productos.filter(producto => producto.id != id) 
        // console.log(finalProductos);
		fs.writeFileSync(productosFilePath, JSON.stringify(finalProductos, null, ' '));
		res.redirect('/');
	}

}
module.exports=productosController
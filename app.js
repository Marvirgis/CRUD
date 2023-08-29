const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const methodOverride = require('method-override');

app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// app.get('/',(req,res)=>{
//     res.render("index");
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const routerProductos=require("./routes/productosRouter");
app.use("/",routerProductos)


app.listen(3000,()=>{console.log("Server corriendo en el puerto 3000")})
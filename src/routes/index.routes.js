import { Router } from "express"; //aca requiero Router que es un submodulo de express
const router = Router();

//RUTAS

router.get("/", (req, res) => { //ruta raiz
  res.render('index')
});

router.get("/about",(req,res)=>{ //ruta about
    res.render('about')
});

router.get("/edit",(req,res)=>{
  res.render("edit")
});


export default router;

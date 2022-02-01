import { Router } from "express"; //aca requiero Router que es un submodulo de express
const router = Router();

//RUTAS

router.get("/", (req, res) => { //ruta raiz
  res.send("hola mundo cruel");
});

router.get("/about",(req,res)=>{ //ruta about
    res.send("about");
});



export default router;

import { Router } from "express";//aca requiero Router que es un submodulo de express
const router = Router() 

router.get("/",(req,res)=>{
    res.send("hola mundo cruel");
});

export default router;


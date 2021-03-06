import { Router } from "express"; //aca requiero Router que es un submodulo de express
const router = Router();
import Task from '../models/Task';

//RUTAS

router.get("/", (req, res) => {
  //ruta raiz
  res.render("index");
});

router.post("/tasks/add", (req, res) => {
  //esto es un metodo post y  sirve para enviar al server informacion
    const task = Task(req.body) //aca requiero el modelo
    console.log(task)
  res.send("Agregando tarea");
});

router.get("/about", (req, res) => {
  //ruta about
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;

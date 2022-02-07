import express from "express"; // esto es para poder usar express
import indexRoutes from "./routes/index.routes"; //esta es la importacion del enrutador
import {create} from "express-handlebars"; // este es el motor de plantillas para poder usarlo desde el backend
import path from "path"; //esto es para los directorios 
import morgan from 'morgan';

const app = express(); //esto es par usar express

app.set("views", path.join(__dirname, "views")); //configuraciones para renderizar las vistas

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
  });
  app.set("view engine",".hbs")

  app.engine(".hbs", exphbs.engine); 
  
  //middlewares 
  app.use(morgan('dev')); 
  app.use(express.urlencoded({extended:false})); //este middleware es para que podamos usar el req.body


//routes

app.use(indexRoutes); // esto es para usar el enrutador

export default app;

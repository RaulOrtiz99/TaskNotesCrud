import express from "express"; // esto es para poder usar express
import indexRoutes from './routes/index.routes' //esta es la importacion del enrutador 

const app = express();//esto es par usar express


app.use(indexRoutes);// esto es para usar el enrutador


app.listen(3000);
console.log("server on port 3000"); 


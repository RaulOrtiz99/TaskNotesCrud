//archivo de configuracion para la bd
import { connect } from "mongoose";

(async () => {
  try{
    const db = await connect("mongodb://localhost/crud-mongo"); //asi me conecto a mongodb
    console.log("DB conected to", db.connection.name);
    console.log("BD esta conectada")
  }catch(error){
      console.error(error)
  }

})();

import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    //asi seria un esquema en mongo (un esquema son los datos que se guardaran)
    title: {
      type:String,
      required:true,
      unique:true,
      trim:true  
    },
    description: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

export default model("Task", taskSchema);//asi se exporta un modelo para que sea requerido en el proyecto

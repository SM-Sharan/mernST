import express from "express";
import { create,getAll, getOne, update,deleteItem} from "../controller/controller.js";

const route =express.Router();
route.get("/getall",getAll);
route.get("/getone/:id",getOne);
route.post("/create",create);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteItem);

export default route;
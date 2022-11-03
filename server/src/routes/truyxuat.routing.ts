import express from "express";
import { TracingController } from "../controllers/truyxuat.controller"; 
const route = express.Router();

const tracingController = new TracingController();

route.get('/rice-product/:id', tracingController.TracingRiceProduct);
route.get('/rice-product/:id', tracingController.TracingRiceProduct);

export default route;

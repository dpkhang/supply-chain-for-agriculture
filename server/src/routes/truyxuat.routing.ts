import express from "express";
import { TracingController } from "../controllers/truyxuat.controller"; 
const route = express.Router();

const tracingController = new TracingController();

route.get('/rice-product/:id', tracingController.TracingRiceProduct);

route.get('/product/:id', tracingController.tracingProduct);

export default route;

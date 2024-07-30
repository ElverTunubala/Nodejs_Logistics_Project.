import { Router } from "express";
import { getAll, insert, update } from "../controllers/shipmentController.js";

const shipmentRouter = Router();

shipmentRouter.get("/", getAll);
shipmentRouter.post("/", insert);
shipmentRouter.put("/:id", update)


export default shipmentRouter;
import { itemsRouter } from "./items/itemsRoutes";
import express from "express";

export const apiRoutes = express.Router();
//route API
apiRoutes.use("/item", itemsRouter);
apiRoutes.get("/", async (request, reply) => {
  reply.send("Welcome Back to My guys");
});

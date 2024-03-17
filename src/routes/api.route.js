import express from "express";
import { getArgv } from "../utils/getArgv.js";

export const apiRouter = express.Router();

apiRouter.get("/streams", (req, res) => {
	res.send(getArgv("streams", { toString: true }));
});

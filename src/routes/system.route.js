import express from "express";
import { exec } from "child_process";

export const sysRouter = express.Router();

sysRouter.get("/reboot", () => {
	console.log("Reboot request received. Rebooting now...");
	exec("sudo reboot");
});

sysRouter.get("/shutdown", () => {
	console.log("Shutdown request received. Shutting down now...");
	exec("sudo shutdown -h now");
});

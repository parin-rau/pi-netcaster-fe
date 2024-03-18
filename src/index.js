import express from "express";
import { getArgv } from "./utils/getArgv.js";
import { getDeviceIp } from "./utils/ipUtils.js";
import { staticRouter } from "./routes/static.route.js";
import { apiRouter } from "./routes/api.route.js";
import { sysRouter } from "./routes/system.route.js";

const port = getArgv("port") ?? 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", staticRouter);
app.use("/api", apiRouter);
app.use("/system", sysRouter);

app.listen(port, () => {
	//process.argv.forEach((a) => console.log(a));
	console.log(`App listening on ${getDeviceIp()}:${port}`);
});

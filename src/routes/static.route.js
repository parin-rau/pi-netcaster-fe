import express from "express";
import path from "path";
import { existsSync } from "fs";

const __dirname = import.meta.dirname;
export const staticRouter = express.Router();

staticRouter.use(express.static(path.join(__dirname, "..", "public")));

staticRouter.get("/:filename?", (req, res) => {
	const { filename } = req.params;
	const hasHtmlExtension =
		(typeof filename === "string" && filename.slice(-5) === ".html") ??
		false;
	const fileExists = existsSync(
		path.join(
			__dirname,
			"..",
			"public",
			hasHtmlExtension ? filename : `${filename}.html`
		)
	);

	if (!hasHtmlExtension && fileExists) {
		//console.log("missing html ext. redirecting to /index");
		return res.redirect(`/${filename}.html`);
	} else if (!filename || !fileExists) {
		//console.log("no filename. redirecting to /index");
		return res.redirect("/index.html");
	} else {
		//console.log("fallthrough");
		return res.redirect("/index.html");
	}
});

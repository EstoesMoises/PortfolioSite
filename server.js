import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import livereload from "livereload"

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

// Liverelaod middleware

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.resolve(__dirname, "frontend"))

const port = process.env.PORT ? process.env.PORT : 2345;

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});

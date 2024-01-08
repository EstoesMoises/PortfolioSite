import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

const port = process.env.PORT ? process.env.PORT : 2345;

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});

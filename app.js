import express from "express";
import swaggerUi from "swagger-ui-express";
import docs from "./docs/swagger.json" assert { type: "json" };
import cors from "cors";
import "dotenv/config";
import router from "./routes/index.js";
import {
  errorHandler,
  notFound,
  prismaErrorHandler,
  zodErrorHandler,
} from "./middlewares/index.js";
import { URL } from "url";

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const swaggerDocument = docs;

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Welcome to API, open api docs at /api/docs",
  });
});
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", router);

app.use(zodErrorHandler);
app.use(prismaErrorHandler);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export const __filename = new URL("", import.meta.url).pathname;
export const __dirname = new URL(".", import.meta.url).pathname.slice(1);

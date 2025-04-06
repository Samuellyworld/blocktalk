import express from "express";
import cors from "cors";

// import { corsSettings } from "./config/settings";
import morgan from "morgan";
import helmet from "helmet";
export const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(cors(corsSettings));
// app.use("/api/v1", router);



export default app;

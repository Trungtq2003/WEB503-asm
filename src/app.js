import express from "express";
import mongoose from "mongoose";
import router from "./routers/product";

const app = express();

app.use(express.json());

app.use("/api", router);

mongoose.connect("mongodb://localhost:21707/kiemtra");

export const viteNodeApp = app;
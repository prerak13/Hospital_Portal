import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import path from "path";
import blogRoutes from "./routes/blogRoute.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express(); // main thing
const corsOptions={
  origin:'*',
  credentials:true,
  optionSuccessStatus:200,
}
app.use(express.json()); // to accept json data
app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use(errorHandler);
app.use("/api/blog", blogRoutes);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares



const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);

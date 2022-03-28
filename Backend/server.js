import express from "express";
import path from "path";
import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import docAppointmentRoutes from "./routes/docAppointmentRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
//running app
const app = express(); 
app.use(express.json()); 
app.use("/api/users", userRoutes);
app.use("/api/docappointment", docAppointmentRoutes);

const __dirname = path.resolve();
//deploying app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Data is fetched! run frontend");
  });
}

app.use(errorHandler);
app.use(notFound);

//port to run backend code, its different from frontend which is 3000
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Backend initiated in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);

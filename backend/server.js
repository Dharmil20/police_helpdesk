import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// ✅ CORS Fix
const corsOptions = {
  origin: "http://127.0.0.1:5173", // Allow requests from frontend
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true, // Important if using cookies/auth
};

app.use(cors(corsOptions));

// ✅ Handle Preflight Requests
app.options("*", cors(corsOptions));

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`app is running on PORT: ${PORT}`);
  await connectToDatabase();
});

export default app;

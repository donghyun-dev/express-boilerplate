import express from "express";
import logger from "morgan";
import path from "path";
import { config } from "../config/index.js";
// import cookieParser from 'cookie-parser';
// import session from 'express-session';

// Routes
import authRouter from "./routes/auth.js";

const app = express();
const { PORT } = config;

//__dirname 선언
const __dirname = path.resolve();

// port 설정
app.set("port", PORT || 5000);

// 미들웨어 설정
app.use(logger("dev"));

// bodyparser & urlencoded 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static 파일 설정
app.use(express.static(path.join(__dirname, "public")));

// routes 설정
app.get("/about", (req, res) => {
  res.send("About 페이지");
});

app.use("/api/auth", authRouter);

// 서버 연결
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});

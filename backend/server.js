import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 1999;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get("/api/v1/test", (req, res) => {
  res.json({ Hi: "dhdhd" });
});

app.listen(PORT, () => {
  console.log(
    `${chalk.green.bold("✅")} 👍 Server running in ${chalk.yellow.bold(
      process.env.NODE_ENV
    )} mode on port ${chalk.blue.bold(PORT)}`
  );
});

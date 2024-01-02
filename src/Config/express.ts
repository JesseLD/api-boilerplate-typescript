import express, { Application, Request, Response, NextFunction } from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../Api/Utils/swaggerOptions";
import routes from "../Api/Routes/index.routes";
import expressStatusMonitor from "express-status-monitor";

const app: Application = express();

app.use(expressStatusMonitor());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "https://me.kis.v2.scr.kaspersky-labs.com",
          "https://cdnjs.cloudflare.com",
        ],
      },
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.sendStatus(500);
  }
});
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Rota para a interface do Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes);

export default app;

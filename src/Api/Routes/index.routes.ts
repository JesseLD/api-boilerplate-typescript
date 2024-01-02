import { Router, Request, Response } from "express";

const routes = Router();
/**
 * @swagger
 * / :
 *   get:
 *     summary: Rota Principal
 *     description: Retorna uma mensagem de exemplo.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a mensagem "Working!".
 */
routes.get("/", (req: Request, res: Response) => {
  res.json({ message: "Working!" });
});

routes.use((req: Request, res: Response) => {
  res.sendStatus(404);
});

export default routes;

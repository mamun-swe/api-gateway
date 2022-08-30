
import { Express } from "express"
import morgan from "morgan"

export const setupLogging = (app: Express) => {
    app.use(morgan("combined"))
}
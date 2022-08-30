
import express, { Express, NextFunction, Response, Request } from "express"
import dotenv from "dotenv"
dotenv.config()
import { setupLogging } from "./src/middleware/logging.middleware"
import { setupProxies } from "./src/middleware/proxy.middleware"
import { setupAuthentication } from "./src/middleware/authenticate.middleware"
import { IService } from "./src/types"
import { ROUTES } from "./src/routes"

export const app: Express = express()
const PORT = process.env.PORT || 3000

setupLogging(app)
setupProxies(app, ROUTES)
setupAuthentication(app, ROUTES)

/* Root route */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    const services: IService[] = []

    for (let i = 0; i < ROUTES.length; i++) {
        services.push({
            service: req.protocol + "://" + req.get('Host') + ROUTES[i].url,
            authentication: ROUTES[i].auth
        })
    }

    res.status(200).json({
        message: "Welcome to API gateway.",
        services
    })
})

/* Handelling 404 route */
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        status: false,
        errors: {
            message: "Sorry, service not found."
        }
    })
})

/* Start app to specific PORT */
app.listen(PORT, () => {
    console.log(`API Gateway running at http://localhost:${PORT}`)
})
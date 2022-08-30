
import { Express, NextFunction, Request, Response } from "express"
import { IRoutes } from "../types"

export const setupAuthentication = (app: Express, routes: IRoutes[]) => {
    routes.forEach(route => {
        // app.use(route.url, createProxyMiddleware(route.proxy))
        if (route.auth) {
            app.use(route.url, function (req: Request, res: Response, next: NextFunction) {
                console.log("Authentication required.")
                next()
            })
        }
    })
}
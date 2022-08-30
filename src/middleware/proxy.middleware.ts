
import { Express } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"
import { IRoutes } from "../types"

export const setupProxies = (app: Express, routes: IRoutes[]) => {
    routes.forEach(route => {
        app.use(route.url, createProxyMiddleware(route.proxy))
    })
}
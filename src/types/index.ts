
export interface IRoutes {
    url: string,
    auth: boolean,
    proxy: {
        target: string,
        changeOrigin: boolean,
        pathRewrite: any,
    }
}


export interface IService {
    service: string,
    authentication: boolean
}
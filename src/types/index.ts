
export interface IRoutes {
    url: string,
    proxy: {
        target: string,
        changeOrigin: boolean,
        pathRewrite: any,
    }
}


export interface IService {
    service_path: string
}
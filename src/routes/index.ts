
import { IRoutes } from "../types"

export const ROUTES: IRoutes[] = [
    {
        url: "/<Your preferable URL>", /* URL want to browse after domain like as https://www.google.com/anything */
        auth: true,
        proxy: {
            target: "https://www.google.com/", /* Service URL which one you want to browse */
            changeOrigin: true,
            pathRewrite: {
                [`^/<Your preferable URL>`]: '',  /* URL want to browse after domain like as https://www.google.com/anything */
            }
        }
    }
]
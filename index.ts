
import { cpus } from "os"
import process from "process"
import cluster from "cluster"
import { app } from "./src/app"

const numCPUs = cpus().length
const PORT: any = process.env.PORT || 3000

if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`)

    /* Fork workers. */
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
}

/* Start app to specific PORT & establish database connection */
else {
    app.listen(PORT, () => {
        console.log(`API Gateway running at http://localhost:${PORT}`)
    })
}


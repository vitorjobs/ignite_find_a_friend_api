import { app } from "./app"
import { log } from "./infra/logger"
import { env } from "./env"


app.listen({
  host: env.HOST,
  port: env.PORT
}).then(() => {
  log.info(`HTTP SERVER RUNNING ON PORT: ${env.PORT}`)
}).catch(err => {
  log.error(err, "Error starting server")
  process.exit(1)
})

import * as express from 'express'
import errorhandler from './src/middlewares/errorhandler'
import router from './src/routes/routes'
import { dataSource } from './src/config/ormconfig'

const app: express.Application = express()

dataSource
    .initialize()
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(router)
app.use(errorhandler)

app.listen(6060, () => {
    console.log(6060)
})
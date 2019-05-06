import '@babel/polyfill';
import express, {json} from 'express';
import app from './server';
import indexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

//Middlewares
app.use(json())


//ROUTES
app.use(indexRoutes)
app.use('/tasks', TaskRoutes)

async function main() {
    await app.listen(app.get('port'))
    console.log('server Running on PORT', app.get('port'));    
}

main()
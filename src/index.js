import path from 'path';
import express from "express";
import {engine} from 'express-handlebars';
import { APP_PORT } from "./config.js";
import { fileURLToPath } from 'url';
import start from './routes/index.route.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Configuracion
app.use((req, res, next)=>{
    console.log(req.method, req.url);
    next();
});
app.set('port', APP_PORT);
app.set('views', path.join(__dirname, '../views'));
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use(start);

app.listen(APP_PORT);
console.log("Escuchando puerto", APP_PORT);
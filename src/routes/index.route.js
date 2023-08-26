import {Router} from 'express';
import {BE_HOST} from '../config.js';

const router = Router();

async function fetchJSON(url) {
    var res = await fetch(BE_HOST+url, {
        mode: "cors"
    });
    var json = await res.json();
    var result = {data: json};
    console.log(result);
    return result;
}

router.get('/index', async (req,res)=>{
    try{
        const data = await fetchJSON('/info/Personal');
        console.log(data.data.articulos);
        res.render("index", data);
    }catch (err){
        console.log(err);
        res.render("error", err);
    }
});

router.get('/desarrollo', async (req, res)=>{
    try{
        res.render("desarrollo", await fetchJSON('/info/Desarrollo'));
    }catch (err){
        console.log(err);
        res.render("error", err);
    }
});

router.get('/archivos', async (req, res)=>{
    try{
        res.render("archivos");
    }catch (err){
        console.log(err);
        res.render("error", err);
    }
});

router.get('/', (req, res)=>{
    res.redirect('/index');
});

export default router;
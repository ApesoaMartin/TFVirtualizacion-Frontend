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



router.get('/personal', async (req,res)=>{
    try{
        res.render("personal", await fetchJSON('/about'));
    }catch (err){
        console.log(err);
        res.render("error", err);
    }
});

router.get('/', async (req, res)=>{
    try{
        res.render("index", await fetchJSON('/ping'));
    }catch (err){
        console.log(err);
        res.render("error", err);
    }
});

export default router;
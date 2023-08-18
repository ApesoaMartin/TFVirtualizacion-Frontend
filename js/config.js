window['HOST'] = 'http://127.0.0.1:3000';

async function ping(){
    try{
        const response = await fetch(window['HOST']+"/ping");
        const pong = await response.json();
        return pong=="Pong";
    }
    catch (err){
        console.log(err);
        return false;
    }
}

ping().then((val)=>{
    if (val){
        let temp = document.getElementById("connect_success");
        let clon = temp.content.cloneNode(true);
        let div = document.getElementById("connectionMessage");
        div.appendChild(clon);
    }else{
        let temp = document.getElementById("connect_error");
        let clon = temp.content.cloneNode(true);
        let div = document.getElementById("connectionMessage");
        div.appendChild(clon);
    }
});
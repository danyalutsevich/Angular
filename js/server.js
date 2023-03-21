import http from 'http';

let template = (page)=>`
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background-color:pink; display:flex; justify-content:center; align-items:center; height:100vh;}

</style>
    <h1 style="font-family:Helvetica;">Hello ${page}</h1>
`

const server = http.createServer((req, res) => {
    
    let page = req.url;
    if(page === '/'){
        page = 'Home';
    }
    else if(page === '/about'){
        page = 'About';
    }
    else if(page === '/contact'){
        page = 'Contact';
    }
    else{
        page = '404';
    }
    res.end(template(page));

});


server.listen(3000, "localhost", () => {
    console.log("Server is running on port 3000");
});
import express from "express";

const app = express();

let template = (page) => `
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background-color:pink; display:flex; justify-content:center; align-items:center; height:100vh;}
</style>
    <h1 style="font-family:Helvetica;">Hello ${page}</h1>
`

app.get("/", (req, res) => {
    res.send(template("Home"));
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const http=require("http"),fs=require("fs"),path=require("path");
const port=process.env.PORT||3000;
const server=http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split("?")[0]);if(p==="/")p="/index.html";const f=path.join(__dirname,p);fs.readFile(f,(e,data)=>{if(e){res.writeHead(404);return res.end("Not found")}const ext=path.extname(f);const types={".html":"text/html; charset=utf-8",".js":"application/javascript",".css":"text/css",".json":"application/json",".svg":"image/svg+xml"};res.writeHead(200,{"Content-Type":types[ext]||"application/octet-stream"});res.end(data)})});
server.listen(port,()=>console.log("Rokaya Store running on "+port));

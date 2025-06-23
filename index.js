import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
const blogs = []
const blogHeaders = []
// function itemPosition(array, item) {
//        array.indexOf(item)
// }
const data = {
       blog: blogs,
       headers:blogHeaders,
      }

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, ()=>{
      console.log(`server running on port ${port}`)
})

app.get("/",(req,res)=>{
      console.log("user on")
      res.render("index.ejs")
})

app.post("/save",(req,res) =>{
      function uploadBlog() {
            blogHeaders.push(req.body["heading"])
            blogs.push(req.body["blog-content"])
            console.log(`heading = ${blogHeaders} blog content = ${blogs} `)
      }
      uploadBlog()
      res.render("index.ejs",data)

})

app.get("/blogs", (req,res) =>{
      res.render("blogs.ejs", data)
})


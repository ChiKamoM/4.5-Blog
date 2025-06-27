import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
const blogs = []
const blogHeaders = []


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


const data = {
      blogs: blogs,
      headers:blogHeaders,
      }




app.listen(port, ()=>{
      console.log(`server running on port ${port}`)
})

app.get("/",(req,res)=>{
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
app.post("/search", (req,res) =>{
      edit = blogs[index]
      res.render("blogs.ejs", data)
})


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { db } from "./db.js";
import { blogPost } from "./schema.js";
import { eq } from "drizzle-orm";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));



app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))



app.listen(port, ()=>{
      console.log(`server running on port ${port}`)
})

app.get("/",(req,res)=>{
      res.render("index.ejs")
})

app.post("/save", async (req,res) =>{
      const { heading: title, "blog-content": content } = req.body;

      if (!title || !content ){
            console.log("no content or title")
      }
      const [inserted] = await db.insert(blogPost).values({title, content}).returning()
      res.render("index.ejs")

})

app.get("/blogs", async (req,res) =>{
      const posts = await db.select().from(blogPost)

      res.render("blogs.ejs", {posts})
})
app.post("/blogs/:id/delete", async (req,res) =>{
      const id = req.params.id

      await db.delete(blogPost).where(eq(blogPost.id,id))
      res.render("blogs.ejs", { posts })
})



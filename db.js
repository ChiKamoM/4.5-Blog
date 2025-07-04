import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from "better-sqlite3";
import { blogPost } from "./schema.js";



const sqlite = new Database('./sqlite.db');

sqlite
 .prepare(
      `CREATE TABLE IF NOT EXISTS blog_posts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       content TEXT NOT NULL
     )`
 )
 .run();




export const db = drizzle(sqlite, { schema: { blogPost } });
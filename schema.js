import { sqliteTable, text, integer} from "drizzle-orm/sqlite-core";

export const blogPost = sqliteTable('blog_posts', {
      id: integer('id').primaryKey({ autoIncrement:true}),
      title: text('title').notNull(),
      content: text('content').notNull()
});
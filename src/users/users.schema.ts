import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { posts } from "src/posts/posts.schema";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: text('email').unique(),
    password: text('password'),
});

export const userRelations = relations(
    users,
    ({ many }) => ({
        posts: many(posts)
    })
);
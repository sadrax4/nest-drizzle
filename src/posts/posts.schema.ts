import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "src/users/users.schema";

export const posts = pgTable(
    "posts",
    {
        id: serial("id").primaryKey(),
        content: text("content"),
        published: boolean("published").default(false),
        timestamp: timestamp("timestamp").defaultNow(),
        userId: integer("user_id").references(() => users.id)
    }
)
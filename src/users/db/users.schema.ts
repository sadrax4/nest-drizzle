import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const user = pgTable(
    "users",
    {
        id: serial("id").primaryKey(),
        email: text("email").unique().notNull(),
        password: text("password").notNull()
    }
)
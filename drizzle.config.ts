import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/**/*.schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DB_URL
    },
    out: "./drizzle"
})
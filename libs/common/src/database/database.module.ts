import { Module } from "@nestjs/common";
import { DATABASE_CONNECTION } from "./database.connection";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres"
import * as usersSchema from "../../../../src/users/users.schema";
import * as postsSchema from "../../../../src/posts/posts.schema"

@Module({
    providers: [
        {
            provide: DATABASE_CONNECTION,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.getOrThrow<string>("DB_URL"),
                    max: configService.getOrThrow<number>("DB_MAX_CONNECTION"),
                    min: configService.getOrThrow<number>("DB_MIN_CONNECTION")
                })
                return drizzle(
                    pool,
                    {
                        schema: {
                            usersSchema,
                            postsSchema
                        }
                    }
                )
            },
            inject: [ConfigService]
        }
    ],
    exports: [
        DATABASE_CONNECTION
    ]
})

export class DatabaseModule { }
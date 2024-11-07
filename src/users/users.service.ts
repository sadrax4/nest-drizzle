import { DATABASE_CONNECTION } from '@app/common/database/database.connection';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./users.schema";
import { User } from '@app/common';
import { PgRelationalQuery } from 'drizzle-orm/pg-core/query-builders/query';


@Injectable()
export class UsersService {
    constructor(
        @Inject(DATABASE_CONNECTION)
        private readonly database: NodePgDatabase<typeof schema>
    ) { }

    getUsers(): Promise<User[]> {
        const user: PgRelationalQuery<User[]> = this.database.query.users.findMany({
            extras: {}
        })
        this.database.select({
            id: schema.users.id,
        })
        return user;
    }

    createUser(
        user: typeof schema.users.$inferInsert
    ) {
        return this.database.insert(schema.users).values(user);
    }
}

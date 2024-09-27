import { DATABASE_CONNECTION } from '@app/common/database/database.connection';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./users.schema";


@Injectable()
export class UsersService {
    constructor(
        @Inject(DATABASE_CONNECTION)
        private readonly database: NodePgDatabase<typeof schema>
    ) { }

    getUsers() {
        return this.database.query.user.findMany();
    }

    createUser(
        user: typeof schema.user.$inferInsert
    ) {
        return this.database.insert(schema.user).values(user);
    }
}

import { DATABASE_CONNECTION } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./posts.schema"

@Injectable()
export class PostsService {
    constructor(
        @Inject(DATABASE_CONNECTION)
        private database: NodePgDatabase<typeof schema>
    ) { }

    getPosts() {
        return this.database.query.posts.findMany({ extras: {} })
    }
}

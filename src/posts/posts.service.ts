import { DATABASE_CONNECTION, Post } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./posts.schema"
import { PgRelationalQuery } from 'drizzle-orm/pg-core/query-builders/query';

@Injectable()
export class PostsService {
    constructor(
        @Inject(DATABASE_CONNECTION)
        private database: NodePgDatabase<typeof schema>
    ) { }

    getPosts() {
        const posts: PgRelationalQuery<Post[]> = this.database.query.posts.findMany({ extras: {} })
    }
}

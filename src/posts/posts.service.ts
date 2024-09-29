import { DATABASE_CONNECTION } from '@app/common/database/database.connection';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    constructor(
        @Inject(DATABASE_CONNECTION)
    ){}
}

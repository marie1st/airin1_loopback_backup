import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { State4Info, State4InfoRelations } from '../models';
export declare class State4InfoRepository extends DefaultCrudRepository<State4Info, typeof State4Info.prototype.id, State4InfoRelations> {
    constructor(dataSource: AirinoneDataSource);
}

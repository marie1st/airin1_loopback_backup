import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { AirTestingInfo, AirTestingInfoRelations } from '../models';
export declare class AirTestingInfoRepository extends DefaultCrudRepository<AirTestingInfo, typeof AirTestingInfo.prototype.id, AirTestingInfoRelations> {
    constructor(dataSource: AirinoneDataSource);
}

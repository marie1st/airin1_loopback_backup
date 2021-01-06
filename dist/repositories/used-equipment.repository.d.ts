import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { UsedEquipment, UsedEquipmentRelations } from '../models';
export declare class UsedEquipmentRepository extends DefaultCrudRepository<UsedEquipment, typeof UsedEquipment.prototype.id, UsedEquipmentRelations> {
    constructor(dataSource: AirinoneDataSource);
}

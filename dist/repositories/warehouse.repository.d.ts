import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Warehouse, WarehouseRelations } from '../models';
export declare class WarehouseRepository extends DefaultCrudRepository<Warehouse, typeof Warehouse.prototype.id, WarehouseRelations> {
    constructor(dataSource: AirinoneDataSource);
}

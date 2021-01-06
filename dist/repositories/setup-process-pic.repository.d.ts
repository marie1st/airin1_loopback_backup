import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupProcessPic, SetupProcessPicRelations, OrderProduct, SetupProcess } from '../models';
import { OrderProductRepository } from './order-product.repository';
import { SetupProcessRepository } from './setup-process.repository';
export declare class SetupProcessPicRepository extends DefaultCrudRepository<SetupProcessPic, typeof SetupProcessPic.prototype.id, SetupProcessPicRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    protected setupProcessRepositoryGetter: Getter<SetupProcessRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupProcessPic.prototype.id>;
    readonly SetupProcess: BelongsToAccessor<SetupProcess, typeof SetupProcessPic.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>, setupProcessRepositoryGetter: Getter<SetupProcessRepository>);
}

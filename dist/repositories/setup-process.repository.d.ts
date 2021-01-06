import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupProcess, SetupProcessRelations, SetupProcessPic } from '../models';
import { SetupProcessPicRepository } from './setup-process-pic.repository';
export declare class SetupProcessRepository extends DefaultCrudRepository<SetupProcess, typeof SetupProcess.prototype.id, SetupProcessRelations> {
    protected setupProcessPicRepositoryGetter: Getter<SetupProcessPicRepository>;
    readonly setupProcessPicsProcess: HasManyRepositoryFactory<SetupProcessPic, typeof SetupProcess.prototype.id>;
    constructor(dataSource: AirinoneDataSource, setupProcessPicRepositoryGetter: Getter<SetupProcessPicRepository>);
}

import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PipeSysNElec } from '../models';
import { PipeSysNElecRepository } from '../repositories';
export declare class PipeSysNElecController {
    pipeSysNElecRepository: PipeSysNElecRepository;
    constructor(pipeSysNElecRepository: PipeSysNElecRepository);
    create(pipeSysNElec: PipeSysNElec): Promise<PipeSysNElec>;
    count(where?: Where<PipeSysNElec>): Promise<Count>;
    find(filter?: Filter<PipeSysNElec>): Promise<PipeSysNElec[]>;
    updateAll(pipeSysNElec: PipeSysNElec, where?: Where<PipeSysNElec>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PipeSysNElec>): Promise<PipeSysNElec>;
    updateById(id: number, pipeSysNElec: PipeSysNElec): Promise<void>;
    replaceById(id: number, pipeSysNElec: PipeSysNElec): Promise<void>;
    deleteById(id: number): Promise<void>;
}

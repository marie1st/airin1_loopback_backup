import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AirTestingInfo } from '../models';
import { AirTestingInfoRepository } from '../repositories';
export declare class AirTestingInfoController {
    airTestingInfoRepository: AirTestingInfoRepository;
    constructor(airTestingInfoRepository: AirTestingInfoRepository);
    create(airTestingInfo: AirTestingInfo): Promise<AirTestingInfo>;
    count(where?: Where<AirTestingInfo>): Promise<Count>;
    find(filter?: Filter<AirTestingInfo>): Promise<AirTestingInfo[]>;
    updateAll(airTestingInfo: AirTestingInfo, where?: Where<AirTestingInfo>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<AirTestingInfo>): Promise<AirTestingInfo>;
    updateById(id: number, airTestingInfo: AirTestingInfo): Promise<void>;
    replaceById(id: number, airTestingInfo: AirTestingInfo): Promise<void>;
    deleteById(id: number): Promise<void>;
}

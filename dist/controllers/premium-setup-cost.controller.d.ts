import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PremiumSetupCost } from '../models';
import { PremiumSetupCostRepository } from '../repositories';
export declare class PremiumSetupCostController {
    premiumSetupCostRepository: PremiumSetupCostRepository;
    constructor(premiumSetupCostRepository: PremiumSetupCostRepository);
    create(premiumSetupCost: PremiumSetupCost): Promise<PremiumSetupCost>;
    count(where?: Where<PremiumSetupCost>): Promise<Count>;
    find(filter?: Filter<PremiumSetupCost>): Promise<PremiumSetupCost[]>;
    updateAll(premiumSetupCost: PremiumSetupCost, where?: Where<PremiumSetupCost>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PremiumSetupCost>): Promise<PremiumSetupCost>;
    updateById(id: number, premiumSetupCost: PremiumSetupCost): Promise<void>;
    replaceById(id: number, premiumSetupCost: PremiumSetupCost): Promise<void>;
    deleteById(id: number): Promise<void>;
}

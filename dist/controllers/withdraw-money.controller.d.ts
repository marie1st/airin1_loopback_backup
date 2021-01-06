import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WithdrawMoney } from '../models';
import { WithdrawMoneyRepository } from '../repositories';
export declare class WithdrawMoneyController {
    withdrawMoneyRepository: WithdrawMoneyRepository;
    constructor(withdrawMoneyRepository: WithdrawMoneyRepository);
    create(withdrawMoney: WithdrawMoney): Promise<WithdrawMoney>;
    count(where?: Where<WithdrawMoney>): Promise<Count>;
    find(filter?: Filter<WithdrawMoney>): Promise<WithdrawMoney[]>;
    updateAll(withdrawMoney: WithdrawMoney, where?: Where<WithdrawMoney>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<WithdrawMoney>): Promise<WithdrawMoney>;
    updateById(id: string, withdrawMoney: WithdrawMoney): Promise<void>;
    replaceById(id: string, withdrawMoney: WithdrawMoney): Promise<void>;
    deleteById(id: string): Promise<void>;
}

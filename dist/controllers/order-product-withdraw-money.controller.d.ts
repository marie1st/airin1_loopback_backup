import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, WithdrawMoney } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductWithdrawMoneyController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<WithdrawMoney>): Promise<WithdrawMoney>;
    create(id: typeof OrderProduct.prototype.order_id, withdrawMoney: Omit<WithdrawMoney, 'id'>): Promise<WithdrawMoney>;
    patch(id: string, withdrawMoney: Partial<WithdrawMoney>, where?: Where<WithdrawMoney>): Promise<Count>;
    delete(id: string, where?: Where<WithdrawMoney>): Promise<Count>;
}

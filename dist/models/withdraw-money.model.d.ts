import { Entity } from '@loopback/repository';
export declare class WithdrawMoney extends Entity {
    id: Number;
    date: string;
    amount_of_money: number;
    is_approved: boolean;
    order_id: string;
    constructor(data?: Partial<WithdrawMoney>);
}
export interface WithdrawMoneyRelations {
}
export declare type WithdrawMoneyWithRelations = WithdrawMoney & WithdrawMoneyRelations;

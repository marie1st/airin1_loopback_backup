import { Entity } from '@loopback/repository';
export declare class WithdrawUsedEquipment extends Entity {
    id?: number;
    ueid: string;
    name: string;
    brand: string;
    withdraw_amount: number;
    classifier: string;
    is_approved: boolean;
    employee_id: string;
    order_id: string;
    constructor(data?: Partial<WithdrawUsedEquipment>);
}
export interface WithdrawUsedEquipmentRelations {
}
export declare type WithdrawUsedEquipmentWithRelations = WithdrawUsedEquipment & WithdrawUsedEquipmentRelations;

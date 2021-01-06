import { Entity } from '@loopback/repository';
export declare class WithdrawMechanicalEquipment extends Entity {
    id?: number;
    meid: string;
    name: string;
    brand: string;
    withdraw_amount: string;
    classifier: string;
    is_approved: boolean;
    employee_id: string;
    order_id: string;
    constructor(data?: Partial<WithdrawMechanicalEquipment>);
}
export interface WithdrawMechanicalEquipmentRelations {
}
export declare type WithdrawMechanicalEquipmentWithRelations = WithdrawMechanicalEquipment & WithdrawMechanicalEquipmentRelations;

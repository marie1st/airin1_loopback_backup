import { Entity } from '@loopback/repository';
export declare class UsedEquipment extends Entity {
    id?: number;
    name: string;
    brand: string;
    classifier: string;
    amount: number;
    description?: string;
    created_at?: string;
    constructor(data?: Partial<UsedEquipment>);
}
export interface UsedEquipmentRelations {
}
export declare type UsedEquipmentWithRelations = UsedEquipment & UsedEquipmentRelations;

import { Entity } from '@loopback/repository';
export declare class Warehouse extends Entity {
    id?: number;
    name: string;
    brand: string;
    classifier: string;
    amount: number;
    btu: number;
    description?: string;
    created_at?: string;
    constructor(data?: Partial<Warehouse>);
}
export interface WarehouseRelations {
}
export declare type WarehouseWithRelations = Warehouse & WarehouseRelations;

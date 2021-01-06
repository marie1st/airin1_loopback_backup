import { Entity } from '@loopback/repository';
export declare class AddLiquid extends Entity {
    id?: number;
    liquid_to_sys: number;
    is_pass: boolean;
    is_standard: boolean;
    order_id: string;
    constructor(data?: Partial<AddLiquid>);
}
export interface AddLiquidRelations {
}
export declare type AddLiquidWithRelations = AddLiquid & AddLiquidRelations;

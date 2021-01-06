import { Entity } from '@loopback/repository';
export declare class SetupCost extends Entity {
    id?: number;
    cost: number;
    pipe_size: string;
    pipe_distance: string;
    order_id: string;
    constructor(data?: Partial<SetupCost>);
}
export interface SetupCostRelations {
}
export declare type SetupCostWithRelations = SetupCost & SetupCostRelations;

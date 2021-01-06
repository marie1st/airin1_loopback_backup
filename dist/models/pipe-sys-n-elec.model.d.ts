import { Entity } from '@loopback/repository';
export declare class PipeSysNElec extends Entity {
    id?: number;
    flaring_is_good: boolean;
    pipe_size_true: boolean;
    wire_true: boolean;
    order_id: string;
    constructor(data?: Partial<PipeSysNElec>);
}
export interface PipeSysNElecRelations {
}
export declare type PipeSysNElecWithRelations = PipeSysNElec & PipeSysNElecRelations;

import { Entity } from '@loopback/repository';
export declare class SetupPipe extends Entity {
    id?: number;
    pipe_sewer_good: boolean;
    pipe_liquid_good: boolean;
    pipe_gas_size: string;
    pipe_liquid_size: string;
    drain_water: string;
    wire_size: string;
    order_id: string;
    constructor(data?: Partial<SetupPipe>);
}
export interface SetupPipeRelations {
}
export declare type SetupPipeWithRelations = SetupPipe & SetupPipeRelations;

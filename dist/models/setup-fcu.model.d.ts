import { Entity } from '@loopback/repository';
export declare class SetupFcu extends Entity {
    id?: number;
    fcu_cover: boolean;
    fcu_filter: boolean;
    hotcoil_frame: boolean;
    coolcoil_clean: boolean;
    hotcoil_clean: boolean;
    order_id: string;
    constructor(data?: Partial<SetupFcu>);
}
export interface SetupFcuRelations {
}
export declare type SetupFcuWithRelations = SetupFcu & SetupFcuRelations;

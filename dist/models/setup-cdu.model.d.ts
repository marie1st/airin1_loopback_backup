import { Entity } from '@loopback/repository';
export declare class SetupCdu extends Entity {
    id?: number;
    cdu_cover: boolean;
    cdu_filter: boolean;
    hotcoil_frame: boolean;
    coolcoil_cleanness: boolean;
    hotcoil_cleanness: boolean;
    is_cool: boolean;
    is_balance: boolean;
    is_strong: boolean;
    order_id: string;
    constructor(data?: Partial<SetupCdu>);
}
export interface SetupCduRelations {
}
export declare type SetupCduWithRelations = SetupCdu & SetupCduRelations;

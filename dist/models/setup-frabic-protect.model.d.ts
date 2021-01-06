import { Entity } from '@loopback/repository';
export declare class SetupFrabicProtect extends Entity {
    id?: number;
    is_good?: boolean;
    order_id: string;
    constructor(data?: Partial<SetupFrabicProtect>);
}
export interface SetupFrabicProtectRelations {
}
export declare type SetupFrabicProtectWithRelations = SetupFrabicProtect & SetupFrabicProtectRelations;

import { Entity } from '@loopback/repository';
export declare class SetupProcessPic extends Entity {
    id?: number;
    pic: string;
    order_id: string;
    setup_process_id: number;
    constructor(data?: Partial<SetupProcessPic>);
}
export interface SetupProcessPicRelations {
}
export declare type SetupProcessPicWithRelations = SetupProcessPic & SetupProcessPicRelations;

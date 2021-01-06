import { Entity } from '@loopback/repository';
import { SetupProcessPic } from './setup-process-pic.model';
export declare class SetupProcess extends Entity {
    id?: number;
    name: string;
    setupProcessPics: SetupProcessPic[];
    setupProcessPicsProcess: SetupProcessPic[];
    constructor(data?: Partial<SetupProcess>);
}
export interface SetupProcessRelations {
}
export declare type SetupProcessWithRelations = SetupProcess & SetupProcessRelations;

import { Entity } from '@loopback/repository';
export declare class LeakTest extends Entity {
    id?: number;
    is_pass: boolean;
    order_id: string;
    constructor(data?: Partial<LeakTest>);
}
export interface LeakTestRelations {
}
export declare type LeakTestWithRelations = LeakTest & LeakTestRelations;

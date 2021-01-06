import { Entity } from '@loopback/repository';
export declare class VacummTest extends Entity {
    id?: number;
    is_pass: boolean;
    order_id: string;
    constructor(data?: Partial<VacummTest>);
}
export interface VacummTestRelations {
}
export declare type VacummTestWithRelations = VacummTest & VacummTestRelations;

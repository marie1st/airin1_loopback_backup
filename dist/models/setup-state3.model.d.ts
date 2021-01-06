import { Entity } from '@loopback/repository';
import { OrderProduct } from './order-product.model';
export declare class SetupState3 extends Entity {
    id?: number;
    pipe_cover_good: boolean;
    sewer_good: boolean;
    is_cleanness: boolean;
    order_id: string;
    orderProducts: OrderProduct[];
    constructor(data?: Partial<SetupState3>);
}
export interface SetupState3Relations {
}
export declare type SetupState3WithRelations = SetupState3 & SetupState3Relations;

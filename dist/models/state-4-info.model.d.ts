import { Entity } from '@loopback/repository';
import { OrderProduct } from './order-product.model';
export declare class State4Info extends Entity {
    id?: number;
    model: string;
    serial: string;
    warranty: string;
    clean_air_con: string;
    order_id: string;
    orderProduct: OrderProduct;
    constructor(data?: Partial<State4Info>);
}
export interface State4InfoRelations {
}
export declare type State4InfoWithRelations = State4Info & State4InfoRelations;

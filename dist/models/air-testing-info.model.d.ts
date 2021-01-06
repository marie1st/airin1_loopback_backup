import { Entity } from '@loopback/repository';
import { OrderProduct } from './order-product.model';
export declare class AirTestingInfo extends Entity {
    id?: number;
    remote_temp: number;
    fcu_temp_back: number;
    pipe_temp_back: number;
    elec_current: number;
    cdu_temp_back: number;
    liquid_pressure_back: number;
    phy_temp: number;
    fcu_temp_out: number;
    pipe_temp_out: number;
    elec_volt: number;
    cdu_temp_out: number;
    liquid_pressure_out: number;
    order_id: string;
    orderProducts: OrderProduct[];
    constructor(data?: Partial<AirTestingInfo>);
}
export interface AirTestingInfoRelations {
}
export declare type AirTestingInfoWithRelations = AirTestingInfo & AirTestingInfoRelations;

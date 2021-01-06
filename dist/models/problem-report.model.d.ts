import { Entity } from '@loopback/repository';
import { OrderProduct } from './order-product.model';
export declare class ProblemReport extends Entity {
    id?: number;
    name: string;
    order_id: string;
    orderProducts: OrderProduct[];
    constructor(data?: Partial<ProblemReport>);
}
export interface ProblemReportRelations {
}
export declare type ProblemReportWithRelations = ProblemReport & ProblemReportRelations;

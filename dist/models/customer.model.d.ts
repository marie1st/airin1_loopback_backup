import { Entity } from '@loopback/repository';
import { OrderProduct } from './order-product.model';
export declare class Customer extends Entity {
    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    id_line?: string;
    occupation?: string;
    email: string;
    facebook?: string;
    profile_pic?: string;
    id_card_pic: string;
    address: string;
    country: string;
    province: string;
    subdistrict: string;
    district: string;
    postcode: string;
    created_at?: string;
    orderProducts: OrderProduct[];
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export declare type CustomerWithRelations = Customer & CustomerRelations;

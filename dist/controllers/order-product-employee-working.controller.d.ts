import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, EmployeeWorking } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductEmployeeWorkingController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<EmployeeWorking>): Promise<EmployeeWorking>;
    create(id: typeof OrderProduct.prototype.order_id, employeeWorking: Omit<EmployeeWorking, 'id'>): Promise<EmployeeWorking>;
    patch(id: string, employeeWorking: Partial<EmployeeWorking>, where?: Where<EmployeeWorking>): Promise<Count>;
    delete(id: string, where?: Where<EmployeeWorking>): Promise<Count>;
}

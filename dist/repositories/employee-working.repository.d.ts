import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Employee, EmployeeWorking, EmployeeWorkingRelations, OrderProduct } from '../models';
import { EmployeeRepository } from './employee.repository';
import { OrderProductRepository } from './order-product.repository';
export declare class EmployeeWorkingRepository extends DefaultCrudRepository<EmployeeWorking, typeof EmployeeWorking.prototype.order_id, EmployeeWorkingRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly Employee: BelongsToAccessor<Employee, typeof EmployeeWorking.prototype.employee_id>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof EmployeeWorking.prototype.order_id>;
    constructor(dataSource: AirinoneDataSource, employeeRepositoryGetter: Getter<EmployeeRepository>, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}

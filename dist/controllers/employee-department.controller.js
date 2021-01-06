"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDepartmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmployeeDepartmentController = class EmployeeDepartmentController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async getDepartment(id) {
        return this.employeeRepository.department(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/employees/{id}/department', {
        responses: {
            '200': {
                description: 'Department belonging to Employee',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Department) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeDepartmentController.prototype, "getDepartment", null);
EmployeeDepartmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EmployeeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmployeeRepository])
], EmployeeDepartmentController);
exports.EmployeeDepartmentController = EmployeeDepartmentController;
//# sourceMappingURL=employee-department.controller.js.map
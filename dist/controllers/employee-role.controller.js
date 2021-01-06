"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmployeeRoleController = class EmployeeRoleController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async getRole(id) {
        return this.employeeRepository.role(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/employees/{id}/role', {
        responses: {
            '200': {
                description: 'Role belonging to Employee',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Role) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeRoleController.prototype, "getRole", null);
EmployeeRoleController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EmployeeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmployeeRepository])
], EmployeeRoleController);
exports.EmployeeRoleController = EmployeeRoleController;
//# sourceMappingURL=employee-role.controller.js.map
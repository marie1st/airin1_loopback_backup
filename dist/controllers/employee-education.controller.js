"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeEducationController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmployeeEducationController = class EmployeeEducationController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async getEducation(id) {
        return this.employeeRepository.education(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/employees/{id}/education', {
        responses: {
            '200': {
                description: 'Education belonging to Employee',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Education) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeEducationController.prototype, "getEducation", null);
EmployeeEducationController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EmployeeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmployeeRepository])
], EmployeeEducationController);
exports.EmployeeEducationController = EmployeeEducationController;
//# sourceMappingURL=employee-education.controller.js.map
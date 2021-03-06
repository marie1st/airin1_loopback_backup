"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyContactRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmergencyContactRepository = class EmergencyContactRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, employeeRepositoryGetter) {
        super(models_1.EmergencyContact, dataSource);
        this.employeeRepositoryGetter = employeeRepositoryGetter;
        this.Employee = this.createBelongsToAccessorFor('Employee', employeeRepositoryGetter);
        this.registerInclusionResolver('Employee', this.Employee.inclusionResolver);
    }
};
EmergencyContactRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('EmployeeRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], EmergencyContactRepository);
exports.EmergencyContactRepository = EmergencyContactRepository;
//# sourceMappingURL=emergency-contact.repository.js.map
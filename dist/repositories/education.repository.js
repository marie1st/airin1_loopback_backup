"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EducationRepository = class EducationRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, employeeRepositoryGetter) {
        super(models_1.Education, dataSource);
        this.employeeRepositoryGetter = employeeRepositoryGetter;
        this.employee = this.createHasOneRepositoryFactoryFor('employee', employeeRepositoryGetter);
        this.registerInclusionResolver('employee', this.employee.inclusionResolver);
    }
};
EducationRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('EmployeeRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], EducationRepository);
exports.EducationRepository = EducationRepository;
//# sourceMappingURL=education.repository.js.map
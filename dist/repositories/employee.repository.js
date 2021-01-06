"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmployeeRepository = class EmployeeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, emergencyContactRepositoryGetter, educationRepositoryGetter, departmentRepositoryGetter, roleRepositoryGetter, employmentRepositoryGetter, employeeWorkingRepositoryGetter) {
        super(models_1.Employee, dataSource);
        this.emergencyContactRepositoryGetter = emergencyContactRepositoryGetter;
        this.educationRepositoryGetter = educationRepositoryGetter;
        this.departmentRepositoryGetter = departmentRepositoryGetter;
        this.roleRepositoryGetter = roleRepositoryGetter;
        this.employmentRepositoryGetter = employmentRepositoryGetter;
        this.employeeWorkingRepositoryGetter = employeeWorkingRepositoryGetter;
        this.employeeWorkings = this.createHasManyRepositoryFactoryFor('employeeWorkings', employeeWorkingRepositoryGetter);
        this.registerInclusionResolver('employeeWorkings', this.employeeWorkings.inclusionResolver);
        this.Employment = this.createBelongsToAccessorFor('Employment', employmentRepositoryGetter);
        this.registerInclusionResolver('Employment', this.Employment.inclusionResolver);
        this.employment = this.createBelongsToAccessorFor('employment', employmentRepositoryGetter);
        this.registerInclusionResolver('employment', this.employment.inclusionResolver);
        this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter);
        this.registerInclusionResolver('role', this.role.inclusionResolver);
        this.department = this.createBelongsToAccessorFor('department', departmentRepositoryGetter);
        this.registerInclusionResolver('department', this.department.inclusionResolver);
        this.education = this.createBelongsToAccessorFor('education', educationRepositoryGetter);
        this.registerInclusionResolver('education', this.education.inclusionResolver);
        this.emergencyContact = this.createHasOneRepositoryFactoryFor('emergencyContact', emergencyContactRepositoryGetter);
        this.registerInclusionResolver('emergencyContact', this.emergencyContact.inclusionResolver);
    }
};
EmployeeRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('EmergencyContactRepository')), tslib_1.__param(2, repository_1.repository.getter('EducationRepository')), tslib_1.__param(3, repository_1.repository.getter('DepartmentRepository')), tslib_1.__param(4, repository_1.repository.getter('RoleRepository')), tslib_1.__param(5, repository_1.repository.getter('EmploymentRepository')), tslib_1.__param(6, repository_1.repository.getter('EmployeeWorkingRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function, Function, Function, Function, Function, Function])
], EmployeeRepository);
exports.EmployeeRepository = EmployeeRepository;
//# sourceMappingURL=employee.repository.js.map
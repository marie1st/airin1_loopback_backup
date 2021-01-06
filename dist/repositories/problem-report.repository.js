"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemReportRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProblemReportRepository = class ProblemReportRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.ProblemReport, dataSource);
    }
};
ProblemReportRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource])
], ProblemReportRepository);
exports.ProblemReportRepository = ProblemReportRepository;
//# sourceMappingURL=problem-report.repository.js.map
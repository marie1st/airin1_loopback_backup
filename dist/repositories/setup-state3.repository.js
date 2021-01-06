"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupState3Repository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SetupState3Repository = class SetupState3Repository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.SetupState3, dataSource);
    }
};
SetupState3Repository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource])
], SetupState3Repository);
exports.SetupState3Repository = SetupState3Repository;
//# sourceMappingURL=setup-state3.repository.js.map
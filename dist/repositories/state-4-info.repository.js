"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State4InfoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let State4InfoRepository = class State4InfoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.State4Info, dataSource);
    }
};
State4InfoRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource])
], State4InfoRepository);
exports.State4InfoRepository = State4InfoRepository;
//# sourceMappingURL=state-4-info.repository.js.map
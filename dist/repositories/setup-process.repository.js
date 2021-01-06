"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SetupProcessRepository = class SetupProcessRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, setupProcessPicRepositoryGetter) {
        super(models_1.SetupProcess, dataSource);
        this.setupProcessPicRepositoryGetter = setupProcessPicRepositoryGetter;
        this.setupProcessPicsProcess = this.createHasManyRepositoryFactoryFor('setupProcessPicsProcess', setupProcessPicRepositoryGetter);
        this.registerInclusionResolver('setupProcessPicsProcess', this.setupProcessPicsProcess.inclusionResolver);
    }
};
SetupProcessRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('SetupProcessPicRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], SetupProcessRepository);
exports.SetupProcessRepository = SetupProcessRepository;
//# sourceMappingURL=setup-process.repository.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessPicRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SetupProcessPicRepository = class SetupProcessPicRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, orderProductRepositoryGetter, setupProcessRepositoryGetter) {
        super(models_1.SetupProcessPic, dataSource);
        this.orderProductRepositoryGetter = orderProductRepositoryGetter;
        this.setupProcessRepositoryGetter = setupProcessRepositoryGetter;
        this.SetupProcess = this.createBelongsToAccessorFor('SetupProcess', setupProcessRepositoryGetter);
        this.registerInclusionResolver('SetupProcess', this.SetupProcess.inclusionResolver);
        this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter);
        this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
    }
};
SetupProcessPicRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('OrderProductRepository')), tslib_1.__param(2, repository_1.repository.getter('SetupProcessRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function, Function])
], SetupProcessPicRepository);
exports.SetupProcessPicRepository = SetupProcessPicRepository;
//# sourceMappingURL=setup-process-pic.repository.js.map
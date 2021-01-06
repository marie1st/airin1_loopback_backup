"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupCostRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SetupCostRepository = class SetupCostRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, orderProductRepositoryGetter) {
        super(models_1.SetupCost, dataSource);
        this.orderProductRepositoryGetter = orderProductRepositoryGetter;
        this.orderProduct = this.createBelongsToAccessorFor('orderProduct', orderProductRepositoryGetter);
        this.registerInclusionResolver('orderProduct', this.orderProduct.inclusionResolver);
    }
};
SetupCostRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('OrderProductRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], SetupCostRepository);
exports.SetupCostRepository = SetupCostRepository;
//# sourceMappingURL=setup-cost.repository.js.map
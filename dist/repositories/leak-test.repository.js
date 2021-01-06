"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakTestRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let LeakTestRepository = class LeakTestRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, orderProductRepositoryGetter) {
        super(models_1.LeakTest, dataSource);
        this.orderProductRepositoryGetter = orderProductRepositoryGetter;
        this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter);
        this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
    }
};
LeakTestRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('OrderProductRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], LeakTestRepository);
exports.LeakTestRepository = LeakTestRepository;
//# sourceMappingURL=leak-test.repository.js.map
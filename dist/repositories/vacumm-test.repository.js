"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacummTestRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VacummTestRepository = class VacummTestRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, orderProductRepositoryGetter) {
        super(models_1.VacummTest, dataSource);
        this.orderProductRepositoryGetter = orderProductRepositoryGetter;
        this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter);
        this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
    }
};
VacummTestRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('OrderProductRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], VacummTestRepository);
exports.VacummTestRepository = VacummTestRepository;
//# sourceMappingURL=vacumm-test.repository.js.map
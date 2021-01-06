"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPriceRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ItemPriceRepository = class ItemPriceRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productNPriceRepositoryGetter) {
        super(models_1.ItemPrice, dataSource);
        this.productNPriceRepositoryGetter = productNPriceRepositoryGetter;
        this.productNPrice = this.createHasOneRepositoryFactoryFor('productNPrice', productNPriceRepositoryGetter);
        this.registerInclusionResolver('productNPrice', this.productNPrice.inclusionResolver);
    }
};
ItemPriceRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('ProductNPriceRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function])
], ItemPriceRepository);
exports.ItemPriceRepository = ItemPriceRepository;
//# sourceMappingURL=item-price.repository.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNPriceItemPriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductNPriceItemPriceController = class ProductNPriceItemPriceController {
    constructor(productNPriceRepository) {
        this.productNPriceRepository = productNPriceRepository;
    }
    async getItemPrice(id) {
        return this.productNPriceRepository.ItemPrice(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/product-n-prices/{id}/item-price', {
        responses: {
            '200': {
                description: 'ItemPrice belonging to ProductNPrice',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.ItemPrice) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductNPriceItemPriceController.prototype, "getItemPrice", null);
ProductNPriceItemPriceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ProductNPriceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductNPriceRepository])
], ProductNPriceItemPriceController);
exports.ProductNPriceItemPriceController = ProductNPriceItemPriceController;
//# sourceMappingURL=product-n-price-item-price.controller.js.map
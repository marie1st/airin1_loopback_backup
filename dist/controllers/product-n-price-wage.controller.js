"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNPriceWageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductNPriceWageController = class ProductNPriceWageController {
    constructor(productNPriceRepository) {
        this.productNPriceRepository = productNPriceRepository;
    }
    async getWage(id) {
        return this.productNPriceRepository.Wage(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/product-n-prices/{id}/wage', {
        responses: {
            '200': {
                description: 'Wage belonging to ProductNPrice',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Wage) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductNPriceWageController.prototype, "getWage", null);
ProductNPriceWageController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ProductNPriceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductNPriceRepository])
], ProductNPriceWageController);
exports.ProductNPriceWageController = ProductNPriceWageController;
//# sourceMappingURL=product-n-price-wage.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLiquidOrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AddLiquidOrderProductController = class AddLiquidOrderProductController {
    constructor(addLiquidRepository) {
        this.addLiquidRepository = addLiquidRepository;
    }
    async getOrderProduct(id) {
        return this.addLiquidRepository.OrderProduct(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/add-liquids/{id}/order-product', {
        responses: {
            '200': {
                description: 'OrderProduct belonging to AddLiquid',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.OrderProduct) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidOrderProductController.prototype, "getOrderProduct", null);
AddLiquidOrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AddLiquidRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AddLiquidRepository])
], AddLiquidOrderProductController);
exports.AddLiquidOrderProductController = AddLiquidOrderProductController;
//# sourceMappingURL=add-liquid-order-product.controller.js.map
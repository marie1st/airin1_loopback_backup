"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupCostOrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupCostOrderProductController = class SetupCostOrderProductController {
    constructor(setupCostRepository) {
        this.setupCostRepository = setupCostRepository;
    }
    async getOrderProduct(id) {
        return this.setupCostRepository.orderProduct(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/setup-costs/{id}/order-product', {
        responses: {
            '200': {
                description: 'OrderProduct belonging to SetupCost',
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
], SetupCostOrderProductController.prototype, "getOrderProduct", null);
SetupCostOrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupCostRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupCostRepository])
], SetupCostOrderProductController);
exports.SetupCostOrderProductController = SetupCostOrderProductController;
//# sourceMappingURL=setup-cost-order-product.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupFrabicProtectOrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupFrabicProtectOrderProductController = class SetupFrabicProtectOrderProductController {
    constructor(setupFrabicProtectRepository) {
        this.setupFrabicProtectRepository = setupFrabicProtectRepository;
    }
    async getOrderProduct(id) {
        return this.setupFrabicProtectRepository.OrderProduct(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/setup-frabic-protects/{id}/order-product', {
        responses: {
            '200': {
                description: 'OrderProduct belonging to SetupFrabicProtect',
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
], SetupFrabicProtectOrderProductController.prototype, "getOrderProduct", null);
SetupFrabicProtectOrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupFrabicProtectRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupFrabicProtectRepository])
], SetupFrabicProtectOrderProductController);
exports.SetupFrabicProtectOrderProductController = SetupFrabicProtectOrderProductController;
//# sourceMappingURL=setup-frabic-protect-order-product.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawUsedEquipmentOrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WithdrawUsedEquipmentOrderProductController = class WithdrawUsedEquipmentOrderProductController {
    constructor(withdrawUsedEquipmentRepository) {
        this.withdrawUsedEquipmentRepository = withdrawUsedEquipmentRepository;
    }
    async getOrderProduct(id) {
        return this.withdrawUsedEquipmentRepository.OrderProduct(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/withdraw-used-equipments/{id}/order-product', {
        responses: {
            '200': {
                description: 'OrderProduct belonging to WithdrawUsedEquipment',
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
], WithdrawUsedEquipmentOrderProductController.prototype, "getOrderProduct", null);
WithdrawUsedEquipmentOrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WithdrawUsedEquipmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WithdrawUsedEquipmentRepository])
], WithdrawUsedEquipmentOrderProductController);
exports.WithdrawUsedEquipmentOrderProductController = WithdrawUsedEquipmentOrderProductController;
//# sourceMappingURL=withdraw-used-equipment-order-product.controller.js.map
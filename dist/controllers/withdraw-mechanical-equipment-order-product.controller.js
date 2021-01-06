"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawMechanicalEquipmentOrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WithdrawMechanicalEquipmentOrderProductController = class WithdrawMechanicalEquipmentOrderProductController {
    constructor(withdrawMechanicalEquipmentRepository) {
        this.withdrawMechanicalEquipmentRepository = withdrawMechanicalEquipmentRepository;
    }
    async getOrderProduct(id) {
        return this.withdrawMechanicalEquipmentRepository.OrderProduct(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/withdraw-mechanical-equipments/{id}/order-product', {
        responses: {
            '200': {
                description: 'OrderProduct belonging to WithdrawMechanicalEquipment',
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
], WithdrawMechanicalEquipmentOrderProductController.prototype, "getOrderProduct", null);
WithdrawMechanicalEquipmentOrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WithdrawMechanicalEquipmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WithdrawMechanicalEquipmentRepository])
], WithdrawMechanicalEquipmentOrderProductController);
exports.WithdrawMechanicalEquipmentOrderProductController = WithdrawMechanicalEquipmentOrderProductController;
//# sourceMappingURL=withdraw-mechanical-equipment-order-product.controller.js.map
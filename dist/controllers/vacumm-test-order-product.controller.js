"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacummTestOrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VacummTestOrderProductController = class VacummTestOrderProductController {
    constructor(vacummTestRepository) {
        this.vacummTestRepository = vacummTestRepository;
    }
    async getOrderProduct(id) {
        return this.vacummTestRepository.OrderProduct(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/vacumm-tests/{id}/order-product', {
        responses: {
            '200': {
                description: 'OrderProduct belonging to VacummTest',
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
], VacummTestOrderProductController.prototype, "getOrderProduct", null);
VacummTestOrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.VacummTestRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VacummTestRepository])
], VacummTestOrderProductController);
exports.VacummTestOrderProductController = VacummTestOrderProductController;
//# sourceMappingURL=vacumm-test-order-product.controller.js.map
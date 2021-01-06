"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WarehouseController = class WarehouseController {
    constructor(warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }
    async create(warehouse) {
        return this.warehouseRepository.create(warehouse);
    }
    async count(where) {
        return this.warehouseRepository.count(where);
    }
    async find(filter) {
        return this.warehouseRepository.find(filter);
    }
    async updateAll(warehouse, where) {
        return this.warehouseRepository.updateAll(warehouse, where);
    }
    async findById(id, filter) {
        return this.warehouseRepository.findById(id, filter);
    }
    async updateById(id, warehouse) {
        await this.warehouseRepository.updateById(id, warehouse);
    }
    async replaceById(id, warehouse) {
        await this.warehouseRepository.replaceById(id, warehouse);
    }
    async deleteById(id) {
        await this.warehouseRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/warehouses', {
        responses: {
            '200': {
                description: 'Warehouse model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Warehouse) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Warehouse, {
                    title: 'NewWarehouse',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Warehouse]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/warehouses/count', {
        responses: {
            '200': {
                description: 'Warehouse model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Warehouse)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/warehouses', {
        responses: {
            '200': {
                description: 'Array of Warehouse model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Warehouse, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Warehouse)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/warehouses', {
        responses: {
            '200': {
                description: 'Warehouse PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Warehouse, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Warehouse)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Warehouse, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/warehouses/{id}', {
        responses: {
            '200': {
                description: 'Warehouse model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Warehouse, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Warehouse, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/warehouses/{id}', {
        responses: {
            '204': {
                description: 'Warehouse PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Warehouse, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Warehouse]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/warehouses/{id}', {
        responses: {
            '204': {
                description: 'Warehouse PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Warehouse]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/warehouses/{id}', {
        responses: {
            '204': {
                description: 'Warehouse DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseController.prototype, "deleteById", null);
WarehouseController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WarehouseRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WarehouseRepository])
], WarehouseController);
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse.controller.js.map
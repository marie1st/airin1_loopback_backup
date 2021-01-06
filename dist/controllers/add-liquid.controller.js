"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLiquidController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AddLiquidController = class AddLiquidController {
    constructor(addLiquidRepository) {
        this.addLiquidRepository = addLiquidRepository;
    }
    async create(addLiquid) {
        return this.addLiquidRepository.create(addLiquid);
    }
    async count(where) {
        return this.addLiquidRepository.count(where);
    }
    async find(filter) {
        return this.addLiquidRepository.find(filter);
    }
    async updateAll(addLiquid, where) {
        return this.addLiquidRepository.updateAll(addLiquid, where);
    }
    async findById(id, filter) {
        return this.addLiquidRepository.findById(id, filter);
    }
    async updateById(id, addLiquid) {
        await this.addLiquidRepository.updateById(id, addLiquid);
    }
    async replaceById(id, addLiquid) {
        await this.addLiquidRepository.replaceById(id, addLiquid);
    }
    async deleteById(id) {
        await this.addLiquidRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/add-liquids', {
        responses: {
            '200': {
                description: 'AddLiquid model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AddLiquid) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AddLiquid, {
                    title: 'NewAddLiquid',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AddLiquid]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/add-liquids/count', {
        responses: {
            '200': {
                description: 'AddLiquid model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AddLiquid)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/add-liquids', {
        responses: {
            '200': {
                description: 'Array of AddLiquid model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.AddLiquid, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AddLiquid)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/add-liquids', {
        responses: {
            '200': {
                description: 'AddLiquid PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AddLiquid, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AddLiquid)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AddLiquid, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/add-liquids/{id}', {
        responses: {
            '200': {
                description: 'AddLiquid model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.AddLiquid, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AddLiquid, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/add-liquids/{id}', {
        responses: {
            '204': {
                description: 'AddLiquid PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AddLiquid, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AddLiquid]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/add-liquids/{id}', {
        responses: {
            '204': {
                description: 'AddLiquid PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AddLiquid]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/add-liquids/{id}', {
        responses: {
            '204': {
                description: 'AddLiquid DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AddLiquidController.prototype, "deleteById", null);
AddLiquidController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AddLiquidRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AddLiquidRepository])
], AddLiquidController);
exports.AddLiquidController = AddLiquidController;
//# sourceMappingURL=add-liquid.controller.js.map
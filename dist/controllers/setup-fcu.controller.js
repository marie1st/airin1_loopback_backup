"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupFcuController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupFcuController = class SetupFcuController {
    constructor(setupFcuRepository) {
        this.setupFcuRepository = setupFcuRepository;
    }
    async create(setupFcu) {
        return this.setupFcuRepository.create(setupFcu);
    }
    async count(where) {
        return this.setupFcuRepository.count(where);
    }
    async find(filter) {
        return this.setupFcuRepository.find(filter);
    }
    async updateAll(setupFcu, where) {
        return this.setupFcuRepository.updateAll(setupFcu, where);
    }
    async findById(id, filter) {
        return this.setupFcuRepository.findById(id, filter);
    }
    async updateById(id, setupFcu) {
        await this.setupFcuRepository.updateById(id, setupFcu);
    }
    async replaceById(id, setupFcu) {
        await this.setupFcuRepository.replaceById(id, setupFcu);
    }
    async deleteById(id) {
        await this.setupFcuRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-fcus', {
        responses: {
            '200': {
                description: 'SetupFcu model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupFcu) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFcu, {
                    title: 'NewSetupFcu',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupFcu]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-fcus/count', {
        responses: {
            '200': {
                description: 'SetupFcu model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupFcu)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-fcus', {
        responses: {
            '200': {
                description: 'Array of SetupFcu model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupFcu, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupFcu)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-fcus', {
        responses: {
            '200': {
                description: 'SetupFcu PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFcu, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupFcu)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupFcu, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-fcus/{id}', {
        responses: {
            '200': {
                description: 'SetupFcu model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupFcu, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupFcu, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-fcus/{id}', {
        responses: {
            '204': {
                description: 'SetupFcu PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFcu, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupFcu]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-fcus/{id}', {
        responses: {
            '204': {
                description: 'SetupFcu PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupFcu]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-fcus/{id}', {
        responses: {
            '204': {
                description: 'SetupFcu DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFcuController.prototype, "deleteById", null);
SetupFcuController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupFcuRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupFcuRepository])
], SetupFcuController);
exports.SetupFcuController = SetupFcuController;
//# sourceMappingURL=setup-fcu.controller.js.map
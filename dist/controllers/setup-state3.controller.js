"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupState3Controller = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupState3Controller = class SetupState3Controller {
    constructor(setupState3Repository) {
        this.setupState3Repository = setupState3Repository;
    }
    async create(setupState3) {
        return this.setupState3Repository.create(setupState3);
    }
    async count(where) {
        return this.setupState3Repository.count(where);
    }
    async find(filter) {
        return this.setupState3Repository.find(filter);
    }
    async updateAll(setupState3, where) {
        return this.setupState3Repository.updateAll(setupState3, where);
    }
    async findById(id, filter) {
        return this.setupState3Repository.findById(id, filter);
    }
    async updateById(id, setupState3) {
        await this.setupState3Repository.updateById(id, setupState3);
    }
    async replaceById(id, setupState3) {
        await this.setupState3Repository.replaceById(id, setupState3);
    }
    async deleteById(id) {
        await this.setupState3Repository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-state3s', {
        responses: {
            '200': {
                description: 'SetupState3 model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupState3) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupState3, {
                    title: 'NewSetupState3',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupState3]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-state3s/count', {
        responses: {
            '200': {
                description: 'SetupState3 model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupState3)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-state3s', {
        responses: {
            '200': {
                description: 'Array of SetupState3 model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupState3, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupState3)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-state3s', {
        responses: {
            '200': {
                description: 'SetupState3 PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupState3, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupState3)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupState3, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-state3s/{id}', {
        responses: {
            '200': {
                description: 'SetupState3 model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupState3, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupState3, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-state3s/{id}', {
        responses: {
            '204': {
                description: 'SetupState3 PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupState3, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupState3]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-state3s/{id}', {
        responses: {
            '204': {
                description: 'SetupState3 PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupState3]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-state3s/{id}', {
        responses: {
            '204': {
                description: 'SetupState3 DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupState3Controller.prototype, "deleteById", null);
SetupState3Controller = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupState3Repository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupState3Repository])
], SetupState3Controller);
exports.SetupState3Controller = SetupState3Controller;
//# sourceMappingURL=setup-state3.controller.js.map
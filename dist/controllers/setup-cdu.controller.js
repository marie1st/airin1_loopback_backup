"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupCduController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupCduController = class SetupCduController {
    constructor(setupCduRepository) {
        this.setupCduRepository = setupCduRepository;
    }
    async create(setupCdu) {
        return this.setupCduRepository.create(setupCdu);
    }
    async count(where) {
        return this.setupCduRepository.count(where);
    }
    async find(filter) {
        return this.setupCduRepository.find(filter);
    }
    async updateAll(setupCdu, where) {
        return this.setupCduRepository.updateAll(setupCdu, where);
    }
    async findById(id, filter) {
        return this.setupCduRepository.findById(id, filter);
    }
    async updateById(id, setupCdu) {
        await this.setupCduRepository.updateById(id, setupCdu);
    }
    async replaceById(id, setupCdu) {
        await this.setupCduRepository.replaceById(id, setupCdu);
    }
    async deleteById(id) {
        await this.setupCduRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-cdus', {
        responses: {
            '200': {
                description: 'SetupCdu model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupCdu) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupCdu, {
                    title: 'NewSetupCdu',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupCdu]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-cdus/count', {
        responses: {
            '200': {
                description: 'SetupCdu model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupCdu)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-cdus', {
        responses: {
            '200': {
                description: 'Array of SetupCdu model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupCdu, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupCdu)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-cdus', {
        responses: {
            '200': {
                description: 'SetupCdu PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupCdu, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupCdu)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupCdu, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-cdus/{id}', {
        responses: {
            '200': {
                description: 'SetupCdu model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupCdu, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupCdu, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-cdus/{id}', {
        responses: {
            '204': {
                description: 'SetupCdu PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupCdu, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupCdu]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-cdus/{id}', {
        responses: {
            '204': {
                description: 'SetupCdu PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupCdu]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-cdus/{id}', {
        responses: {
            '204': {
                description: 'SetupCdu DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCduController.prototype, "deleteById", null);
SetupCduController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupCduRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupCduRepository])
], SetupCduController);
exports.SetupCduController = SetupCduController;
//# sourceMappingURL=setup-cdu.controller.js.map
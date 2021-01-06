"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupPipeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupPipeController = class SetupPipeController {
    constructor(setupPipeRepository) {
        this.setupPipeRepository = setupPipeRepository;
    }
    async create(setupPipe) {
        return this.setupPipeRepository.create(setupPipe);
    }
    async count(where) {
        return this.setupPipeRepository.count(where);
    }
    async find(filter) {
        return this.setupPipeRepository.find(filter);
    }
    async updateAll(setupPipe, where) {
        return this.setupPipeRepository.updateAll(setupPipe, where);
    }
    async findById(id, filter) {
        return this.setupPipeRepository.findById(id, filter);
    }
    async updateById(id, setupPipe) {
        await this.setupPipeRepository.updateById(id, setupPipe);
    }
    async replaceById(id, setupPipe) {
        await this.setupPipeRepository.replaceById(id, setupPipe);
    }
    async deleteById(id) {
        await this.setupPipeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-pipes', {
        responses: {
            '200': {
                description: 'SetupPipe model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupPipe) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupPipe, {
                    title: 'NewSetupPipe',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupPipe]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-pipes/count', {
        responses: {
            '200': {
                description: 'SetupPipe model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-pipes', {
        responses: {
            '200': {
                description: 'Array of SetupPipe model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupPipe, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-pipes', {
        responses: {
            '200': {
                description: 'SetupPipe PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupPipe, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupPipe, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-pipes/{id}', {
        responses: {
            '200': {
                description: 'SetupPipe model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupPipe, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupPipe, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-pipes/{id}', {
        responses: {
            '204': {
                description: 'SetupPipe PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupPipe, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupPipe]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-pipes/{id}', {
        responses: {
            '204': {
                description: 'SetupPipe PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupPipe]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-pipes/{id}', {
        responses: {
            '204': {
                description: 'SetupPipe DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupPipeController.prototype, "deleteById", null);
SetupPipeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupPipeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupPipeRepository])
], SetupPipeController);
exports.SetupPipeController = SetupPipeController;
//# sourceMappingURL=setup-pipe.controller.js.map
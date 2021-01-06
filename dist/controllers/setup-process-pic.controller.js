"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessPicController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupProcessPicController = class SetupProcessPicController {
    constructor(setupProcessPicRepository) {
        this.setupProcessPicRepository = setupProcessPicRepository;
    }
    async create(setupProcessPic) {
        return this.setupProcessPicRepository.create(setupProcessPic);
    }
    async count(where) {
        return this.setupProcessPicRepository.count(where);
    }
    async find(filter) {
        return this.setupProcessPicRepository.find(filter);
    }
    async updateAll(setupProcessPic, where) {
        return this.setupProcessPicRepository.updateAll(setupProcessPic, where);
    }
    async findById(id, filter) {
        return this.setupProcessPicRepository.findById(id, filter);
    }
    async updateById(id, setupProcessPic) {
        await this.setupProcessPicRepository.updateById(id, setupProcessPic);
    }
    async replaceById(id, setupProcessPic) {
        await this.setupProcessPicRepository.replaceById(id, setupProcessPic);
    }
    async deleteById(id) {
        await this.setupProcessPicRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-process-pics', {
        responses: {
            '200': {
                description: 'SetupProcessPic model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, {
                    title: 'NewSetupProcessPic',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupProcessPic]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-process-pics/count', {
        responses: {
            '200': {
                description: 'SetupProcessPic model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupProcessPic)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-process-pics', {
        responses: {
            '200': {
                description: 'Array of SetupProcessPic model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupProcessPic, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupProcessPic)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-process-pics', {
        responses: {
            '200': {
                description: 'SetupProcessPic PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupProcessPic)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupProcessPic, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-process-pics/{id}', {
        responses: {
            '200': {
                description: 'SetupProcessPic model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupProcessPic, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-process-pics/{id}', {
        responses: {
            '204': {
                description: 'SetupProcessPic PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupProcessPic]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-process-pics/{id}', {
        responses: {
            '204': {
                description: 'SetupProcessPic PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupProcessPic]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-process-pics/{id}', {
        responses: {
            '204': {
                description: 'SetupProcessPic DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicController.prototype, "deleteById", null);
SetupProcessPicController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupProcessPicRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupProcessPicRepository])
], SetupProcessPicController);
exports.SetupProcessPicController = SetupProcessPicController;
//# sourceMappingURL=setup-process-pic.controller.js.map
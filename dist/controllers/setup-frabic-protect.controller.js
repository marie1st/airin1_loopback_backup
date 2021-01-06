"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupFrabicProtectController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupFrabicProtectController = class SetupFrabicProtectController {
    constructor(setupFrabicProtectRepository) {
        this.setupFrabicProtectRepository = setupFrabicProtectRepository;
    }
    async create(setupFrabicProtect) {
        return this.setupFrabicProtectRepository.create(setupFrabicProtect);
    }
    async count(where) {
        return this.setupFrabicProtectRepository.count(where);
    }
    async find(filter) {
        return this.setupFrabicProtectRepository.find(filter);
    }
    async updateAll(setupFrabicProtect, where) {
        return this.setupFrabicProtectRepository.updateAll(setupFrabicProtect, where);
    }
    async findById(id, filter) {
        return this.setupFrabicProtectRepository.findById(id, filter);
    }
    async updateById(id, setupFrabicProtect) {
        await this.setupFrabicProtectRepository.updateById(id, setupFrabicProtect);
    }
    async replaceById(id, setupFrabicProtect) {
        await this.setupFrabicProtectRepository.replaceById(id, setupFrabicProtect);
    }
    async deleteById(id) {
        await this.setupFrabicProtectRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-frabic-protects', {
        responses: {
            '200': {
                description: 'SetupFrabicProtect model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, {
                    title: 'NewSetupFrabicProtect',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupFrabicProtect]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-frabic-protects/count', {
        responses: {
            '200': {
                description: 'SetupFrabicProtect model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupFrabicProtect)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-frabic-protects', {
        responses: {
            '200': {
                description: 'Array of SetupFrabicProtect model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupFrabicProtect)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-frabic-protects', {
        responses: {
            '200': {
                description: 'SetupFrabicProtect PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupFrabicProtect)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupFrabicProtect, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-frabic-protects/{id}', {
        responses: {
            '200': {
                description: 'SetupFrabicProtect model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupFrabicProtect, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-frabic-protects/{id}', {
        responses: {
            '204': {
                description: 'SetupFrabicProtect PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupFrabicProtect]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-frabic-protects/{id}', {
        responses: {
            '204': {
                description: 'SetupFrabicProtect PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupFrabicProtect]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-frabic-protects/{id}', {
        responses: {
            '204': {
                description: 'SetupFrabicProtect DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupFrabicProtectController.prototype, "deleteById", null);
SetupFrabicProtectController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupFrabicProtectRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupFrabicProtectRepository])
], SetupFrabicProtectController);
exports.SetupFrabicProtectController = SetupFrabicProtectController;
//# sourceMappingURL=setup-frabic-protect.controller.js.map
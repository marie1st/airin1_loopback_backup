"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipeSysNElecController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PipeSysNElecController = class PipeSysNElecController {
    constructor(pipeSysNElecRepository) {
        this.pipeSysNElecRepository = pipeSysNElecRepository;
    }
    async create(pipeSysNElec) {
        return this.pipeSysNElecRepository.create(pipeSysNElec);
    }
    async count(where) {
        return this.pipeSysNElecRepository.count(where);
    }
    async find(filter) {
        return this.pipeSysNElecRepository.find(filter);
    }
    async updateAll(pipeSysNElec, where) {
        return this.pipeSysNElecRepository.updateAll(pipeSysNElec, where);
    }
    async findById(id, filter) {
        return this.pipeSysNElecRepository.findById(id, filter);
    }
    async updateById(id, pipeSysNElec) {
        await this.pipeSysNElecRepository.updateById(id, pipeSysNElec);
    }
    async replaceById(id, pipeSysNElec) {
        await this.pipeSysNElecRepository.replaceById(id, pipeSysNElec);
    }
    async deleteById(id) {
        await this.pipeSysNElecRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/pipe-sys-n-elecs', {
        responses: {
            '200': {
                description: 'PipeSysNElec model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec, {
                    title: 'NewPipeSysNElec',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PipeSysNElec]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/pipe-sys-n-elecs/count', {
        responses: {
            '200': {
                description: 'PipeSysNElec model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PipeSysNElec)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/pipe-sys-n-elecs', {
        responses: {
            '200': {
                description: 'Array of PipeSysNElec model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.PipeSysNElec, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PipeSysNElec)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/pipe-sys-n-elecs', {
        responses: {
            '200': {
                description: 'PipeSysNElec PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PipeSysNElec)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PipeSysNElec, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/pipe-sys-n-elecs/{id}', {
        responses: {
            '200': {
                description: 'PipeSysNElec model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PipeSysNElec, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/pipe-sys-n-elecs/{id}', {
        responses: {
            '204': {
                description: 'PipeSysNElec PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PipeSysNElec]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/pipe-sys-n-elecs/{id}', {
        responses: {
            '204': {
                description: 'PipeSysNElec PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PipeSysNElec]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/pipe-sys-n-elecs/{id}', {
        responses: {
            '204': {
                description: 'PipeSysNElec DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PipeSysNElecController.prototype, "deleteById", null);
PipeSysNElecController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PipeSysNElecRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PipeSysNElecRepository])
], PipeSysNElecController);
exports.PipeSysNElecController = PipeSysNElecController;
//# sourceMappingURL=pipe-sys-n-elec.controller.js.map
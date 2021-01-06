"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WageController = class WageController {
    constructor(wageRepository) {
        this.wageRepository = wageRepository;
    }
    async create(wage) {
        return this.wageRepository.create(wage);
    }
    async count(where) {
        return this.wageRepository.count(where);
    }
    async find(filter) {
        return this.wageRepository.find(filter);
    }
    async updateAll(wage, where) {
        return this.wageRepository.updateAll(wage, where);
    }
    async findById(id, filter) {
        return this.wageRepository.findById(id, filter);
    }
    async updateById(id, wage) {
        await this.wageRepository.updateById(id, wage);
    }
    async replaceById(id, wage) {
        await this.wageRepository.replaceById(id, wage);
    }
    async deleteById(id) {
        await this.wageRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/wages', {
        responses: {
            '200': {
                description: 'Wage model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Wage) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Wage, {
                    title: 'NewWage',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Wage]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/wages/count', {
        responses: {
            '200': {
                description: 'Wage model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Wage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/wages', {
        responses: {
            '200': {
                description: 'Array of Wage model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Wage, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Wage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/wages', {
        responses: {
            '200': {
                description: 'Wage PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Wage, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Wage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Wage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/wages/{id}', {
        responses: {
            '200': {
                description: 'Wage model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Wage, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Wage, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/wages/{id}', {
        responses: {
            '204': {
                description: 'Wage PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Wage, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Wage]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/wages/{id}', {
        responses: {
            '204': {
                description: 'Wage PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Wage]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/wages/{id}', {
        responses: {
            '204': {
                description: 'Wage DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WageController.prototype, "deleteById", null);
WageController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WageRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WageRepository])
], WageController);
exports.WageController = WageController;
//# sourceMappingURL=wage.controller.js.map
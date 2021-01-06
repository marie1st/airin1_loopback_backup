"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakTestController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LeakTestController = class LeakTestController {
    constructor(leakTestRepository) {
        this.leakTestRepository = leakTestRepository;
    }
    async create(leakTest) {
        return this.leakTestRepository.create(leakTest);
    }
    async count(where) {
        return this.leakTestRepository.count(where);
    }
    async find(filter) {
        return this.leakTestRepository.find(filter);
    }
    async updateAll(leakTest, where) {
        return this.leakTestRepository.updateAll(leakTest, where);
    }
    async findById(id, filter) {
        return this.leakTestRepository.findById(id, filter);
    }
    async updateById(id, leakTest) {
        await this.leakTestRepository.updateById(id, leakTest);
    }
    async replaceById(id, leakTest) {
        await this.leakTestRepository.replaceById(id, leakTest);
    }
    async deleteById(id) {
        await this.leakTestRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/leak-tests', {
        responses: {
            '200': {
                description: 'LeakTest model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.LeakTest) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LeakTest, {
                    title: 'NewLeakTest',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LeakTest]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/leak-tests/count', {
        responses: {
            '200': {
                description: 'LeakTest model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.LeakTest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/leak-tests', {
        responses: {
            '200': {
                description: 'Array of LeakTest model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.LeakTest, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.LeakTest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/leak-tests', {
        responses: {
            '200': {
                description: 'LeakTest PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LeakTest, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.LeakTest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LeakTest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/leak-tests/{id}', {
        responses: {
            '200': {
                description: 'LeakTest model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.LeakTest, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.LeakTest, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/leak-tests/{id}', {
        responses: {
            '204': {
                description: 'LeakTest PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LeakTest, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.LeakTest]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/leak-tests/{id}', {
        responses: {
            '204': {
                description: 'LeakTest PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.LeakTest]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/leak-tests/{id}', {
        responses: {
            '204': {
                description: 'LeakTest DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LeakTestController.prototype, "deleteById", null);
LeakTestController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LeakTestRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LeakTestRepository])
], LeakTestController);
exports.LeakTestController = LeakTestController;
//# sourceMappingURL=leak-test.controller.js.map
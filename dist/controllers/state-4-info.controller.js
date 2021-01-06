"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State4InfoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let State4InfoController = class State4InfoController {
    constructor(state4InfoRepository) {
        this.state4InfoRepository = state4InfoRepository;
    }
    async create(state4Info) {
        return this.state4InfoRepository.create(state4Info);
    }
    async count(where) {
        return this.state4InfoRepository.count(where);
    }
    async find(filter) {
        return this.state4InfoRepository.find(filter);
    }
    async updateAll(state4Info, where) {
        return this.state4InfoRepository.updateAll(state4Info, where);
    }
    async findById(id, filter) {
        return this.state4InfoRepository.findById(id, filter);
    }
    async updateById(id, state4Info) {
        await this.state4InfoRepository.updateById(id, state4Info);
    }
    async replaceById(id, state4Info) {
        await this.state4InfoRepository.replaceById(id, state4Info);
    }
    async deleteById(id) {
        await this.state4InfoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/state4infos', {
        responses: {
            '200': {
                description: 'State4Info model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.State4Info) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.State4Info, {
                    title: 'NewState4Info',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.State4Info]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/state4infos/count', {
        responses: {
            '200': {
                description: 'State4Info model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.State4Info)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/state4infos', {
        responses: {
            '200': {
                description: 'Array of State4Info model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.State4Info, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.State4Info)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/state4infos', {
        responses: {
            '200': {
                description: 'State4Info PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.State4Info, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.State4Info)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.State4Info, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/state4infos/{id}', {
        responses: {
            '200': {
                description: 'State4Info model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.State4Info, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.State4Info, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/state4infos/{id}', {
        responses: {
            '204': {
                description: 'State4Info PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.State4Info, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.State4Info]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/state4infos/{id}', {
        responses: {
            '204': {
                description: 'State4Info PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.State4Info]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/state4infos/{id}', {
        responses: {
            '204': {
                description: 'State4Info DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], State4InfoController.prototype, "deleteById", null);
State4InfoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.State4InfoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.State4InfoRepository])
], State4InfoController);
exports.State4InfoController = State4InfoController;
//# sourceMappingURL=state-4-info.controller.js.map
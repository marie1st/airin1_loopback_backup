"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTestingInfoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AirTestingInfoController = class AirTestingInfoController {
    constructor(airTestingInfoRepository) {
        this.airTestingInfoRepository = airTestingInfoRepository;
    }
    async create(airTestingInfo) {
        return this.airTestingInfoRepository.create(airTestingInfo);
    }
    async count(where) {
        return this.airTestingInfoRepository.count(where);
    }
    async find(filter) {
        return this.airTestingInfoRepository.find(filter);
    }
    async updateAll(airTestingInfo, where) {
        return this.airTestingInfoRepository.updateAll(airTestingInfo, where);
    }
    async findById(id, filter) {
        return this.airTestingInfoRepository.findById(id, filter);
    }
    async updateById(id, airTestingInfo) {
        await this.airTestingInfoRepository.updateById(id, airTestingInfo);
    }
    async replaceById(id, airTestingInfo) {
        await this.airTestingInfoRepository.replaceById(id, airTestingInfo);
    }
    async deleteById(id) {
        await this.airTestingInfoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/air-testing-infos', {
        responses: {
            '200': {
                description: 'AirTestingInfo model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AirTestingInfo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AirTestingInfo, {
                    title: 'NewAirTestingInfo',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AirTestingInfo]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/air-testing-infos/count', {
        responses: {
            '200': {
                description: 'AirTestingInfo model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AirTestingInfo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/air-testing-infos', {
        responses: {
            '200': {
                description: 'Array of AirTestingInfo model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.AirTestingInfo, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AirTestingInfo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/air-testing-infos', {
        responses: {
            '200': {
                description: 'AirTestingInfo PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AirTestingInfo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AirTestingInfo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AirTestingInfo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/air-testing-infos/{id}', {
        responses: {
            '200': {
                description: 'AirTestingInfo model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.AirTestingInfo, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AirTestingInfo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/air-testing-infos/{id}', {
        responses: {
            '204': {
                description: 'AirTestingInfo PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AirTestingInfo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AirTestingInfo]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/air-testing-infos/{id}', {
        responses: {
            '204': {
                description: 'AirTestingInfo PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AirTestingInfo]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/air-testing-infos/{id}', {
        responses: {
            '204': {
                description: 'AirTestingInfo DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AirTestingInfoController.prototype, "deleteById", null);
AirTestingInfoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AirTestingInfoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AirTestingInfoRepository])
], AirTestingInfoController);
exports.AirTestingInfoController = AirTestingInfoController;
//# sourceMappingURL=air-testing-info.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessSetupProcessPicController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupProcessSetupProcessPicController = class SetupProcessSetupProcessPicController {
    constructor(setupProcessRepository) {
        this.setupProcessRepository = setupProcessRepository;
    }
    async find(id, filter) {
        return this.setupProcessRepository.setupProcessPicsProcess(id).find(filter);
    }
    async create(id, setupProcessPic) {
        return this.setupProcessRepository.setupProcessPicsProcess(id).create(setupProcessPic);
    }
    async patch(id, setupProcessPic, where) {
        return this.setupProcessRepository.setupProcessPicsProcess(id).patch(setupProcessPic, where);
    }
    async delete(id, where) {
        return this.setupProcessRepository.setupProcessPicsProcess(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/setup-processes/{id}/setup-process-pics', {
        responses: {
            '200': {
                description: 'Array of SetupProcess has many SetupProcessPic',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.SetupProcessPic) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessSetupProcessPicController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/setup-processes/{id}/setup-process-pics', {
        responses: {
            '200': {
                description: 'SetupProcess model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, {
                    title: 'NewSetupProcessPicInSetupProcess',
                    exclude: ['id'],
                    optional: ['setup_process_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessSetupProcessPicController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/setup-processes/{id}/setup-process-pics', {
        responses: {
            '200': {
                description: 'SetupProcess.SetupProcessPic PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
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
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupProcessPic))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessSetupProcessPicController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/setup-processes/{id}/setup-process-pics', {
        responses: {
            '200': {
                description: 'SetupProcess.SetupProcessPic DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupProcessPic))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessSetupProcessPicController.prototype, "delete", null);
SetupProcessSetupProcessPicController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupProcessRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupProcessRepository])
], SetupProcessSetupProcessPicController);
exports.SetupProcessSetupProcessPicController = SetupProcessSetupProcessPicController;
//# sourceMappingURL=setup-process-setup-process-pic.controller.js.map
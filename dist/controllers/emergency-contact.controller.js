"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyContactController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmergencyContactController = class EmergencyContactController {
    constructor(emergencyContactRepository) {
        this.emergencyContactRepository = emergencyContactRepository;
    }
    async create(emergencyContact) {
        return this.emergencyContactRepository.create(emergencyContact);
    }
    async count(where) {
        return this.emergencyContactRepository.count(where);
    }
    async find(filter) {
        return this.emergencyContactRepository.find(filter);
    }
    async updateAll(emergencyContact, where) {
        return this.emergencyContactRepository.updateAll(emergencyContact, where);
    }
    async findById(id, filter) {
        return this.emergencyContactRepository.findById(id, filter);
    }
    async updateById(id, emergencyContact) {
        await this.emergencyContactRepository.updateById(id, emergencyContact);
    }
    async replaceById(id, emergencyContact) {
        await this.emergencyContactRepository.replaceById(id, emergencyContact);
    }
    async deleteById(id) {
        await this.emergencyContactRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/emergency-contacts', {
        responses: {
            '200': {
                description: 'EmergencyContact model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.EmergencyContact) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.EmergencyContact, {
                    title: 'NewEmergencyContact',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.EmergencyContact]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/emergency-contacts/count', {
        responses: {
            '200': {
                description: 'EmergencyContact model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.EmergencyContact)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/emergency-contacts', {
        responses: {
            '200': {
                description: 'Array of EmergencyContact model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.EmergencyContact, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.EmergencyContact)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/emergency-contacts', {
        responses: {
            '200': {
                description: 'EmergencyContact PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.EmergencyContact, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.EmergencyContact)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.EmergencyContact, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/emergency-contacts/{id}', {
        responses: {
            '200': {
                description: 'EmergencyContact model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.EmergencyContact, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.EmergencyContact, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/emergency-contacts/{id}', {
        responses: {
            '204': {
                description: 'EmergencyContact PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.EmergencyContact, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.EmergencyContact]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/emergency-contacts/{id}', {
        responses: {
            '204': {
                description: 'EmergencyContact PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.EmergencyContact]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/emergency-contacts/{id}', {
        responses: {
            '204': {
                description: 'EmergencyContact DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EmergencyContactController.prototype, "deleteById", null);
EmergencyContactController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EmergencyContactRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmergencyContactRepository])
], EmergencyContactController);
exports.EmergencyContactController = EmergencyContactController;
//# sourceMappingURL=emergency-contact.controller.js.map
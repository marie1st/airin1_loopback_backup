"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessPicSetupProcessController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupProcessPicSetupProcessController = class SetupProcessPicSetupProcessController {
    constructor(setupProcessPicRepository) {
        this.setupProcessPicRepository = setupProcessPicRepository;
    }
    async getSetupProcess(id) {
        return this.setupProcessPicRepository.SetupProcess(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/setup-process-pics/{id}/setup-process', {
        responses: {
            '200': {
                description: 'SetupProcess belonging to SetupProcessPic',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.SetupProcess) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessPicSetupProcessController.prototype, "getSetupProcess", null);
SetupProcessPicSetupProcessController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupProcessPicRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupProcessPicRepository])
], SetupProcessPicSetupProcessController);
exports.SetupProcessPicSetupProcessController = SetupProcessPicSetupProcessController;
//# sourceMappingURL=setup-process-pic-setup-process.controller.js.map
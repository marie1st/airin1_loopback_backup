"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcess = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const setup_process_pic_model_1 = require("./setup-process-pic.model");
let SetupProcess = class SetupProcess extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], SetupProcess.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], SetupProcess.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => setup_process_pic_model_1.SetupProcessPic, { keyTo: 'id' }),
    tslib_1.__metadata("design:type", Array)
], SetupProcess.prototype, "setupProcessPics", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => setup_process_pic_model_1.SetupProcessPic, { keyTo: 'setup_process_id' }),
    tslib_1.__metadata("design:type", Array)
], SetupProcess.prototype, "setupProcessPicsProcess", void 0);
SetupProcess = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], SetupProcess);
exports.SetupProcess = SetupProcess;
//# sourceMappingURL=setup-process.model.js.map
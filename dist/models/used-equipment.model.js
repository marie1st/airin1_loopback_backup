"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedEquipment = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let UsedEquipment = class UsedEquipment extends repository_1.Entity {
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
], UsedEquipment.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UsedEquipment.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UsedEquipment.prototype, "brand", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UsedEquipment.prototype, "classifier", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UsedEquipment.prototype, "amount", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UsedEquipment.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], UsedEquipment.prototype, "created_at", void 0);
UsedEquipment = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UsedEquipment);
exports.UsedEquipment = UsedEquipment;
//# sourceMappingURL=used-equipment.model.js.map
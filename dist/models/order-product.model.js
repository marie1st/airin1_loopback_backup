"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProduct = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const customer_model_1 = require("./customer.model");
const withdraw_used_equipment_model_1 = require("./withdraw-used-equipment.model");
const withdraw_mechanical_equipment_model_1 = require("./withdraw-mechanical-equipment.model");
const withdraw_money_model_1 = require("./withdraw-money.model");
const employee_working_model_1 = require("./employee-working.model");
const setup_process_pic_model_1 = require("./setup-process-pic.model");
const setup_cost_model_1 = require("./setup-cost.model");
const setup_frabic_protect_model_1 = require("./setup-frabic-protect.model");
const setup_fcu_model_1 = require("./setup-fcu.model");
const setup_pipe_model_1 = require("./setup-pipe.model");
const setup_cdu_model_1 = require("./setup-cdu.model");
const pipe_sys_n_elec_model_1 = require("./pipe-sys-n-elec.model");
const leak_test_model_1 = require("./leak-test.model");
const vacumm_test_model_1 = require("./vacumm-test.model");
const add_liquid_model_1 = require("./add-liquid.model");
let OrderProduct = class OrderProduct extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "order_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "brand", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "type_inverter", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "type_cdu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "type_fcu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "model", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "appointment_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "time_period", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "type_of_work", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "amount", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "product", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "state", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "created_at", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => customer_model_1.Customer, { name: 'id' }),
    tslib_1.__metadata("design:type", String)
], OrderProduct.prototype, "order_by", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => withdraw_used_equipment_model_1.WithdrawUsedEquipment, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", Array)
], OrderProduct.prototype, "withdrawUsedEquipments", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => withdraw_mechanical_equipment_model_1.WithdrawMechanicalEquipment, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", Array)
], OrderProduct.prototype, "withdrawMechanicalEquipments", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => withdraw_money_model_1.WithdrawMoney, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", withdraw_money_model_1.WithdrawMoney)
], OrderProduct.prototype, "withdrawMoney", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => employee_working_model_1.EmployeeWorking, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", employee_working_model_1.EmployeeWorking)
], OrderProduct.prototype, "employeeWorking", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => setup_process_pic_model_1.SetupProcessPic, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", setup_process_pic_model_1.SetupProcessPic)
], OrderProduct.prototype, "setupProcessPic", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => setup_cost_model_1.SetupCost, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", setup_cost_model_1.SetupCost)
], OrderProduct.prototype, "setupCost", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => setup_frabic_protect_model_1.SetupFrabicProtect, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", setup_frabic_protect_model_1.SetupFrabicProtect)
], OrderProduct.prototype, "setupFrabicProtect", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => setup_fcu_model_1.SetupFcu, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", setup_fcu_model_1.SetupFcu)
], OrderProduct.prototype, "setupFcu", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => setup_pipe_model_1.SetupPipe, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", setup_pipe_model_1.SetupPipe)
], OrderProduct.prototype, "setupPipe", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => setup_cdu_model_1.SetupCdu, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", setup_cdu_model_1.SetupCdu)
], OrderProduct.prototype, "setupCdu", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => pipe_sys_n_elec_model_1.PipeSysNElec, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", pipe_sys_n_elec_model_1.PipeSysNElec)
], OrderProduct.prototype, "pipeSysNElec", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => leak_test_model_1.LeakTest, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", leak_test_model_1.LeakTest)
], OrderProduct.prototype, "leakTest", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => vacumm_test_model_1.VacummTest, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", vacumm_test_model_1.VacummTest)
], OrderProduct.prototype, "vacummTest", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => add_liquid_model_1.AddLiquid, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", add_liquid_model_1.AddLiquid)
], OrderProduct.prototype, "addLiquid", void 0);
OrderProduct = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], OrderProduct);
exports.OrderProduct = OrderProduct;
//# sourceMappingURL=order-product.model.js.map
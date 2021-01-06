"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let OrderProductRepository = class OrderProductRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, withdrawUsedEquipmentRepositoryGetter, withdrawMechanicalEquipmentRepositoryGetter, withdrawMoneyRepositoryGetter, employeeWorkingRepositoryGetter, setupProcessPicRepositoryGetter, setupCostRepositoryGetter, setupFrabicProtectRepositoryGetter, setupFcuRepositoryGetter, setupPipeRepositoryGetter, setupCduRepositoryGetter, pipeSysNElecRepositoryGetter, leakTestRepositoryGetter, vacummTestRepositoryGetter, addLiquidRepositoryGetter) {
        super(models_1.OrderProduct, dataSource);
        this.withdrawUsedEquipmentRepositoryGetter = withdrawUsedEquipmentRepositoryGetter;
        this.withdrawMechanicalEquipmentRepositoryGetter = withdrawMechanicalEquipmentRepositoryGetter;
        this.withdrawMoneyRepositoryGetter = withdrawMoneyRepositoryGetter;
        this.employeeWorkingRepositoryGetter = employeeWorkingRepositoryGetter;
        this.setupProcessPicRepositoryGetter = setupProcessPicRepositoryGetter;
        this.setupCostRepositoryGetter = setupCostRepositoryGetter;
        this.setupFrabicProtectRepositoryGetter = setupFrabicProtectRepositoryGetter;
        this.setupFcuRepositoryGetter = setupFcuRepositoryGetter;
        this.setupPipeRepositoryGetter = setupPipeRepositoryGetter;
        this.setupCduRepositoryGetter = setupCduRepositoryGetter;
        this.pipeSysNElecRepositoryGetter = pipeSysNElecRepositoryGetter;
        this.leakTestRepositoryGetter = leakTestRepositoryGetter;
        this.vacummTestRepositoryGetter = vacummTestRepositoryGetter;
        this.addLiquidRepositoryGetter = addLiquidRepositoryGetter;
        this.addLiquid = this.createHasOneRepositoryFactoryFor('addLiquid', addLiquidRepositoryGetter);
        this.registerInclusionResolver('addLiquid', this.addLiquid.inclusionResolver);
        this.vacummTest = this.createHasOneRepositoryFactoryFor('vacummTest', vacummTestRepositoryGetter);
        this.registerInclusionResolver('vacummTest', this.vacummTest.inclusionResolver);
        this.leakTest = this.createHasOneRepositoryFactoryFor('leakTest', leakTestRepositoryGetter);
        this.registerInclusionResolver('leakTest', this.leakTest.inclusionResolver);
        this.pipeSysNElec = this.createHasOneRepositoryFactoryFor('pipeSysNElec', pipeSysNElecRepositoryGetter);
        this.registerInclusionResolver('pipeSysNElec', this.pipeSysNElec.inclusionResolver);
        this.setupCdu = this.createHasOneRepositoryFactoryFor('setupCdu', setupCduRepositoryGetter);
        this.registerInclusionResolver('setupCdu', this.setupCdu.inclusionResolver);
        this.setupPipe = this.createHasOneRepositoryFactoryFor('setupPipe', setupPipeRepositoryGetter);
        this.registerInclusionResolver('setupPipe', this.setupPipe.inclusionResolver);
        this.setupFcu = this.createHasOneRepositoryFactoryFor('setupFcu', setupFcuRepositoryGetter);
        this.registerInclusionResolver('setupFcu', this.setupFcu.inclusionResolver);
        this.setupFrabicProtect = this.createHasOneRepositoryFactoryFor('setupFrabicProtect', setupFrabicProtectRepositoryGetter);
        this.registerInclusionResolver('setupFrabicProtect', this.setupFrabicProtect.inclusionResolver);
        this.setupCost = this.createHasOneRepositoryFactoryFor('setupCost', setupCostRepositoryGetter);
        this.registerInclusionResolver('setupCost', this.setupCost.inclusionResolver);
        this.setupProcessPic = this.createHasOneRepositoryFactoryFor('setupProcessPic', setupProcessPicRepositoryGetter);
        this.registerInclusionResolver('setupProcessPic', this.setupProcessPic.inclusionResolver);
        this.employeeWorking = this.createHasOneRepositoryFactoryFor('employeeWorking', employeeWorkingRepositoryGetter);
        this.registerInclusionResolver('employeeWorking', this.employeeWorking.inclusionResolver);
        this.withdrawMoney = this.createHasOneRepositoryFactoryFor('withdrawMoney', withdrawMoneyRepositoryGetter);
        this.registerInclusionResolver('withdrawMoney', this.withdrawMoney.inclusionResolver);
        this.withdrawMechanicalEquipments = this.createHasManyRepositoryFactoryFor('withdrawMechanicalEquipments', withdrawMechanicalEquipmentRepositoryGetter);
        this.registerInclusionResolver('withdrawMechanicalEquipments', this.withdrawMechanicalEquipments.inclusionResolver);
        this.withdrawUsedEquipments = this.createHasManyRepositoryFactoryFor('withdrawUsedEquipments', withdrawUsedEquipmentRepositoryGetter);
        this.registerInclusionResolver('withdrawUsedEquipments', this.withdrawUsedEquipments.inclusionResolver);
    }
};
OrderProductRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.airinone')), tslib_1.__param(1, repository_1.repository.getter('WithdrawUsedEquipmentRepository')), tslib_1.__param(2, repository_1.repository.getter('WithdrawMechanicalEquipmentRepository')), tslib_1.__param(3, repository_1.repository.getter('WithdrawMoneyRepository')), tslib_1.__param(4, repository_1.repository.getter('EmployeeWorkingRepository')), tslib_1.__param(5, repository_1.repository.getter('SetupProcessPicRepository')), tslib_1.__param(6, repository_1.repository.getter('SetupCostRepository')), tslib_1.__param(7, repository_1.repository.getter('SetupFrabicProtectRepository')), tslib_1.__param(8, repository_1.repository.getter('SetupFcuRepository')), tslib_1.__param(9, repository_1.repository.getter('SetupPipeRepository')), tslib_1.__param(10, repository_1.repository.getter('SetupCduRepository')), tslib_1.__param(11, repository_1.repository.getter('PipeSysNElecRepository')), tslib_1.__param(12, repository_1.repository.getter('LeakTestRepository')), tslib_1.__param(13, repository_1.repository.getter('VacummTestRepository')), tslib_1.__param(14, repository_1.repository.getter('AddLiquidRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.AirinoneDataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], OrderProductRepository);
exports.OrderProductRepository = OrderProductRepository;
//# sourceMappingURL=order-product.repository.js.map
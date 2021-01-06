"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirinoneDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'db',
    connector: 'mysql',
    url: 'mysql://root:p@ssw0rd4321@122.155.186.154:3309/airin1_dev_db',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: ''
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let AirinoneDataSource = class AirinoneDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
AirinoneDataSource.dataSourceName = 'airinone';
AirinoneDataSource.defaultConfig = config;
AirinoneDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.airinone', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], AirinoneDataSource);
exports.AirinoneDataSource = AirinoneDataSource;
//# sourceMappingURL=airinone.datasource.js.map
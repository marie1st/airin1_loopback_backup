import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { ProblemReport, ProblemReportRelations } from '../models';
export declare class ProblemReportRepository extends DefaultCrudRepository<ProblemReport, typeof ProblemReport.prototype.id, ProblemReportRelations> {
    constructor(dataSource: AirinoneDataSource);
}

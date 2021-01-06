import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ProblemReport } from '../models';
import { ProblemReportRepository } from '../repositories';
export declare class ProblemReportController {
    problemReportRepository: ProblemReportRepository;
    constructor(problemReportRepository: ProblemReportRepository);
    create(problemReport: ProblemReport): Promise<ProblemReport>;
    count(where?: Where<ProblemReport>): Promise<Count>;
    find(filter?: Filter<ProblemReport>): Promise<ProblemReport[]>;
    updateAll(problemReport: ProblemReport, where?: Where<ProblemReport>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<ProblemReport>): Promise<ProblemReport>;
    updateById(id: number, problemReport: ProblemReport): Promise<void>;
    replaceById(id: number, problemReport: ProblemReport): Promise<void>;
    deleteById(id: number): Promise<void>;
}

import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { State4Info } from '../models';
import { State4InfoRepository } from '../repositories';
export declare class State4InfoController {
    state4InfoRepository: State4InfoRepository;
    constructor(state4InfoRepository: State4InfoRepository);
    create(state4Info: State4Info): Promise<State4Info>;
    count(where?: Where<State4Info>): Promise<Count>;
    find(filter?: Filter<State4Info>): Promise<State4Info[]>;
    updateAll(state4Info: State4Info, where?: Where<State4Info>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<State4Info>): Promise<State4Info>;
    updateById(id: number, state4Info: State4Info): Promise<void>;
    replaceById(id: number, state4Info: State4Info): Promise<void>;
    deleteById(id: number): Promise<void>;
}

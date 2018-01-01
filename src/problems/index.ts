import * as Problem01 from './001';
import * as Problem02 from './002';
import * as Problem03 from './003';
import * as Problem04 from './004';
import * as Problem05 from './005';
import * as Problem06 from './006';
import * as Problem07 from './007';
import * as Problem08 from './008';
import * as Problem09 from './009';
import * as Problem10 from './010';
import * as Problem11 from './011';
import * as Problem12 from './012';

export interface Problem {
    readonly ordinal: number;

    solve(): Promise<number>;
}

export const problems = new Map<number, () => Promise<number>>()
    .set(1, Problem01.solve)
    .set(2, Problem02.solve)
    .set(3, Problem03.solve)
    .set(4, Problem04.solve)
    .set(5, Problem05.solve)
    .set(6, Problem06.solve)
    .set(7, Problem07.solve)
    .set(8, Problem08.solve)
    .set(9, Problem09.solve)
    .set(10, Problem10.solve)
    .set(11, Problem11.solve)
    .set(12, Problem12.solve)

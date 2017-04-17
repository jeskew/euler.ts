import Problem from "../src/Problem";
import {Problem1} from '../src/problems/001';
import {Problem2} from '../src/problems/002';
import {Problem3} from '../src/problems/003';
import {Problem4} from '../src/problems/004';
import {Problem5} from '../src/problems/005';
import {Problem6} from '../src/problems/006';
import {Problem7} from "../src/problems/007";
import {Problem8} from "../src/problems/008";
import {Problem9} from "../src/problems/009";
import {Problem10} from "../src/problems/010";

const knownAnswers: Array<[Problem, number]> = [
    [Problem1, 233168],
    [Problem2, 4613732],
    [Problem3, 6857],
    [Problem4, 906609],
    [Problem5, 232792560],
    [Problem6, 25164150],
    [Problem7, 104743],
    [Problem8, 23514624000],
    [Problem9, 31875000],
    [Problem10, 142913828922],
];

describe('Solutions calculate correct answer', () => {
    for (let [problem, answer] of knownAnswers) {
        it(
            `should get ${answer} for problem #${problem.number}`,
            async () => expect(await problem.solve()).toEqual(answer)
        );
    }
});
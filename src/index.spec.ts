import {problems} from './problems';

const knownAnswers = new Map([
    [1, 233168],
    [2, 4613732],
    [3, 6857],
    [4, 906609],
    [5, 232792560],
    [6, 25164150],
    [7, 104743],
    [8, 23514624000],
    [9, 31875000],
    [10, 142913828922],
    [11, 70600674]
]);

describe('Solutions calculate correct answer', () => {
    for (const [ordinal, answer] of knownAnswers) {
        it(
            `should get ${answer} for problem #${ordinal}`,
            async () => expect(await (problems.get(ordinal) as Function)())
                .toEqual(answer)
        );
    }
});

import { collatzLength } from '../collatzLength';

/**
 * @see https://projecteuler.net/problem=14
 */
export const p014 = () => {
    let sourceOfGreatestChain = 0
    let greatestChainLength = 0
    for (let i = 1; i < 1000000; i++) {
        let chainLength = collatzLength(i);
        if (chainLength > greatestChainLength) {
            sourceOfGreatestChain = i
            greatestChainLength = chainLength
        }
    }

    return sourceOfGreatestChain
}

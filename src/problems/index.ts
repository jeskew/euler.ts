import { p001 } from './001';
import { p002 } from './002';
import { p003 } from './003';
import { p004 } from './004';
import { p005 } from './005';
import { p006 } from './006';
import { p007 } from './007';
import { p008 } from './008';
import { p009 } from './009';
import { p010 } from './010';
import { p011 } from './011';
import { p012 } from './012';
import { p013 } from './013';

const problems = new Map<number, () => number>()
    .set(1, p001)
    .set(2, p002)
    .set(3, p003)
    .set(4, p004)
    .set(5, p005)
    .set(6, p006)
    .set(7, p007)
    .set(8, p008)
    .set(9, p009)
    .set(10, p010)
    .set(11, p011)
    .set(12, p012)
    .set(13, p013);

export {
    problems,
    p001,
    p002,
    p003,
    p004,
    p005,
    p006,
    p007,
    p008,
    p009,
    p010,
    p011,
    p012,
    p013,
}

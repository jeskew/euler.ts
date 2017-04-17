interface Problem {
    readonly number: number;
    readonly description: string;

    solve(): Promise<number>;
}

export default Problem;
export namespace correct {
    export function *test1(): Generator {}
    export async function *test2(): AsyncGenerator {}
    export class Test {
        public *test1(): Generator {}
        public async *test2(): AsyncGenerator {}
    }
}

export namespace incorrect {
    // eslint-disable-next-line @stylistic/generator-star-spacing
    export function* test1(): Generator {}
    // eslint-disable-next-line @stylistic/generator-star-spacing
    export async function* test2(): AsyncGenerator {}
    // eslint-disable-next-line @stylistic/generator-star-spacing
    export function * test3(): Generator {}
    // eslint-disable-next-line @stylistic/generator-star-spacing
    export async function * test4(): AsyncGenerator {}
    export class Test {
        // eslint-disable-next-line @stylistic/generator-star-spacing
        public* test1(): Generator {}
        // eslint-disable-next-line @stylistic/generator-star-spacing
        public async* test2(): AsyncGenerator {}
        // eslint-disable-next-line @stylistic/generator-star-spacing
        public * test3(): Generator {}
        // eslint-disable-next-line @stylistic/generator-star-spacing
        public async * test4(): AsyncGenerator {}
    }
}

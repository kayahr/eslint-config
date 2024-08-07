export namespace correct {
    export const a1 = [];
    export const a2 = [ "foo", "bar", "baz" ];
    export const a3 = [ [ "foo" ], "bar", "baz" ];
    export const a4 = [
        "foo",
        "bar"
    ];
    export const [ x, y, z ] = a2;
}

export namespace incorrect {
    // eslint-disable-next-line @stylistic/array-bracket-spacing
    export const a1 = ["foo", "bar", "baz" ];
    // eslint-disable-next-line @stylistic/array-bracket-spacing
    export const a2 = [ "foo", "bar", "baz"];
    // eslint-disable-next-line @stylistic/array-bracket-spacing
    export const a3 = [[ "foo" ], "bar", "baz" ];
    // eslint-disable-next-line @stylistic/array-bracket-spacing
    export const a4 = [ [ "foo"], "bar", "baz" ];
    // eslint-disable-next-line @stylistic/array-bracket-spacing
    export const [x, y, z ] = a2;
}

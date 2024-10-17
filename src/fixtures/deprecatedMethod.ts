export class Dummy {
    /** @deprecated */
    public deprecatedMethod(): number {
        return 23;
    }
}

// eslint-disable-next-line @typescript-eslint/no-deprecated
new Dummy().deprecatedMethod();

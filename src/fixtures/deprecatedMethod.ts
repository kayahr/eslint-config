export class Dummy {
    /** @deprecated */
    public deprecatedMethod(): number {
        return 23;
    }
}

// eslint-disable-next-line deprecation/deprecation
new Dummy().deprecatedMethod();

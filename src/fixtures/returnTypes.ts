export namespace correct {
    // No return type needed for simple arrow function
    const simpleArrowFuncWithoutType = () => 23;
    simpleArrowFuncWithoutType();

    // Return type allowed for simple arrow function
    export const simpleArrowFuncWithType = (): number => 23;

    // Return type allowed for complex arrow function
    const complexArrowFuncWithoutType = () => {
        console.log("foo");
        return 23;
    };
    complexArrowFuncWithoutType();

    // Return type allowed for complex arrow function
    export const complexArrowFuncWithType = (): number => {
        console.log("foo");
        return 23;
    };

    // No return type needed for normal functions
    function normalFunctionWithoutType() {
        return 23;
    }
    normalFunctionWithoutType();

    // Return type allowed for normal functions
    export function normalFunctionWithType(): number {
        return 23;
    }

    class Test {
        // Return type not needed for internal methods
        public method() {
            return 23;
        }
    }
    new Test();
}

export namespace wrong {
    // Return type needed for exported arrow function
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    export const complexArrowFunc = () => 43;

    // Return type needed for exported normal functions
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    export function normalFunction() {
        return 23;
    }

    export class Test {
        // Return type needed for exported methods
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        protected method() {
            return this.privMethod();
        }

        private privMethod() {
            return 23;
        }
    }
}

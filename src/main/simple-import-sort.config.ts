import type { Linter } from "eslint";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export const customConfig: Linter.Config = {
    plugins: {
        "simple-import-sort": simpleImportSortPlugin
    },
    rules: {
        /** @see https://github.com/lydell/eslint-plugin-simple-import-sort */
        "simple-import-sort/exports": "warn",

        /** @see https://github.com/lydell/eslint-plugin-simple-import-sort */
        "simple-import-sort/imports": "warn"
    }
};

export default [
    customConfig
];

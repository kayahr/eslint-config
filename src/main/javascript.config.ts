import js from "@eslint/js";
import type { Linter } from "eslint";

export const defaultConfig = js.configs.recommended;
export const customConfig: Linter.Config = {
    rules: {
        /** @see https://eslint.org/docs/latest/rules/class-methods-use-this */
        "class-methods-use-this": "off",

        /** @see https://eslint.org/docs/latest/rules/constructor-super */
        "constructor-super": "warn",

        /** @see https://eslint.org/docs/latest/rules/for-direction */
        "for-direction": "warn",

        /** @see https://eslint.org/docs/latest/rules/func-style */
        "func-style": [
            "warn", "declaration",
            {
                allowArrowFunctions: true
            }
        ],

        /** @see https://eslint.org/docs/latest/rules/getter-return */
        "getter-return": "warn",

        /** @see https://eslint.org/docs/latest/rules/id-length */
        "id-length": "off",

        /** @see https://eslint.org/docs/latest/rules/max-lines */
        "max-lines": "off",

        /** @see https://eslint.org/docs/latest/rules/no-async-promise-executor */
        "no-async-promise-executor": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-case-declarations */
        "no-case-declarations": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-class-assign */
        "no-class-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-compare-neg-zero */
        "no-compare-neg-zero": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-cond-assign */
        "no-cond-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-console */
        "no-console": "off",

        /** @see https://eslint.org/docs/latest/rules/no-const-assign */
        "no-const-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-constant-binary-expression */
        "no-constant-binary-expression": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-constant-condition */
        "no-constant-condition": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-control-regex */
        "no-control-regex": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-debugger */
        "no-debugger": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-delete-var */
        "no-delete-var": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-dupe-args */
        "no-dupe-args": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-dupe-class-members */
        "no-dupe-class-members": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-dupe-else-if */
        "no-dupe-else-if": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-dupe-keys */
        "no-dupe-keys": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-duplicate-case */
        "no-duplicate-case": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-empty */
        "no-empty": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-empty-character-class */
        "no-empty-character-class": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-empty-function */
        "no-empty-function": "off",

        /** @see https://eslint.org/docs/latest/rules/no-empty-pattern */
        "no-empty-pattern": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-empty-static-block */
        "no-empty-static-block": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-ex-assign */
        "no-ex-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast */
        "no-extra-boolean-cast": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-fallthrough */
        "no-fallthrough": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-func-assign */
        "no-func-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-global-assign */
        "no-global-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-import-assign */
        "no-import-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-invalid-regexp */
        "no-invalid-regexp": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-irregular-whitespace */
        "no-irregular-whitespace": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-loss-of-precision */
        "no-loss-of-precision": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-magic-numbers */
        "no-magic-numbers": "off",

        /** @see https://eslint.org/docs/latest/rules/no-misleading-character-class */
        "no-misleading-character-class": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor */
        "no-new-native-nonconstructor": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape */
        "no-nonoctal-decimal-escape": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-obj-calls */
        "no-obj-calls": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-octal */
        "no-octal": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-prototype-builtins */
        "no-prototype-builtins": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-redeclare */
        "no-redeclare": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-regex-spaces */
        "no-regex-spaces": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-self-assign */
        "no-self-assign": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-setter-return */
        "no-setter-return": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names */
        "no-shadow-restricted-names": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-sparse-arrays */
        "no-sparse-arrays": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-this-before-super */
        "no-this-before-super": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-undef */
        "no-undef": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unexpected-multiline */
        "no-unexpected-multiline": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unreachable */
        "no-unreachable": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unsafe-finally */
        "no-unsafe-finally": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unsafe-negation */
        "no-unsafe-negation": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining */
        "no-unsafe-optional-chaining": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unused-labels */
        "no-unused-labels": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unused-private-class-members */
        "no-unused-private-class-members": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-unused-vars */
        "no-unused-vars": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-useless-backreference */
        "no-useless-backreference": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-useless-catch */
        "no-useless-catch": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-useless-escape */
        "no-useless-escape": "warn",

        /** @see https://eslint.org/docs/latest/rules/no-with */
        "no-with": "warn",

        /** @see https://eslint.org/docs/latest/rules/one-var */
        "one-var": "off",

        /** @see https://eslint.org/docs/latest/rules/require-yield */
        "require-yield": "warn",

        /** @see https://eslint.org/docs/latest/rules/use-isnan */
        "use-isnan": "warn",

        /** @see https://eslint.org/docs/latest/rules/valid-typeof */
        "valid-typeof": "warn"
    }
};

export default [
    defaultConfig,
    customConfig
];

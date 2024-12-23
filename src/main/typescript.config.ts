import { type TSESLint } from "@typescript-eslint/utils";
import merge from "lodash.merge";
import typescriptPlugin from "typescript-eslint";

export const defaultConfig = merge({}, ...typescriptPlugin.configs.recommendedTypeChecked) as TSESLint.FlatConfig.Config;

export const customConfig: TSESLint.FlatConfig.Config = {
    files: defaultConfig.files,
    languageOptions: {
        parserOptions: {
            project: "tsconfig.json",
            warnOnUnsupportedTypeScriptVersion: false
        }
    },
    rules: {
        /** @see https://typescript-eslint.io/rules/array-type */
        "@typescript-eslint/array-type": [
            "warn",
            {
                default: "array-simple"
            }
        ],

        /** @see https://typescript-eslint.io/rules/await-thenable */
        "@typescript-eslint/await-thenable": "warn",

        /** @see https://typescript-eslint.io/rules/ban-ts-comment */
        "@typescript-eslint/ban-ts-comment": [
            "warn",
            {
                "ts-check": true
            }
        ],

        /** @see https://typescript-eslint.io/rules/consistent-type-assertions */
        "@typescript-eslint/consistent-type-assertions": [
            "warn",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "allow"
            }
        ],

        /** @see https://typescript-eslint.io/rules/consistent-type-definitions */
        "@typescript-eslint/consistent-type-definitions": "off",

        /** @see https://typescript-eslint.io/rules/default-param-last */
        "@typescript-eslint/default-param-last": "warn",

        /** @see https://typescript-eslint.io/rules/explicit-function-return-type */
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true
            }
        ],

        /** @see https://typescript-eslint.io/rules/explicit-member-accessibility */
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit"
            }
        ],

        /** @see https://typescript-eslint.io/rules/explicit-module-boundary-types */
        "@typescript-eslint/explicit-module-boundary-types": "warn",

        /** @see https://typescript-eslint.io/rules/indent */
        "@typescript-eslint/indent": "off",

        /** @see https://typescript-eslint.io/rules/interface-name-prefix */
        "@typescript-eslint/interface-name-prefix": "off",

        /** @see https://typescript-eslint.io/rules/member-ordering */
        "@typescript-eslint/member-ordering": [
            "warn",
            {
                default: [ "signature", "field", "constructor", "method" ]
            }
        ],

        /** @see https://typescript-eslint.io/rules/naming-convention */
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                format: null,
                modifiers: [ "requiresQuotes" ],
                selector: "property"
            }, {
                filter: {
                    match: false,
                    regex: "^@@observable$"
                },
                format: [ "camelCase", "PascalCase" ],
                leadingUnderscore: "forbid",
                selector: "default",
                trailingUnderscore: "forbid"
            }, {
                format: [ "camelCase", "PascalCase" ],
                leadingUnderscore: "allow",
                modifiers: [ "private" ],
                selector: "property"
            }, {
                format: [ "camelCase", "PascalCase" ],
                modifiers: [ "public" ],
                selector: "property"
            }, {
                filter: {
                    match: true,
                    regex: "_"
                },
                format: [ "UPPER_CASE" ],
                modifiers: [ "public" ],
                selector: "property"
            }, {
                format: [ "camelCase" ],
                modifiers: [ "public", "readonly" ],
                selector: "property"
            }, {
                format: [ "camelCase", "UPPER_CASE", "PascalCase" ],
                modifiers: [ "public", "static" ],
                selector: "property"
            }, {
                format: [ "camelCase", "UPPER_CASE", "PascalCase" ],
                modifiers: [ "static" ],
                selector: "property"
            }, {
                format: [ "camelCase", "UPPER_CASE", "PascalCase" ],
                selector: "variable"
            }, {
                format: [ "PascalCase" ],
                selector: "typeLike"
            }, {
                format: [ "camelCase", "UPPER_CASE", "PascalCase" ],
                selector: "enumMember"
            }
        ],

        /** @see https://typescript-eslint.io/rules/no-array-constructor */
        "@typescript-eslint/no-array-constructor": "warn",

        /** @see https://typescript-eslint.io/rules/no-array-delete */
        "@typescript-eslint/no-array-delete": "warn",

        /** @see https://typescript-eslint.io/rules/no-base-to-string */
        "@typescript-eslint/no-base-to-string": "off",

        /** @see https://typescript-eslint.io/rules/no-deprecated */
        "@typescript-eslint/no-deprecated": "warn",

        /** @see https://typescript-eslint.io/rules/no-dupe-class-members */
        "@typescript-eslint/no-dupe-class-members": "warn",

        /** @see https://typescript-eslint.io/rules/no-duplicate-enum-values */
        "@typescript-eslint/no-duplicate-enum-values": "warn",

        /** @see https://typescript-eslint.io/rules/no-duplicate-type-constituents */
        "@typescript-eslint/no-duplicate-type-constituents": "warn",

        /** @see https://typescript-eslint.io/rules/no-dynamic-delete */
        "@typescript-eslint/no-dynamic-delete": "off",

        /** @see https://typescript-eslint.io/rules/no-empty-function */
        "@typescript-eslint/no-empty-function": "off",

        /** @see https://typescript-eslint.io/rules/no-empty-interface */
        "@typescript-eslint/no-empty-interface": "off",

        /** @see https://typescript-eslint.io/rules/no-empty-object-type */
        "@typescript-eslint/no-empty-object-type": "off",

        /** @see https://typescript-eslint.io/rules/no-explicit-any */
        "@typescript-eslint/no-explicit-any": "off",

        /** @see https://typescript-eslint.io/rules/no-extra-non-null-assertion */
        "@typescript-eslint/no-extra-non-null-assertion": "warn",

        /** @see https://typescript-eslint.io/rules/no-extra-parens */
        "@typescript-eslint/no-extra-parens": "off",

        /** @see https://typescript-eslint.io/rules/no-extraneous-class */
        "@typescript-eslint/no-extraneous-class": [
            "warn",
            {
                allowEmpty: true,
                allowStaticOnly: true,
                allowWithDecorator: true
            }
        ],

        /** @see https://typescript-eslint.io/rules/no-floating-promises */
        "@typescript-eslint/no-floating-promises": [
            "warn",
            {
                allowForKnownSafeCalls: [
                    {
                        from: "package",
                        name: [ "it", "describe" ],
                        package: "node:test"
                    }
                ],
                ignoreVoid: true
            }
        ],

        /** @see https://typescript-eslint.io/rules/no-for-in-array */
        "@typescript-eslint/no-for-in-array": "warn",

        /** @see https://typescript-eslint.io/rules/no-implied-eval */
        "@typescript-eslint/no-implied-eval": "warn",

        /** @see https://typescript-eslint.io/rules/no-inferrable-types */
        "@typescript-eslint/no-inferrable-types": [
            "warn",
            {
                ignoreParameters: true,
                ignoreProperties: true
            }
        ],

        /** @see https://typescript-eslint.io/rules/no-magic-numbers */
        "@typescript-eslint/no-magic-numbers": "off",

        /** @see https://typescript-eslint.io/rules/no-misused-new */
        "@typescript-eslint/no-misused-new": "warn",

        /** @see https://typescript-eslint.io/rules/no-misused-promises */
        "@typescript-eslint/no-misused-promises": [
            "warn",
            {
                checksVoidReturn: false
            }
        ],

        /** @see https://typescript-eslint.io/rules/no-namespace */
        "@typescript-eslint/no-namespace": "off",

        /** @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain */
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",

        /** @see https://typescript-eslint.io/rules/no-non-null-assertion */
        "@typescript-eslint/no-non-null-assertion": "warn",

        /** @see https://typescript-eslint.io/rules/no-parameter-properties */
        "@typescript-eslint/no-parameter-properties": "off",

        /** @see https://typescript-eslint.io/rules/no-redundant-type-constituents */
        "@typescript-eslint/no-redundant-type-constituents": "warn",

        /** @see https://typescript-eslint.io/rules/no-require-imports */
        "@typescript-eslint/no-require-imports": "warn",

        /** @see https://typescript-eslint.io/rules/no-this-alias */
        "@typescript-eslint/no-this-alias": "off",

        /** @see https://typescript-eslint.io/rules/no-type-alias */
        "@typescript-eslint/no-type-alias": "off",

        /** @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare */
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",

        /** @see https://typescript-eslint.io/rules/no-unnecessary-condition */
        "@typescript-eslint/no-unnecessary-condition": "off",

        /** @see https://typescript-eslint.io/rules/no-unnecessary-qualifier */
        "@typescript-eslint/no-unnecessary-qualifier": "off",

        /** @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments */
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",

        /** @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion */
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",

        /** @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint */
        "@typescript-eslint/no-unnecessary-type-constraint": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-argument */
        "@typescript-eslint/no-unsafe-argument": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-assignment */
        "@typescript-eslint/no-unsafe-assignment": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-call */
        "@typescript-eslint/no-unsafe-call": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging */
        "@typescript-eslint/no-unsafe-declaration-merging": "off",

        /** @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison */
        "@typescript-eslint/no-unsafe-enum-comparison": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-function-type */
        "@typescript-eslint/no-unsafe-function-type": "off",

        /** @see https://typescript-eslint.io/rules/no-unsafe-member-access */
        "@typescript-eslint/no-unsafe-member-access": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-return */
        "@typescript-eslint/no-unsafe-return": "warn",

        /** @see https://typescript-eslint.io/rules/no-unsafe-unary-minus */
        "@typescript-eslint/no-unsafe-unary-minus": "warn",

        /** @see https://typescript-eslint.io/rules/no-unused-expressions */
        "@typescript-eslint/no-unused-expressions": "warn",

        /** @see https://typescript-eslint.io/rules/no-unused-vars */
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "none"
            }
        ],

        /** @see https://typescript-eslint.io/rules/no-unused-vars-experimental */
        "@typescript-eslint/no-unused-vars-experimental": "off",

        /** @see https://typescript-eslint.io/rules/no-use-before-define */
        "@typescript-eslint/no-use-before-define": "off",

        /** @see https://typescript-eslint.io/rules/no-useless-constructor */
        "@typescript-eslint/no-useless-constructor": "warn",

        /** @see https://typescript-eslint.io/rules/no-wrapper-object-types */
        "@typescript-eslint/no-wrapper-object-types": "off",

        /** @see https://typescript-eslint.io/rules/only-throw-error */
        "@typescript-eslint/only-throw-error": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-as-const */
        "@typescript-eslint/prefer-as-const": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-for-of */
        "@typescript-eslint/prefer-for-of": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-function-type */
        "@typescript-eslint/prefer-function-type": "off",

        /** @see https://typescript-eslint.io/rules/prefer-namespace-keyword */
        "@typescript-eslint/prefer-namespace-keyword": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-nullish-coalescing */
        "@typescript-eslint/prefer-nullish-coalescing": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-optional-chain */
        "@typescript-eslint/prefer-optional-chain": "off",

        /** @see https://typescript-eslint.io/rules/prefer-promise-reject-errors */
        "@typescript-eslint/prefer-promise-reject-errors": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-readonly */
        "@typescript-eslint/prefer-readonly": "warn",

        /** @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types */
        "@typescript-eslint/prefer-readonly-parameter-types": "off",

        /** @see https://typescript-eslint.io/rules/promise-function-async */
        "@typescript-eslint/promise-function-async": "off",

        /** @see https://typescript-eslint.io/rules/require-array-sort-compare */
        "@typescript-eslint/require-array-sort-compare": "warn",

        /** @see https://typescript-eslint.io/rules/require-await */
        "@typescript-eslint/require-await": "warn",

        /** @see https://typescript-eslint.io/rules/restrict-plus-operands */
        "@typescript-eslint/restrict-plus-operands": "off",

        /** @see https://typescript-eslint.io/rules/restrict-template-expressions */
        "@typescript-eslint/restrict-template-expressions": "off",

        /** @see https://typescript-eslint.io/rules/return-await */
        "@typescript-eslint/return-await": "warn",

        /** @see https://typescript-eslint.io/rules/strict-boolean-expressions */
        "@typescript-eslint/strict-boolean-expressions": [
            "warn",
            {
                allowNullableObject: false,
                allowNumber: false,
                allowString: false
            }
        ],

        /** @see https://typescript-eslint.io/rules/switch-exhaustiveness-check */
        "@typescript-eslint/switch-exhaustiveness-check": "warn",

        /** @see https://typescript-eslint.io/rules/triple-slash-reference */
        "@typescript-eslint/triple-slash-reference": "warn",

        /** @see https://typescript-eslint.io/rules/type-annotation-spacing */
        "@typescript-eslint/type-annotation-spacing": "off",

        /** @see https://typescript-eslint.io/rules/typedef */
        "@typescript-eslint/typedef": "off",

        /** @see https://typescript-eslint.io/rules/unbound-method */
        "@typescript-eslint/unbound-method": "off",

        /** @see https://typescript-eslint.io/rules/unified-signatures */
        "@typescript-eslint/unified-signatures": "off",

        /** @see https://eslint.org/docs/latest/rules/no-var */
        "no-var": "warn",

        /** @see https://eslint.org/docs/latest/rules/prefer-const */
        "prefer-const": "warn",

        /** @see https://eslint.org/docs/latest/rules/prefer-rest-params */
        "prefer-rest-params": "warn",

        /** @see https://eslint.org/docs/latest/rules/prefer-spread */
        "prefer-spread": "warn"
    }
};

export default [
    defaultConfig,
    customConfig
];

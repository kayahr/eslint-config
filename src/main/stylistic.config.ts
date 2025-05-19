import stylistic from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";

export const defaultConfig = stylistic.configs.recommended;
export const customConfig: Linter.Config = {
    rules: {
        /** @see https://eslint.style/rules/default/array-bracket-newline */
        "@stylistic/array-bracket-newline": [
            "warn",
            "consistent"
        ],

        /** @see https://eslint.style/rules/default/array-bracket-spacing */
        "@stylistic/array-bracket-spacing": [
            "warn",
            "always"
        ],

        /** @see https://eslint.style/rules/default/array-element-newline */
        "@stylistic/array-element-newline": "off",

        /** @see https://eslint.style/rules/default/arrow-parens */
        "@stylistic/arrow-parens": [
            "warn",
            "as-needed",
            {
                requireForBlockBody: false
            }
        ],

        /** @see https://eslint.style/rules/default/arrow-spacing */
        "@stylistic/arrow-spacing": "warn",

        /** @see https://eslint.style/rules/default/block-spacing */
        "@stylistic/block-spacing": "warn",

        /** @see https://eslint.style/rules/default/brace-style */
        "@stylistic/brace-style": [
            "warn",
            "1tbs",
            {
                allowSingleLine: true
            }
        ],

        /** @see https://eslint.style/rules/default/comma-dangle */
        "@stylistic/comma-dangle": [
            "warn",
            "never"
        ],

        /** @see https://eslint.style/rules/default/comma-spacing */
        "@stylistic/comma-spacing": "warn",

        /** @see https://eslint.style/rules/default/comma-style */
        "@stylistic/comma-style": "warn",

        /** @see https://eslint.style/rules/default/computed-property-spacing */
        "@stylistic/computed-property-spacing": "off",

        /** @see https://eslint.style/rules/default/dot-location */
        "@stylistic/dot-location": "warn",

        /** @see https://eslint.style/rules/default/eol-last */
        "@stylistic/eol-last": "warn",

        /** @see https://eslint.style/rules/default/function-call-argument-newline */
        "@stylistic/function-call-argument-newline": "off",

        /** @see https://eslint.style/rules/default/function-paren-newline */
        "@stylistic/function-paren-newline": "off",

        /** @see https://eslint.style/rules/default/generator-star-spacing */
        "@stylistic/generator-star-spacing": [
            "warn",
            {
                after: false,
                before: true
            }
        ],

        /** @see https://eslint.style/rules/default/implicit-arrow-linebreak */
        "@stylistic/implicit-arrow-linebreak": "off",

        /** @see https://eslint.style/rules/default/indent */
        "@stylistic/indent": "off",

        /** @see https://eslint.style/rules/default/indent-binary-ops */
        "@stylistic/indent-binary-ops": "off",

        /** @see https://eslint.style/rules/default/jsx-closing-bracket-location */
        "@stylistic/jsx-closing-bracket-location": "warn",

        /** @see https://eslint.style/rules/default/jsx-closing-tag-location */
        "@stylistic/jsx-closing-tag-location": "warn",

        /** @see https://eslint.style/rules/default/jsx-curly-brace-presence */
        "@stylistic/jsx-curly-brace-presence": "warn",

        /** @see https://eslint.style/rules/default/jsx-curly-newline */
        "@stylistic/jsx-curly-newline": "warn",

        /** @see https://eslint.style/rules/default/jsx-curly-spacing */
        "@stylistic/jsx-curly-spacing": "warn",

        /** @see https://eslint.style/rules/default/jsx-equals-spacing */
        "@stylistic/jsx-equals-spacing": "warn",

        /** @see https://eslint.style/rules/default/jsx-first-prop-new-line */
        "@stylistic/jsx-first-prop-new-line": "warn",

        /** @see https://eslint.style/rules/default/jsx-function-call-newline */
        "@stylistic/jsx-function-call-newline": "warn",

        /** @see https://eslint.style/rules/default/jsx-indent-props */
        "@stylistic/jsx-indent-props": "warn",

        /** @see https://eslint.style/rules/default/jsx-max-props-per-line */
        "@stylistic/jsx-max-props-per-line": "warn",

        /** @see https://eslint.style/rules/default/jsx-one-expression-per-line */
        "@stylistic/jsx-one-expression-per-line": "warn",

        /** @see https://eslint.style/rules/default/jsx-quotes */
        "@stylistic/jsx-quotes": "warn",

        /** @see https://eslint.style/rules/default/jsx-tag-spacing */
        "@stylistic/jsx-tag-spacing": "warn",

        /** @see https://eslint.style/rules/default/jsx-wrap-multilines */
        "@stylistic/jsx-wrap-multilines": "warn",

        /** @see https://eslint.style/rules/default/key-spacing */
        "@stylistic/key-spacing": "warn",

        /** @see https://eslint.style/rules/default/keyword-spacing */
        "@stylistic/keyword-spacing": "warn",

        /** @see https://eslint.style/rules/default/lines-around-comment */
        "@stylistic/lines-around-comment": "off",

        /** @see https://eslint.style/rules/default/lines-between-class-members */
        "@stylistic/lines-between-class-members": "warn",

        /** @see https://eslint.style/rules/default/max-len */
        "@stylistic/max-len": [
            "warn",
            {
                code: 160,
                ignoreRegExpLiterals: true,
                ignoreUrls: true,
                tabWidth: 4
            }
        ],

        /** @see https://eslint.style/rules/default/max-statements-per-line */
        "@stylistic/max-statements-per-line": "off",

        /** @see https://eslint.style/rules/default/member-delimiter-style */
        "@stylistic/member-delimiter-style": [
            "warn",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: false
                },
                multilineDetection: "brackets",
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true
                        }
                    },
                    typeLiteral: {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true
                        }
                    }
                },
                singleline: {
                    delimiter: "comma"
                }
            }
        ],

        /** @see https://eslint.style/rules/default/multiline-comment-style */
        "@stylistic/multiline-comment-style": "off",

        /** @see https://eslint.style/rules/default/multiline-ternary */
        "@stylistic/multiline-ternary": "off",

        /** @see https://eslint.style/rules/default/new-parens */
        "@stylistic/new-parens": "warn",

        /** @see https://eslint.style/rules/default/newline-per-chained-call */
        "@stylistic/newline-per-chained-call": "off",

        /** @see https://eslint.style/rules/default/no-confusing-arrow */
        "@stylistic/no-confusing-arrow": "off",

        /** @see https://eslint.style/rules/default/no-extra-parens */
        "@stylistic/no-extra-parens": "off",

        /** @see https://eslint.style/rules/default/no-floating-decimal */
        "@stylistic/no-floating-decimal": "warn",

        /** @see https://eslint.style/rules/default/no-mixed-operators */
        "@stylistic/no-mixed-operators": "warn",

        /** @see https://eslint.style/rules/default/no-mixed-spaces-and-tabs */
        "@stylistic/no-mixed-spaces-and-tabs": "warn",

        /** @see https://eslint.style/rules/default/no-multi-spaces */
        "@stylistic/no-multi-spaces": "off",

        /** @see https://eslint.style/rules/default/no-multiple-empty-lines */
        "@stylistic/no-multiple-empty-lines": "warn",

        /** @see https://eslint.style/rules/default/no-tabs */
        "@stylistic/no-tabs": "warn",

        /** @see https://eslint.style/rules/default/no-trailing-spaces */
        "@stylistic/no-trailing-spaces": "warn",

        /** @see https://eslint.style/rules/default/no-whitespace-before-property */
        "@stylistic/no-whitespace-before-property": "warn",

        /** @see https://eslint.style/rules/default/object-curly-spacing */
        "@stylistic/object-curly-spacing": "warn",

        /** @see https://eslint.style/rules/default/object-property-newline */
        "@stylistic/object-property-newline": [
            "warn",
            {
                allowAllPropertiesOnSameLine: true
            }
        ],

        /** @see https://eslint.style/rules/default/one-var-declaration-per-line */
        "@stylistic/one-var-declaration-per-line": "off",

        /** @see https://eslint.style/rules/default/operator-linebreak */
        "@stylistic/operator-linebreak": "warn",

        /** @see https://eslint.style/rules/default/padded-blocks */
        "@stylistic/padded-blocks": [
            "warn",
            "never"
        ],

        /** @see https://eslint.style/rules/default/quote-props */
        "@stylistic/quote-props": [
            "warn",
            "as-needed"
        ],

        /** @see https://eslint.style/rules/default/quotes */
        "@stylistic/quotes": [
            "warn",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ],

        /** @see https://eslint.style/rules/default/rest-spread-spacing */
        "@stylistic/rest-spread-spacing": "warn",

        /** @see https://eslint.style/rules/default/semi */
        "@stylistic/semi": [
            "warn",
            "always"
        ],

        /** @see https://eslint.style/rules/default/semi-spacing */
        "@stylistic/semi-spacing": "warn",

        /** @see https://eslint.style/rules/default/space-before-blocks */
        "@stylistic/space-before-blocks": "warn",

        /** @see https://eslint.style/rules/default/space-before-function-paren */
        "@stylistic/space-before-function-paren": "warn",

        /** @see https://eslint.style/rules/default/space-in-parens */
        "@stylistic/space-in-parens": "warn",

        /** @see https://eslint.style/rules/default/space-infix-ops */
        "@stylistic/space-infix-ops": "warn",

        /** @see https://eslint.style/rules/default/space-unary-ops */
        "@stylistic/space-unary-ops": "warn",

        /** @see https://eslint.style/rules/default/spaced-comment */
        "@stylistic/spaced-comment": "warn",

        /** @see https://eslint.style/rules/default/template-curly-spacing */
        "@stylistic/template-curly-spacing": "warn",

        /** @see https://eslint.style/rules/default/template-tag-spacing */
        "@stylistic/template-tag-spacing": "warn",

        /** @see https://eslint.style/rules/default/type-annotation-spacing */
        "@stylistic/type-annotation-spacing": "warn",

        /** @see https://eslint.style/rules/default/type-generic-spacing */
        "@stylistic/type-generic-spacing": "warn",

        /** @see https://eslint.style/rules/default/type-named-tuple-spacing */
        "@stylistic/type-named-tuple-spacing": "warn",

        /** @see https://eslint.style/rules/default/wrap-iife */
        "@stylistic/wrap-iife": "warn",

        /** @see https://eslint.style/rules/default/wrap-regex */
        "@stylistic/wrap-regex": "off",

        /** @see https://eslint.style/rules/default/yield-star-spacing */
        "@stylistic/yield-star-spacing": "warn"
    }
};

export default [
    defaultConfig,
    customConfig
];

import type { Linter } from "eslint";
import regexp from "eslint-plugin-regexp";

export const defaultConfig = regexp.configs["flat/recommended"];
export const customConfig: Linter.Config = {
    rules: {
        /** https://eslint.org/docs/latest/rules/no-control-regex */
        "no-control-regex": "warn",

        /** https://eslint.org/docs/latest/rules/no-misleading-character-class */
        "no-misleading-character-class": "warn",

        /** https://eslint.org/docs/latest/rules/no-regex-spaces */
        "no-regex-spaces": "warn",

        /** https://eslint.org/docs/latest/rules/prefer-regex-literals */
        "prefer-regex-literals": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html */
        "regexp/control-character-escape": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html */
        "regexp/match-any": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html */
        "regexp/negation": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html */
        "regexp/no-contradiction-with-assertion": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html */
        "regexp/no-dupe-characters-character-class": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html */
        "regexp/no-dupe-disjunctions": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html */
        "regexp/no-empty-capturing-group": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html */
        "regexp/no-empty-character-class": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html */
        "regexp/no-empty-group": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html */
        "regexp/no-empty-lookarounds-assertion": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html */
        "regexp/no-empty-string-literal": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html */
        "regexp/no-escape-backspace": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html */
        "regexp/no-extra-lookaround-assertions": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html */
        "regexp/no-invalid-regexp": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html */
        "regexp/no-invisible-character": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html */
        "regexp/no-legacy-features": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html */
        "regexp/no-misleading-capturing-group": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html */
        "regexp/no-misleading-unicode-character": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html */
        "regexp/no-missing-g-flag": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html */
        "regexp/no-non-standard-flag": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html */
        "regexp/no-obscure-range": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html */
        "regexp/no-optional-assertion": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html */
        "regexp/no-super-linear-backtracking": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html */
        "regexp/no-trivially-nested-assertion": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html */
        "regexp/no-trivially-nested-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html */
        "regexp/no-unused-capturing-group": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html */
        "regexp/no-useless-assertions": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html */
        "regexp/no-useless-backreference": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html */
        "regexp/no-useless-character-class": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html */
        "regexp/no-useless-dollar-replacements": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html */
        "regexp/no-useless-escape": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html */
        "regexp/no-useless-lazy": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html */
        "regexp/no-useless-non-capturing-group": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html */
        "regexp/no-useless-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html */
        "regexp/no-useless-range": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html */
        "regexp/no-useless-set-operand": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html */
        "regexp/no-useless-string-literal": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html */
        "regexp/no-useless-two-nums-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html */
        "regexp/no-zero-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html */
        "regexp/optimal-quantifier-concatenation": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html */
        "regexp/prefer-character-class": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html */
        "regexp/prefer-d": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html */
        "regexp/prefer-plus-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html */
        "regexp/prefer-predefined-assertion": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html */
        "regexp/prefer-question-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html */
        "regexp/prefer-range": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html */
        "regexp/prefer-set-operation": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html */
        "regexp/prefer-star-quantifier": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html */
        "regexp/prefer-unicode-codepoint-escapes": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html */
        "regexp/prefer-w": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html */
        "regexp/simplify-set-operations": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html */
        "regexp/sort-flags": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html */
        "regexp/strict": "warn",

        /** @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html */
        "regexp/use-ignore-case": "warn"
    }
};

export default [
    defaultConfig,
    customConfig
];

import assert from "node:assert";
import { describe, it } from "node:test";

import type { Linter } from "eslint";

import * as javascriptConfig from "../main/javascript.config.js";
import * as regexpConfig from "../main/regexp.config.js";
import * as stylisticConfig from "../main/stylistic.config.js";
import * as typescriptConfig from "../main/typescript.config.js";

const configs = {
    javascript: javascriptConfig,
    regexp: regexpConfig,
    stylistic: stylisticConfig,
    typescript: typescriptConfig
} as const;

const severities = [ "off", "warn", "error" ] as const;

function getSeverity(rule: Linter.RuleEntry | undefined): Linter.StringSeverity | null {
    if (typeof rule === "number") {
        return severities[rule];
    } else if (typeof rule === "string") {
        return rule;
    } else if (rule instanceof Array) {
        return getSeverity(rule[0]);
    } else {
        return null;
    }
}

for (const [ name, config ] of Object.entries(configs)) {
    describe(`${name}.config`, () => {
        for (const [ ruleName, rule ] of Object.entries(config.customConfig.rules ?? {})) {
            if (config.defaultConfig != null) {
                it(`Rule '${ruleName}' is different to default rule`, () => {
                    const defaultRule = config.defaultConfig.rules?.[ruleName];
                    assert.notDeepStrictEqual(rule, defaultRule);
                });
            }
            it(`Rule '${ruleName}' has not severity ERROR`, () => {
                assert(getSeverity(rule) !== "error");
            });
        }
        if (config.defaultConfig != null) {
            it(`Severity of default rules are lowered to WARN`, () => {
                const errorRules: string[] = [];
                for (const [ ruleName, rule ] of Object.entries(config.defaultConfig.rules ?? {})) {
                    const customRule = config.customConfig.rules?.[ruleName];
                    if (getSeverity(rule) === "error" && ((getSeverity(customRule) === "error") || getSeverity(customRule) == null)) {
                        errorRules.push(ruleName);
                    }
                }
                assert(errorRules.length === 0, `The following rules report errors instead of warnings:\n\n        ${errorRules.join("\n        ")}\n`);
            });
        }
    });
}

import globals from "globals";

import kayahrConfigs from "./lib/main/eslint.config.js";

export default [
    {
        ignores: [
            "lib"
        ]
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    ...kayahrConfigs,
    {
        rules: {
            "sort-keys": "warn"
        }
    }
];

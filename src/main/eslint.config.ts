import javascriptConfigs from "./javascript.config.js";
import regexpConfigs from "./regexp.config.js";
import simpleImportSortConfigs from "./simple-import-sort.config.js";
import stylisticConfigs from "./stylistic.config.js";
import typescriptConfigs from "./typescript.config.js";

export default [
    ...stylisticConfigs,
    ...javascriptConfigs,
    ...typescriptConfigs,
    ...simpleImportSortConfigs,
    ...regexpConfigs
];

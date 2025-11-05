kayahr eslint config
====================

| :warning: This project is no longer maintained because the author switched from ESLint to [Oxlint](https://www.npmjs.com/package/oxlint) :warning: |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |

Shared eslint configuration for my personal TypeScript projects.


How to use it in a project
--------------------------

* Install the dependencies:

    ```bash
    $ npm install -DE @kayahr/eslint-config
    ```

* Create an `eslint.config.js` (Or `eslint.config.mjs` in CommonJS projects) configuration file with the following content (Modify environment if necessary):

  ```js
  {
      import kayahrConfigs from "@kayahr/eslint-config";
      import globals from "globals";

      export default [
          {
              ignores: [
                  "doc",
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
          {
              files: [ "**/*.js" ],
              languageOptions: {
                  sourceType: "commonjs"
              }
          },
          ...kayahrConfigs
      ];
  }
  ```

  The block with `sourceType: "commonjs"` is only needed for CommonJS projects.

* Add the following script line to `package.json`:

    ```json
    "lint": "eslint --max-warnings 0"
    ```

* Reference the `lint` script in the `test` script:

    ```json
    "test": "npm run -s lint && npm run -s check"
    ```

* Run eslint by typing `npm test` or `npm run lint`.

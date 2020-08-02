kayahr eslint config
====================

Shared eslint configuration for my personal TypeScript projects.


How to use it in a project
--------------------------

* Install the dependencies:

    ```bash
    $ npm install -D \
        eslint \
        @kayahr/eslint-config \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/parser \
        eslint-plugin-deprecation \
        eslint-plugin-simple-import-sort
    ```

* Create an `.eslintrc.json` configuration file with the following content (Modify environment if necessary):

  ```json
  {
      "$schema": "https://json.schemastore.org/eslintrc",
      "root": true,
      "env": {
          "es6": true,
          "node": true,
          "browser": true
      },
      "extends": [
          "@kayahr"
      ]
  }
  ```

* Add the following script line to `package.json`:

    ```json
    "lint": "eslint --max-warnings 0 --ext .ts src"
    ```

* Reference the `lint` script in the `test` script:

    ```
    "test": "npm run -s lint && npm run -s check"
    ```

* Run eslint by typing `npm test` or `npm run lint`.

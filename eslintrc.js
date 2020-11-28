module.exports = {
    "parserOptions": {
        "tsconfigRootDir": ".",
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        },
        "project": "./tsconfig.json"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "simple-import-sort",
        "deprecation"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "rules": {
        // ============================================================================================================
        // Possible errors
        // ============================================================================================================

        /** Disallow constant expressions in conditions except in loops */
        "no-constant-condition": [
            "warn",
            {
                "checkLoops": false
            }
        ],

        // ============================================================================================================
        // Best practices
        // ============================================================================================================

        /**
         * Disallow unnecessary parentheses
         *
         * (Disabled because overruled by @typescript-eslint/no-extra-parens)
         */
        "no-extra-parens": "off",

        /**
         * Disallow unnecessary semicolons
         *
         * (Disabled because overruled by @typescript-eslint/no-extra-semi)
         */
        "no-extra-semi": "off",

        /**
         * Disallow variable or `function` declarations in nested blocks
         *
         * (Disabled because functions in namespaces are useful for augmenting non class-types (enums for example) with
         * utility functions)
         */
        "no-inner-declarations": "off",

        /**
         * Disallow calling some `Object.prototype` methods directly on objects
         *
         * (Disabled because it makes code harder to read and the reasoning behind this rule is pure paranoia. Yes,
         * someone can override the builtin methods with nasty stuff but this is also true for non-builtin methods.
         * That's the nature of object oriented design, live with it, don't fight it)
         */
        "no-prototype-builtins": "off",

        /** Disallow template literal placeholder syntax in regular strings. */
        "no-template-curly-in-string": "error",

        /**
         * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
         *
         * (Disabled because it produces false-positives when using global constants)
         */
        "require-atomic-updates": "off",

        // ============================================================================================================
        // Best practices
        // ============================================================================================================

        /** Enforce `return` statements in callbacks of array methods */
        "array-callback-return": "warn",

        /** Enforce consistent brace style for all control statements */
        "curly": "warn",

        /** Enforce that the dot in multi-line expressions is before the property and not after the object. */
        "dot-location": [ "warn", "property" ],

        /** require the use of `===` and `!==` except for null checks */
        "eqeqeq": [
            "warn",
            "always", {
                "null": "ignore"
            }
        ],

        /** Require grouped accessor pairs in object literals and classes */
        "grouped-accessor-pairs": "warn",

        /**
         * Require `for-in` loops to include an `if` statement. Actually it is here to create more pain when using
         * for-in so you might consider to not use it at all. for-of and Object.keys() or Object.entries() is your
         * friend.
         */
        "guard-for-in": "warn",

        /** Disallow the use of `arguments.caller` or `arguments.callee` */
        "no-caller": "warn",

        /** Disallow returning value from constructor */
        "no-constructor-return": "warn",

        /**
         * Disallow empty functions
         *
         * (Disabled because overruled by @typescript-eslint/no-empty-function)
         */
        "no-empty-function": "off",

        /** Disallow the use of `eval()` */
        "no-eval": "warn",

        /** Disallow unnecessary calls to `.bind()` */
        "no-extra-bind": "warn",

        /** disallow unnecessary labels */
        "no-extra-label": "warn",

        /** disallow leading or trailing decimal points in numeric literals */
        "no-floating-decimal": "warn",

        /**
         * Disallow the type conversion with shorter notations.
         */
        "no-implicit-coercion": "off",

        /** Disallow declarations in the global scope */
        "no-implicit-globals": "warn",

        /** Disallow the use of `eval()`-like methods */
        "no-implied-eval": "warn",

        /** Disallow the use of the `__iterator__` property */
        "no-iterator": "warn",

        /** Disallow unnecessary nested blocks */
        "no-lone-blocks": "warn",

        /**
         * Disallow multiple spaces.
         *
         * (Actually quite useful rule, but disabled here because it prevents aligning
         * expressions which is quite useful for matrix elements for example)
         */
        "no-multi-spaces": [
            "off", {
                "ignoreEOLComments": true
            }
        ],

        /**
         * Disallow magic numbers
         *
         * (Disabled because overruled by @typescript-eslint/no-magic-numbers)
         */
        "no-magic-numbers": "off",

        /** Disallow multiline strings */
        "no-multi-str": "warn",

        /** Disallow `new` operators outside of assignments or comparisons */
        "no-new": "warn",

        /** Disallow `new` operators with the `Function` object */
        "no-new-func": "warn",

        /** Disallow `new` operators with the `String`, `Number`, and `Boolean` objects */
        "no-new-wrappers": "warn",

        /** Disallow octal escape sequences in string literals */
        "no-octal-escape": "warn",

        /** Disallow the use of the `__proto__` property */
        "no-proto": "warn",

        /** Disallow assignment operators in `return` statements */
        "no-return-assign": "warn",

        /** Disallow unnecessary `return await` */
        "no-return-await": "warn",

        /** Disallow `javascript:` urls */
        "no-script-url": "warn",

        /** Disallow comparisons where both sides are exactly the same */
        "no-self-compare": "warn",

        /** Disallow comma operators */
        "no-sequences": "warn",

        /** Disallow throwing literals as exceptions */
        "no-throw-literal": "warn",

        /** Disallow unmodified loop conditions */
        "no-unmodified-loop-condition": "warn",

        /**
         * Disallow unused expressions
         *
         * (Disabled because overruled by @typescript-eslint/no-unused-expressions)
         */
        "no-unused-expressions": "off",

        /** Disallow unnecessary calls to `.call()` and `.apply()` */
        "no-useless-call": "warn",

        /** Disallow unnecessary concatenation of literals or template literals */
        "no-useless-concat": "warn",

        /** Disallow redundant return statements */
        "no-useless-return": "warn",

        /** Require using Error objects as Promise rejection reasons */
        "prefer-promise-reject-errors": "warn",

        /** Disallow use of the `RegExp` constructor in favor of regular expression literals */
        "prefer-regex-literals": "warn",

        /** Enforce the consistent use of the radix argument when using `parseInt()` */
        "radix": [ "warn", "as-needed" ],

        /**
         * Disallow async functions which have no `await` expression
         *
         * (Disabled because overruled by @typescript-eslint/require-await)
         */
        "require-await": "off",

        /** Require `var` declarations be placed at the top of their containing scope */
        "vars-on-top": "warn",

        // ============================================================================================================
        // Variables
        // ============================================================================================================

        /** Disallow labels that share a name with a variable */
        "no-label-var": "warn",

        /** Disallow initializing variables to `undefined` */
        "no-undef-init": "warn",

        // ============================================================================================================
        // Node.js and CommonJS
        // ============================================================================================================

        /** Require `require()` calls to be placed at top-level module scope */
        "global-require": "warn",

        /** Require error handling in callbacks */
        "handle-callback-err": "warn",

        /** Disallow use of the `Buffer()` constructor */
        "no-buffer-constructor": "warn",

        /** Disallow `require` calls to be mixed with regular variable declarations */
        "no-mixed-requires": "warn",

        /** Disallow `new` operators with calls to `require` */
        "no-new-require": "warn",

        /** Disallow string concatenation with `__dirname` and `__filename` */
        "no-path-concat": "warn",

        // ============================================================================================================
        // Stylistic Issues
        // ============================================================================================================

        /** Enforce line-breaks after opening and before closing array brackets */
        "array-bracket-newline": [ "warn", "consistent" ],

        /** Enforce consistent spacing inside array brackets */
        "array-bracket-spacing": [ "warn", "always" ],

        /** Disallow or enforce spaces inside of blocks after opening block and before closing block */
        "block-spacing": "warn",

        /**
         * Enforce consistent brace style for blocks
         *
         * (Disabled because overruled by @typescript-eslint/brace-style)
         */
        "brace-style": "off",

        /** Require or disallow trailing commas */
        "comma-dangle": [ "warn", "never" ],

        /**
         * Enforce consistent spacing before and after commas
         *
         * (Disabled because overruled by @typescript-eslint/comma-spacing)
         */
        "comma-spacing": "off",

        /** Enforce consistent comma style */
        "comma-style": "warn",

        /** Require or disallow newline at the end of files */
        "eol-last": "warn",

        /** Require or disallow spacing between function identifiers and their invocations */
        "func-call-spacing": "warn",

        /** Require function names to match the name of the variable or property to which they are assigned */
        "func-name-matching": "warn",

        /**
         * Enforce consistent indentation
         *
         * (Disabled because overruled by @typescript-eslint/indent)
         */
        "indent": "off",

        /** Enforce consistent spacing between keys and values in object literal properties */
        "key-spacing": "warn",


        /**
         * Enforce consistent spacing before and after keywords
         *
         * Disabled because it has problems with expressions like `<T>this`
         */
        "keyword-spacing": "off",

        /** Enforce consistent linebreak style */
        "linebreak-style": [ "warn", "unix" ],

        /** Enforce a maximum line length */
        "max-len": [
            "warn",
            {
                "code": 120,
                "ignoreRegExpLiterals": true
            }
        ],

        /** Disallow `Array` constructors */
	    "no-array-constructor": "warn",

        /** Disallow multiple empty lines */
        "no-multiple-empty-lines": "warn",

        /** Disallow `Object` constructors */
        "no-new-object": "warn",

        /** Disallow all tabs */
        "no-tabs": "warn",

        /** Disallow trailing whitespace at the end of lines */
        "no-trailing-spaces": "warn",

        /** Disallow dangling underscores in identifiers */
        "no-underscore-dangle": "warn",

        /** Disallow ternary operators when simpler alternatives exist */
        "no-unneeded-ternary": "warn",

        /** Disallow whitespace before properties */
        "no-whitespace-before-property": "warn",

        /** Enforce the location of single-line statements */
        "nonblock-statement-body-position": "warn",

        /** Enforce consistent line breaks inside braces */
        "object-curly-newline": "warn",

        /** Enforce consistent spacing inside braces */
        "object-curly-spacing": [ "warn", "always" ],

        /** Enforce consistent linebreak style for operators */
        "operator-linebreak": [
            "warn",
            "before",
            {
                "overrides": {
                    "?": "ignore",
                    ":": "ignore"
                }
            }
        ],

        /** Disallow padding within blocks */
        "padded-blocks": [ "warn", "never" ],

        /** Disallow the use of `Math.pow` in favor of the `**` operator */
        "prefer-exponentiation-operator": "warn",

        /**
         * Disallow using Object.assign with an object literal as the first argument and prefer the use of object
         * spread instead.
         */
        "prefer-object-spread": "warn",

        /**
         * Enforce the consistent use of either backticks, double, or single quotes
         *
         * (Disabled because overruled by @typescript-eslint/quotes)
         */
        "quotes": "off",

        /** Require or disallow semicolons instead of ASI */
        "semi": "warn",

        /** Enforce consistent spacing before and after semicolons */
        "semi-spacing": "warn",

        /** Enforce location of semicolons */
        "semi-style": [ "warn", "last" ],

        /** Enforce consistent spacing before blocks */
        "space-before-blocks": "warn",

        /**
         * Enforce consistent spacing before `function` definition opening parenthesis
         *
         * (Disabled because overruled by @typescript-eslint/space-before-function-paren)
         */
        "space-before-function-paren": "off",

        /** Enforce consistent spacing inside parentheses */
        "space-in-parens": "warn",

        /** require spacing around infix operators */
        "space-infix-ops": [
            "warn",
            {
                "int32Hint": true
            }
        ],

        /** Enforce consistent spacing before or after unary operators */
        "space-unary-ops": "warn",

        /** enforce consistent spacing after the `//` or `/*` in a comment */
        "spaced-comment": [
            "warn",
            "always",
            {
                "markers": [ "/" ]
            }
        ],

        /** Enforce spacing around colons of switch statements */
        "switch-colon-spacing": "warn",

        /** Disallow spacing between template tags and their literals */
        "template-tag-spacing": "warn",

        /** Disallow Unicode byte order mark (BOM) */
        "unicode-bom": "warn",

        // ============================================================================================================
        // ECMAScript 6
        // ============================================================================================================

        /** Require braces around arrow function bodies as needed */
        "arrow-body-style": [ "warn", "as-needed" ],

        /** Require parentheses around arrow function arguments as needed */
        "arrow-parens": [ "warn", "as-needed" ],

        /** Enforce consistent spacing before and after the arrow in arrow functions */
        "arrow-spacing": "warn",

        /** Enforce consistent spacing around `*` operators in generator functions */
        "generator-star-spacing": "warn",

        /** Disallow arrow functions where they could be confused with comparisons */
        "no-confusing-arrow": "warn",

        /**
         * Disallow duplicate module imports
         */
        "no-duplicate-imports": [ "warn", { "includeExports": true } ],

        /** Disallow unnecessary computed property keys in objects and classes */
        "no-useless-computed-key": "warn",

        /**
         * Disallow unnecessary constructors
         *
         * (Disabled because it doesn't work with TypeScript constructor overloading)
         */
        "no-useless-constructor": "off",

        /** Disallow renaming import, export, and destructured assignments to the same name */
        "no-useless-rename": "warn",

        /** Require `let` or `const` instead of `var` */
        "no-var": "warn",

        /** Require method and property shorthand syntax for object literals */
        "object-shorthand": "warn",

        /** Require using arrow functions for callbacks */
        "prefer-arrow-callback": "warn",

        /** Require `const` declarations for variables that are never reassigned after declared */
        "prefer-const": "warn",

        /** Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals */
        "prefer-numeric-literals": "warn",

        /** Require rest parameters instead of `arguments` */
        "prefer-rest-params": "warn",

        /** Require spread operators instead of `.apply()` */
        "prefer-spread": "warn",

        /** Require symbol descriptions */
        "symbol-description": "warn",

        /** Disallow spacing around embedded expressions of template strings */
        "template-curly-spacing": "warn",

        /** Enforce consistent spacing around the `*` in `yield*` expressions */
        "yield-star-spacing": "warn",

        // ============================================================================================================
        // Plugin: simple-import-sort
        // ============================================================================================================

        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",

        // ============================================================================================================
        // Plugin: deprecation
        // ============================================================================================================

        "deprecation/deprecation": "warn",

        // ============================================================================================================
        // Plugin: typescript
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        // ============================================================================================================

        /**
         * Requires using either T[] or Array<T> for arrays
         */
        "@typescript-eslint/array-type": [ "warn", {
                "default": "array-simple"
            }
        ],

        /** Bans // @ts-<directive> comments from being used */
        "@typescript-eslint/ban-ts-comment": [
            "warn", {
                "ts-check": true
            }
        ],

        /**
         * Bans some built-in types. Function and object is allowed because the recommended replacements are not
         * compatible.
         */
        "@typescript-eslint/ban-types": [
            "error",
            {
                "extendDefaults": true,
                "types": {
                    "Function": false,
                    "object": false,
                    "Object": false
                }
            }
        ],

        /**
         * Enforces consistent usage of type assertions
         */
        "@typescript-eslint/consistent-type-assertions": [
            "warn",
            {
                "assertionStyle": "as",
                "objectLiteralTypeAssertions": "allow"
            }
        ],

        /**
         * Consistent with type definition either interface or type
         *
         * Disabled because interfaces and types are not always interchangeable when using Typescripts typeof operator
         * in generic types
         */
        "@typescript-eslint/consistent-type-definitions": "off",

        /** Require explicit return types on functions and class methods */
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true
            }
        ],

        /** Require explicit accessibility modifiers on class properties and methods */
        "@typescript-eslint/explicit-member-accessibility": [
            "warn", {
                "accessibility": "explicit"
            }
        ],

        /** Require explicit return and argument types on exported functions' and classes' public class methods */
        "@typescript-eslint/explicit-module-boundary-types": "warn",

        /** Require a consistent member declaration order */
        "@typescript-eslint/member-ordering": [
            "warn", {
                "default": [
                    "signature",
                    "field",
                    "constructor",
                    "method"
                ]
            }
        ],

        /** Enforces naming conventions for everything across a codebase */
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "default",
                "format": [ "camelCase" ],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": "property",
                "format": [ "camelCase" ],
                "modifiers": [ "private" ],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "property",
                "format": [ ],
                "modifiers": [ "public" ]
            },
            {
                "selector": "property",
                "format": [ "camelCase" ],
                "modifiers": [ "public", "readonly" ]
            },
            {
                "selector": "property",
                "format": [ "camelCase", "UPPER_CASE", "PascalCase" ],
                "modifiers": [ "public", "static" ]
            },
            {
                "selector": "property",
                "format": [ "camelCase", "UPPER_CASE", "PascalCase" ],
                "modifiers": [ "static" ]
            },
            {
                "selector": "variable",
                "format": [ "camelCase", "UPPER_CASE", "PascalCase" ]
            },
            {
                "selector": "typeLike",
                "format": [ "PascalCase" ]
            },
            {
                "selector": "enumMember",
                "format": [ "camelCase", "UPPER_CASE", "PascalCase" ]
            }
        ],

        /** Requires that .toString() is only called on objects which provide useful information when stringified */
        "@typescript-eslint/no-base-to-string": "warn",

        /**
         * Disallow the delete operator with computed key expressions
         *
         * Disabled because deleting object entries is fine and not always is Map the best replacement for it.
         */
        "@typescript-eslint/no-dynamic-delete": "off",

        /**
         * Disallow usage of the any type
         *
         * (Disabled because way to strict. It's enough to let the TypeScript-Compiler check this)
         */
        "@typescript-eslint/no-explicit-any": "off",

        /** Disallow extra non-null assertion */
        "@typescript-eslint/no-extra-non-null-assertion": "warn",

        /** @typescript-eslint/no-extraneous-class */
        "@typescript-eslint/no-extraneous-class": [
            "warn", {
                "allowEmpty": true,
                "allowStaticOnly": true,
                "allowWithDecorator": true
            }
        ],

        /** Requires Promise-like values to be handled appropriately */
        "@typescript-eslint/no-floating-promises": [
            "warn", { "ignoreVoid": true }
        ],

        /** Disallow the use of eval()-like methods */
        "@typescript-eslint/no-implied-eval": "warn",

        /**
         * Disallows explicit type declarations for variables or parameters initialized to a number, string, or
         * boolean.
         *
         * This rule has been softened to allow type declarations on initialized parameters and properties because
         * of consistency and readability.
         */
        "@typescript-eslint/no-inferrable-types": [
            "warn",
            {
                "ignoreParameters": true,
                "ignoreProperties": true
            }
        ],

        /** Avoid using promises in places not designed to handle them */
        "@typescript-eslint/no-misused-promises": [
            "warn",
            {
                "checksVoidReturn": false
            }
        ],

        /**
         * Disallow the use of custom TypeScript modules and namespaces
         *
         * (Disabled because namespaces are quite useful to augment non-class types like enums with functions)
         */
        "@typescript-eslint/no-namespace": "off",

        /** Disallows using a non-null assertion after an optional chain expression */
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",

        /**
         * Disallows using a non-null assertion after an optional chain expression
         */
        "@typescript-eslint/no-non-null-assertion": "warn",

        /**
         * Disallow the use of parameter properties in class constructors
         *
         * (Disabled because useful feature)
         */
        "@typescript-eslint/no-parameter-properties": "off",

        /** Disallows invocation of require() */
        "@typescript-eslint/no-require-imports": "warn",

        /**
         * Disallow aliasing this
         *
         * (Disabled because it breaks assigning `this` conditionally to a variable)
         */
        "@typescript-eslint/no-this-alias": "off",

        /** Disallow throwing literals as exceptions */
        "@typescript-eslint/no-throw-literal": "warn",

        /**
         * Disallow the use of type aliases
         *
         * (Disabled because type aliases are useful to create shorter aliases for complex types)
         */
        "@typescript-eslint/no-type-alias": "off",

        /** Flags unnecessary equality comparisons against boolean literals */
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",

        /**
         * Prevents conditionals where the type is always truthy or always falsy.
         *
         * (Sounds useful and finds some interesting really unnecessary stuff but unfortunately it has problems
         * with array access which can return `undefined` and therefore require conditions but the rule thinks the
         * array access always returns a non-undefined value and therefor the rule creates lots of false-positives.
         * So it is disabled)
         */
        "@typescript-eslint/no-unnecessary-condition": "off",

        /**
         * Warns when a namespace qualifier is unnecessary
         *
         * Disabled because it does not work with namespaces which augment enums with functions.
         */
        "@typescript-eslint/no-unnecessary-qualifier": "off",

        /** Enforces that type arguments will not be used if not required */
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",

        /**
         * Disallow unused variables and arguments
         *
         * (Disabled because I'd like to keep unused parameters in function signatures)
         */
        "@typescript-eslint/no-unused-vars-experimental": "off",

        /** Prefer usage of as const over literal type */
        "@typescript-eslint/prefer-as-const": "warn",

        /**
         * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being
         * iterated
         */
        "@typescript-eslint/prefer-for-of": "warn",

        /** Use function types instead of interfaces with call signatures */
        "@typescript-eslint/prefer-function-type": "warn",

        /** Enforce the usage of the nullish coalescing operator instead of logical chaining */
        "@typescript-eslint/prefer-nullish-coalescing": "warn",

        /**
         * Prefer using concise optional chain expressions instead of chained logical ands
         *
         * Disabled because sometimes null checks are easier to understand than optional chaining
         */
        "@typescript-eslint/prefer-optional-chain": "off",

        /** Requires that private members are marked as readonly if they're never modified outside of the constructor */
        "@typescript-eslint/prefer-readonly": "warn",

        /**
         * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
         *
         * (Disabled because no idea what this is all about. The rule complains about parameters which are not arrays
         * so they can't be set to readonly)
         */
        "@typescript-eslint/prefer-readonly-parameter-types": "off",

        /**
         * Requires any function or method that returns a Promise to be marked async.
         *
         * Disabled because it doesn't work with optional promises.
         */
        "@typescript-eslint/promise-function-async": "off",

        /** Requires Array#sort calls to always provide a compareFunction */
        "@typescript-eslint/require-array-sort-compare": "warn",

        /**
         * When adding two variables, operands must both be of type number or of type string
         *
         * Disabled because string concatenation with type conversion is totally fine.
         */
        "@typescript-eslint/restrict-plus-operands": "off",

        /**
         * Enforce template literal expressions to be of string type
         *
         * (Disabled because it's fine to use numbers in template expressions)
         */
        "@typescript-eslint/restrict-template-expressions": "off",

        /** Restricts the types allowed in boolean expressions. */
        "@typescript-eslint/strict-boolean-expressions": [
            "warn", {
                "allowNullableObject": false,
                "allowString": false,
                "allowNumber": false
            }
        ],

        /** Exhaustiveness checking in switch with union type */
        "@typescript-eslint/switch-exhaustiveness-check": "warn",

        /** Sets preference level for triple slash directives versus ES6-style import declarations. */
        "@typescript-eslint/triple-slash-reference": "warn",

        /**
         * Require consistent spacing around type annotations
         *
         * (Disabled for now because this rule is broken for `new () => T` type annotations)
         */
        "@typescript-eslint/type-annotation-spacing": "off",

        /**
         * Requires type annotations to exist
         *
         * (Disabled because it needs lots of additional type definitions in anonymous functions which typescript
         * can perfectly infer automatically).
         */
        "@typescript-eslint/typedef": "off",

        /**
         * Enforces unbound methods are called with their expected scope
         *
         * (Disabled because it interferes with Signal implementation)
         */
        "@typescript-eslint/unbound-method": "off",

        /**
         * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
         *
         * (Disabled because it may make sense to keep separate signatures to document them separately for example)
         */
        "@typescript-eslint/unified-signatures": "off",

        /** Enforce consistent brace style for blocks */
        "@typescript-eslint/brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],

        /** Enforces consistent spacing before and after commas */
        "@typescript-eslint/comma-spacing": "warn",

        /** Enforce default parameters to be last */
        "@typescript-eslint/default-param-last": "warn",

        /** Require or disallow spacing between function identifiers and their invocations */
        "@typescript-eslint/func-call-spacing": "warn",

        /**
         * Enforce consistent indentation
         *
         * (Disabled because the rule is not configurable enough to represent the style used in the code)
         * */
        "@typescript-eslint/indent": "off",

        /**
         * Require that interface names be prefixed with I or not.
         *
         * (Disabled because we don't want a prefix but some interfaces (ICCProfile) looks like they have a prefix)
         */
        "@typescript-eslint/interface-name-prefix": "off",

        /** Disallow duplicate class members */
        "@typescript-eslint/no-dupe-class-members": "warn",

        /**
         * Disallow empty functions.
         *
         * (Disabled because empty functions are unavoidable in many cases and documenting them all to be intentionally
         * empty is annoying)
         */
        "@typescript-eslint/no-empty-function": "off",

        /**
         * Disallow unnecessary parentheses
         *
         * (Disabled because setting extra parens may increase readability for humans)
         */
        "@typescript-eslint/no-extra-parens": "off",

        /** Disallow unnecessary semicolons */
        "@typescript-eslint/no-extra-semi": "warn",

        /**
         * Disallow magic numbers
         *
         * (Disabled because this rule is annoying as hell. Just let me use my numbers!)
         */
        "@typescript-eslint/no-magic-numbers": "off",

        /** Disallow unused expressions */
        "@typescript-eslint/no-unused-expressions": "warn",

        /** Disallow unused variables */
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "args": "none"
            }
        ],

        /**
         * Disallow the use of variables before they are defined
         *
         * (Disabled because this is way to strict. Real use-before-define problems are already covered by the
         * TypeScript compiler. The rest of the problems reported by this rule are false positives)
         */
        "@typescript-eslint/no-use-before-define": "off",

        /** Disallow unnecessary constructors */
        "@typescript-eslint/no-useless-constructor": "warn",

        /** Enforce the consistent use of either back-ticks, double, or single quotes */
        "@typescript-eslint/quotes": [
            "warn",
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],

        /** Disallow async functions which have no await expression */
        "@typescript-eslint/require-await": "warn",

        /** Enforces consistent returning of awaited values */
        "@typescript-eslint/return-await": "warn",

        /** Require or disallow semicolons instead of ASI */
        "@typescript-eslint/semi": "warn",

        /** Enforces consistent spacing before function parenthesis */
        "@typescript-eslint/space-before-function-paren": [
            "warn",
            {
                "named": "never",
                "anonymous": "never",
                "asyncArrow": "always"
            }
        ]
    }
};

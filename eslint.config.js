import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    { ignores: ["dist/**"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        },
    },
    {
        // Decorator signatures and the GraphQL resolver context/root they receive
        // are structurally dynamic (TS decorator API, arbitrary entity shapes).
        files: ["src/decorators/**/*.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
    {
        // type-graphql/typeorm decorators take lazy-type callbacks like
        // `(type) => Foo` or `(of) => Foo` where the parameter is conventionally
        // named but intentionally unused.
        files: ["src/examples/**/*.ts"],
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
        },
    },
    {
        files: ["src/tests/**/*.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
);

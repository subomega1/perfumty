// eslint-disable-next-line import/no-unresolved
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import"; // Import the plugin

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["node_modules/", "dist/", ".env"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      import: importPlugin, // Add the import plugin
    },
    settings: {
      "import/resolver": {
        node: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      indent: ["warn", 2],
      semi: ["error", "always"],
      "no-console": "off",
      // Import plugin rules
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
    },
  },
]);
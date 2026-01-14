// eslint.config.mjs
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import ts from 'typescript-eslint';
import globals from 'globals';

export default ts.config(
  // Base JS + recommended
  js.configs.recommended,

  // TypeScript (recommended = good balance; use .strict for stricter)
  ...ts.configs.recommended,

  // React + Hooks
  ...react.configs.flat.recommended,
  ...reactHooks.configs.flat.recommended,

  // JSX Accessibility
  jsxA11y.flatConfigs.recommended,

  // Next.js rules (instead of eslint-config-next)
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,  // makes CWV issues errors
    },
  },

  // Global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Ignore patterns (add more as needed)
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**', 'out/**'],
  }
);
module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    "prettier",
    "eslint-plugin-import-helpers"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "off"
  ],
  "@typescript-eslint/no-explicit-any": "off",
  "class-methods-use-this": "off"
  }
}


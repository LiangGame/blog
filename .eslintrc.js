module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint-config-ali/typescript/react"
  ],
  "globals": {
    "EASY_ENV_IS_BROWSER": "readonly",
    "EASY_ENV_IS_DEV": "readonly",
    "EASY_ENV_IS_NODE": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks",
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
    "semi": [2, "always"],
    "camelcase": 1,
    "comma-dangle": [2, "always-multiline"],
  }
};

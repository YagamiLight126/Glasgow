module.exports = {
  extends: ["alloy", "alloy/typescript", "prettier"],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  globals: {
    // 这里填入你的项目需要的全局变量
  },
  rules: {
    "no-console": "error",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-require-imports": 0, // 即使使用最新方案去在node中使用es6-modules方案也是麻烦的
    "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
  },
};

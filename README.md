## 说明

Code Template

## 功能

- [x] 直接调试 TS 代码
- [x] Prettier 格式化代码，eslint 控制 Code-quality
- [x] 单元测试

## 包功能说明

- typescript: TS 本体
  - 配置文件：`tsconfig.json`
- jest: 测试框架
  - 配置文件：`jest.config.js`
  - 类型库：@types/jest
- ts-node：用来在 vscode 中直接调试 ts 代码的库
- ts-jest：jest 在 ts 中的解释器
- prettier：使用它和 eslint 进行配合，prettier 格式化代码，eslint 控制 Code-quality
- husky: 用来咬住 git 的 hooks 去做一些事情
- eslint：控制 Code-quality
- @typescript-eslint/parser：A parser that converts TypeScript into an ESTree-compatible form so it can be used in ESLint.
- eslint-config-prettier：prettier 用来和 eslint 配合的配置
- @typescript-eslint/eslint-plugin：ts 提供的 eslint plugin
- lint-staged：Run linters on git staged files

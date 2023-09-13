
<div align="center">

<img src="https://github.com/zhangsanplus/ares-admin/blob/main/screenshot/logo.png?raw=true" height="200" />

<h1>Ares Mobile</h1>

[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/zhangsanplus/ares-mobile/blob/main/LICENSE)

基于 Vant4 和 Vue3 的 H5 前端**多页面**模板
</div>

## 🔥 介绍

**Ares Mobile** 是一个基于 Vant4 和 Vite 搭建的 H5 前端模板，以古希腊神话中战神 Ares 命名。它旨在帮助开发者快速搭建各种 H5 项目，简化开发流程，提高开发效率。

- [单页面（SPA）模板](https://github.com/zhangsanplus/ares-mobile)
- [多页面（MPA）模板](https://github.com/zhangsanplus/ares-mobile/tree/mpa)

如果你需要搭建中后台管理系统，推荐你使用 [Ares Admin](https://github.com/zhangsanplus/ares-admin)

## 🌈 安装和使用

- 安装依赖

```bash
# npm i pnpm -g

pnpm i
```

- 开发运行

```bash
pnpm run dev
```

- 编译构建

```bash
# 测试环境
npm run build:test

# 生产环境
npm run build
```

- 新建页面

```sh
# 添加新页面
npm run new

# 输入页面名称(页面名 + 空格 + 中文标题)
# 例如：home 首页
# 或直接在项目 `src/pages` 目录下新建 html
```

- 升级依赖

```sh
npm run up
```

## ✨ 特性

- [x] 移动端组件库：`vant`
- [x] 原子化CSS：`unocss`
- [x] 应用程序级JS的语言：`TypeScript`
- [x] 移动端适配：`postcss-px-to-viewport`
- [x] 开发环境区分：`development + test + production`
- [x] 移动端调试工具：`eruda`
- [x] 旧版浏览器兼容：`plugin-legacy`
- [x] 代码格式化：`eslint`
- [x] CSS格式化：`stylelint`
- [x] 文件目录格式化：`ls-lint`
- [x] 代码提交规范：`commitlint`

## 如何贡献

1. Fork 代码
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交 `pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

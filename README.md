## 石狮农商H5项目
### 推荐IDE

[VSCode](https://code.visualstudio.com/)

### 自定义配置

[Vite Configuration Reference](https://vitejs.dev/config/).

## 项目设置
安装依赖
```sh
npm install
```

### 开发模式

```sh
npm run dev
```

### 打包dist文件

```sh
npm run build
```

###  ESLint工作流
[ESLint](https://eslint.org/)样式审查 + husky

```sh
npm run lint // 执行样式审查
```

提交代码的时候必须通过样式审查，并且符合提交规范才能提交成功

```
feat: 新功能
fix: 修改 bug
docs: 文档
perf: 性能相关
refactor: 代码重构（就是不影响使用，内部结构的调整）
test: 测试用例
style: 样式修改
workflow: 工作流
build: 项目打包构建相关的配置修改
ci: 持续集成相关
revert: 恢复上一次提交（回滚）
wip: work in progress 工作中 还没完成
chore: 其他修改（不在上述类型中的修改）
release: 发版
deps: 依赖相关的修改

```

例如： `git commit -m 'fix: 修复一些已知问题'`
![0](./docs/README_0.png)

# Gitvew -- 极视

“ GitHub 数据可视化客户端 ”

**预期功能**

- GitHub 日常使用
- 版本库数据可视化对比
- 源码阅读

**技术栈**

ReactNative + Redux

- iconfont: 图标库，在 ReactNative 中可通过 unicode 方式使用
- antd-mobile: Ant Design 在移动端的组件库
- babel-plugin-module-resolver: 可自定义目录映射的 babel  插件
- buffer: Node.js 中的 buffer 模块，为 Base64 加密使用
- eslint-config-airbnb: airbnb 的 eslint 规则，具体调整见 eslintrc
- react-navigation: 导航（路由）系统
- redux-thunk: 异步action中间件
- styled-components：参数化、模块化CSS方案

**项目结构**

```
components
+-- nav
|   `-- AppNavigator
+-- auth
|   +-- Splash
|   `-- Login
+-- main
    `-- Main
        +-- Dashboard
        +-- Explore
        +-- Visual
        +-- Local
        +-- repository
        `-- profile
```

**导航结构**

```
App(stack)
+-- Splash
+-- Login
+-- Main(tab)
|   +-- Dashboard
|   +-- Explore
|   +-- Visual
|   `-- Local
+-- Repository
+-- Profile
```

**开发日志**

[dev-log](./docs/dev-log.md)

## 施工中...
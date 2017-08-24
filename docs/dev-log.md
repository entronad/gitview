# 功能：

explore

​	showcases

​	trending

​	search

dashboard

compare

local

# feature

比较（star、commit曲线）

md、代码查看（下载，离线查看）

代码贡献热力图

# techstack

产品设计

墨刀：https://modao.cc/

cli: create-react-native-app

https://github.com/react-community/create-react-native-app

组件库: antd-mobile

https://mobile.ant.design/index-cn

数据可视化: react-native-echarts

https://github.com/somonus/react-native-echarts

star历史曲线: star-history-plugin

https://github.com/timqian/star-history-plugin

navigator

https://github.com/react-community/react-navigation

zip解压

https://github.com/mockingbot/react-native-zip-archive

# ref

https://github.com/gitpoint/git-point

https://github.com/pockethub/PocketHub

https://github.com/gdestiny/graduation_github

https://github.com/seasonfif/github

https://github.com/crazycodeboy/GitHubPopular

http://github.phodal.com/ 关于github

---

对每个repository有两个操作，一个是“加入比较”，一个是“下载到本地”

需要先做一个repository的组件

local：

下载https://github.com/entronad/gitview/archive/master.zip --> 解压缩到目录 --> 基于文件系统的目录索引 -->  代码阅读器/md渲染

# 组件：repository首页

## 总览

尽量自然页面显示，不放在框内

简介、标签

star/watch/fork 

README.md    不足XX长度全部渲染，有多长渲染多长，不显示“显示完整README.md”，超过XX长度，只渲染XX长度，显示“显示完整README.md”

新鲜事    ListView自然渲染，下拉添加

## 代码

## 提交

## issue

## PR

# 组件：Explore

第一版只提供搜索

点击底部导航栏的按钮或后退键会回到顶部

---

antd-mobile: `Table`/`Menu`/`NavBar` 组件暂无 React Native 版本

# Design

| 颜色名       | RGB      |
| --------- | -------- |
| dark-g    | \#1e2327 |
| shallow-g | \#fafbfc |
| blue-g    | \#0366d6 |
| blue-antd | \#108ee9 |



# 功能的简化

模块页面：下方nvbar显示，并通过其切换，toolbar上无返回，登录后有头像，头像点击是menu

独立页面：下方无nvbar，可返回

**ModuleView**

dashboard

​	先只做总览（类似profile页面）

explore

​	搜索

compare

​	先不做

**IndivView**

repo

profile

commit 先不做

pr 先不做

issue 先不做

**common**

RepoList

UserList



# API

connection中的edges比直接nodes多了个cursor，cursor可以用在after参数中做分页用

所有graphql的请求体为如下JSON

```
{
  "query": "XXX"
}

XXX 为
query {
  id
}
或
mutation(input: {}) {
  id
}
将换行转义为字符后的字符串
```


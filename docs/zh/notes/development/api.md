---
title: API
createTime: 2024/11/04 16:53:43
permalink: /zh/development/5ns3pe40/
---
## 后端

golang + yee(写法类似[echo](https://echo.labstack.com/)) + [gorm](https://gorm.io/zh_CN/docs/) + net/rpc

## 前端

js + [vue3.2](https://v3.cn.vuejs.org/) + [vite2](https://vitejs.cn/) + [antDesignVue3.2.0](https://antdv.com/components/overview)

## api文件目录
当前Yearning并无公共API接口用于第三方接入，但可通过现有接口获取相关数据。

具体API可通过[gemini-next](https://github.com/cookieY/gemini-next/tree/next/src/apis)API目录下的接口文件查看，以下为该目录结构：

```
 |-- src
      |-- apis
      |   |-- autotask.ts
      |   |-- board.ts
      |   |-- dash.ts
      |   |-- db.ts
      |   |-- fetchSchema.ts
      |   |-- flow.ts
      |   |-- homeApis.ts
      |   |-- listAppApis.ts
      |   |-- loginApi.ts
      |   |-- orderPostApis.ts
      |   |-- policy.ts
      |   |-- query.ts
      |   |-- record.ts
      |   |-- rules.ts
      |   |-- setting.ts
      |   |-- user.ts

```
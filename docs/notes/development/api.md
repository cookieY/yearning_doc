---
title: API
createTime: 2024/11/04 16:53:43
permalink: /development/5ns3pe40/
---
## Backend

The backend is developed using the following technologies:
- **Golang**: A statically typed, compiled programming language designed for simplicity and efficiency.
- **Yee**: Similar in style to [Echo](https://echo.labstack.com/), used for building high-performance web applications.
- **GORM**: An ORM library for Golang, detailed at [GORM Documentation](https://gorm.io/zh_CN/docs/).
- **Net/RPC**: A package that provides the means to register and call remote functions.

## Frontend

The frontend utilizes the following technologies:
- **JavaScript**: The core scripting language for web development.
- **Vue 3.2**: A progressive JavaScript framework for building user interfaces, see [Vue 3.2](https://v3.cn.vuejs.org/).
- **Vite 2**: A build tool that offers speed and efficiency, see more at [Vite 2](https://vitejs.cn/).
- **Ant Design Vue 3.2.0**: A UI library for Vue applications, see [Ant Design Vue](https://antdv.com/components/overview).

## API File Directory

Currently, Yearning does not provide a public API interface for third-party integration. However, you can access relevant data through existing interfaces.

Detailed APIs can be found in the [gemini-next](https://github.com/cookieY/gemini-next/tree/next/src/apis) API directory, where the API files are structured as follows:


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
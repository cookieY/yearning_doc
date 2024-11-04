---
title: directory
createTime: 2024/11/04 17:00:29
permalink: /zh/development/4mvjiei9/
---
```
|-- Yearning
    |-- .gitignore
    |-- Juno
    |-- LICENSE
    |-- README.md
    |-- README_EN.md
    |-- conf.toml.template
    |-- go.mod
    |-- go.sum
    |-- logo_s.png
    |-- main.go
    |-- cmd  # cli指令
    |   |-- cli.go
    |   |-- cmd.go
    |   |-- migrate.go
    |-- docker
    |   |-- Dockerfile
    |   |-- README.md
    |   |-- docker-compose.yml
    |-- img
    |   |-- audit.png
    |   |-- dash.png
    |   |-- login.png
    |   |-- logo.jpeg
    |   |-- query.png
    |   |-- record.png
    |-- migrate
    |   |-- main.go
    |-- src
        |-- apis
        |   |-- dash.go
        |   |-- fetch.go
        |   |-- query.go
        |-- engine
        |   |-- engine.go
        |-- handler # 接口核心逻辑
        |   |-- dashboard.go
        |   |-- commom # 公共方法
        |   |   |-- error.go
        |   |   |-- expr.go
        |   |   |-- types.go
        |   |   |-- util.go
        |   |-- fetch # 通用获取接口
        |   |   |-- fetch.go
        |   |   |-- fetch_test.go
        |   |   |-- impl.go
        |   |-- login # 登录及个人信息接口
        |   |   |-- login.go
        |   |   |-- profile.go
        |   |-- manage # 管理接口
        |   |   |-- board.go
        |   |   |-- autoTask
        |   |   |   |-- autoTask.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- db
        |   |   |   |-- dbmanage.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- group
        |   |   |   |-- group.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- roles
        |   |   |   |-- roles.go
        |   |   |   |-- route.go
        |   |   |-- settings
        |   |   |   |-- route.go
        |   |   |   |-- setting.go
        |   |   |   |-- setting_test.go
        |   |   |-- tpl
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |   |-- tpl.go
        |   |   |   |-- tpl_test.go
        |   |   |-- user
        |   |       |-- impl.go
        |   |       |-- route.go
        |   |       |-- user.go
        |   |       |-- user_test.go
        |   |-- order # 工单接口
        |   |   |-- audit
        |   |   |   |-- audit.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- osc
        |   |   |   |-- impl.go
        |   |   |   |-- osc.go
        |   |   |   |-- route.go
        |   |   |-- query
        |   |   |   |-- query.go
        |   |   |   |-- route.go
        |   |   |-- record
        |   |       |-- record.go
        |   |-- personal # 用户工单提交/查询 接口
        |       |-- impl.go
        |       |-- order.go
        |       |-- post.go
        |       |-- query.go
        |       |-- query_test.go
        |       |-- route.go
        |       |-- util.go
        |-- lib #公共库
        |   |-- ding.go
        |   |-- encrypt.go
        |   |-- encrypt_test.go
        |   |-- jwtAuth.go
        |   |-- rpc.go
        |   |-- sendMail.go
        |   |-- sendMail_test.go
        |   |-- toolbox.go
        |   |-- toolbox_test.go
        |   |-- wrapper.go
        |-- model # 数据模型
        |   |-- db.go
        |   |-- db_test.go
        |   |-- global.go
        |   |-- impl.go
        |   |-- modal.go
        |-- router # 后端路由表
        |   |-- router.go
        |-- service # Yearning启动函数
        |   |-- migrate.go
        |   |-- migrate_test.go
        |   |-- yearning.go
        |-- test
            |-- testCore.go

```
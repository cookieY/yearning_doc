---
title: 安装
createTime: 2024/11/04 14:39:28
permalink: /zh/usage/ixah25xr/
---
# 安装

Yearning 不依赖于任何第三方 SQL 审核工具作为审核引擎,内部已自己实现审核/回滚相关逻辑。

**仅依赖 Mysql 数据库。**

mysql 版本必须为**5.7**及以上版本(8.0及以上请将sql_mode 设置为空)并已事先自行安装完毕且**创建 Yearning 库**,字符集应为**UTF8mb4**(仅 Yearning 所需 mysql 版本)

Yearning 基于 1080p 分辨率开发**仅支持 1080p 及以上显示器访问**

对于设置页面配置重叠的问题请确认自己的分辨率以及是否进行了放大操作

请使用Chrome最新版本(不包括 360 等其他魔改版本)

# Yearning 下载

Yearning-go 提供二进制下载包

下载地址 [https://github.com/cookieY/Yearning/releases](https://github.com/cookieY/Yearning/releases)

**请选择最新版本 在 Assets 中选择 Yearning-x.x.x.linux-amd64.zip 包进行下载**

**如需进行代码修改或自己编译请移步至[二次开发页面]()**

# Yearning 目录结构

![](https://wuchen-1252812685.cos.ap-shanghai.myqcloud.com/img/yearning/20210301141132.png)

## 1.填写配置文件

```shell
cat conf.toml
[Mysql]
Db = "Yearning"
Host = "127.0.0.1"
Port = "3306"
Password = "xxxx"
User = "root"

[General]   #数据库加解密key，只可更改一次。
SecretKey = "dbcjqheupqjsuwsm"
LogLevel = "debug"  # debug,info,warn,error   选择日志显示等级
Lang = "en_US"  # en_US,zh_CN  选择Yearning使用语言
```

### 关于 SecretKey

SecretKey 是 token/数据库密码加密/解密的 salt。

建议所有用户在初次安装 Yearning 之前将 SecretKey 更改(不更改将存在安全风险)

**格式: 大小写字母均可, 长度必须为 16 位 如长度不是16位将会导致无法新建数据源** 

**特别注意:**

**此 key 仅可在初次安装时更改!之后不可再次更改!如再次更改会导致之前已存放的数据源密码无法解密,最终导致无法获取相关数据源信息**

## 使用帮助

```shell
./Yearning --help
```

![](https://wuchen-1252812685.cos.ap-shanghai.myqcloud.com/img/yearning/20210301141137.jpg)

## 2.初始化及安装

```shell
./Yearning install
```

**如要再次安装，请先把 yearning 库下所有表删除，否则重复执行无效**

## 3.启动服务

> 

```shell
默认启动
./Yearning run
参数启动
./Yearning run --push "172.27.80.35" --port "8000"
```

::: warning
请注意:

由于Yearning中个别功能使用websocket进行通信。如采用反向代理的方式访问Yearning请在代理层对websocket协议进行代理支持。

例如: nginx 需要配置 proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection "upgrade";

:::

```

打开浏览器 http://127.0.0.1:8000

默认账号/密码：admin/Yearning_admin

欢迎来到Yearning

```

![](/images/dash01.png)


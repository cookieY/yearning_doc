---
title: Installation
createTime: 2024/11/04 14:39:28
permalink: /usage/ixah25xr/
---

Yearning does not rely on any third-party SQL auditing tools as its auditing engine; it has internally implemented audit/rollback-related logic.

**Only depends on the MySQL database.**

The MySQL version must be **5.7** or above (for 8.0 and above, set `sql_mode` to empty) and should be pre-installed with the **Yearning database created**, with the character set set to **UTF8mb4** (only required for the MySQL version Yearning needs).

Yearning is developed based on a 1080p resolution and **only supports access from 1080p and above displays**.

For overlapping issues on the settings page, please confirm your resolution and check for any zoom operations.

Please use the latest version of Chrome (excluding other modified versions like 360).

# Yearning Download

Yearning-go provides a binary download package.

Download link: [https://github.com/cookieY/Yearning/releases](https://github.com/cookieY/Yearning/releases)

**Please select the latest version and download the Yearning-x.x.x.linux-amd64.zip package from the Assets section.**

**If you wish to modify the code or compile it yourself, please visit the [Secondary Development Page]().**

# Yearning Directory Structure

![Yearning Directory Structure](https://wuchen-1252812685.cos.ap-shanghai.myqcloud.com/img/yearning/20210301141132.png)

## 1. Fill in the Configuration File

```shell
cat conf.toml
[Mysql]
Db = "Yearning"
Host = "127.0.0.1"
Port = "3306"
Password = "xxxx"
User = "root"

[General]   # Database encryption/decryption key, can only be changed once.
SecretKey = "dbcjqheupqjsuwsm"
LogLevel = "debug"  # Options: debug, info, warn, error - Choose the log display level
Lang = "en_US"  # Options: en_US, zh_CN - Choose the language for Yearning
```

### About SecretKey

The SecretKey is used as a salt for token/database password encryption/decryption.

It is recommended to change the SecretKey before initially installing Yearning (failing to change it may pose a security risk).

**Format: Both uppercase and lowercase letters are allowed, and the length must be 16 characters. If the length is not 16 characters, it will result in the inability to create new data sources.**

**Important Note:**

**This key can only be changed during the initial installation! It cannot be changed afterward! Changing it later will cause the existing data source passwords to be undecryptable, ultimately leading to the inability to access related data source information.**

## Usage Help

```shell
./Yearning --help
```

![Yearning Help](https://wuchen-1252812685.cos.ap-shanghai.myqcloud.com/img/yearning/20210301141137.jpg)

## 2. Initialization and Installation

```shell
./Yearning install
```

**If you need to reinstall, please delete all tables under the yearning database first; otherwise, repeated execution is ineffective.**

## 3. Start the Service

```shell
Default start
./Yearning run
Start with parameters
./Yearning run --push "172.27.80.35" --port "8000"
```

::: warning
Please Note:

Due to the use of WebSocket communication in some functions in Yearning, if accessing Yearning through reverse proxy, please ensure WebSocket protocol support at the proxy layer.

For example: For NGINX, configure `proxy_http_version 1.1`; `proxy_set_header Upgrade $http_upgrade`; `proxy_set_header Connection "upgrade";`

:::

```

Open a browser and go to http://127.0.0.1:8000

Default username/password: admin/Yearning_admin

Welcome to Yearning

```

![Yearning Dashboard](/images/dash01.png)
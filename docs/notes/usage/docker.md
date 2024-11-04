---
title: Docker
createTime: 2024/11/04 15:34:40
permalink: /usage/lphvwwj3/
---
### 注意

Yearning安装包内已含有Dockerfile文件,可直接进行build打包成镜像

容器启动时可通过环境变量的方式传入数据库地址以及秘钥。

单独使用docker时请先创建数据库并设置字符集为**utf8mb4**

如下所示

```bash
## 初始化数据库
docker run --rm -it -p8000:8000 -e SECRET_KEY=$SECRET_KEY -e MYSQL_USER=$MYSQL_USER -e MYSQL_ADDR=$MYSQL_ADDR -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_DB=$Yearning_DB -e Y_LANG=zh_CN yeelabs/yearning "/opt/Yearning install"

## 启动 Yearning
docker run -d -it -p8000:8000 -e SECRET_KEY=$SECRET_KEY -e MYSQL_USER=$MYSQL_USER -e MYSQL_ADDR=$MYSQL_ADDR -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_DB=$Yearning_DB -e Y_LANG=zh_CN yeelabs/yearning
```
## Docker-compose(推荐安装)
安装包/源码仓库内docker目录下执行 ``docker-compose up -d`` 即可


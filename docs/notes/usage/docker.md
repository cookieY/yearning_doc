---
title: Docker
createTime: 2024/11/04 15:34:40
permalink: /usage/lphvwwj3/
---
### Notice

The Yearning installation package includes a Dockerfile, allowing you to directly build and package it into an image.

When launching the container, you can pass the database address and secret key using environment variables.

If you are using Docker separately, please create the database first and set the character set to **utf8mb4**.

Here's how to do it:

```bash
## Initialize the database
docker run --rm -it -p8000:8000 -e SECRET_KEY=$SECRET_KEY -e MYSQL_USER=$MYSQL_USER -e MYSQL_ADDR=$MYSQL_ADDR -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_DB=$Yearning_DB -e Y_LANG=zh_CN yeelabs/yearning "/opt/Yearning install"

## Start Yearning
docker run -d -it -p8000:8000 -e SECRET_KEY=$SECRET_KEY -e MYSQL_USER=$MYSQL_USER -e MYSQL_ADDR=$MYSQL_ADDR -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_DB=$Yearning_DB -e Y_LANG=zh_CN yeelabs/yearning
```

## Docker-compose (Recommended Installation)

In the `docker` directory of the installation package/source code repository, execute `docker-compose up -d` to start.


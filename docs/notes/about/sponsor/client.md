---
title: Client-Side Query
createTime: 2024/11/04 16:34:41
permalink: /about/qtes3mwi/
---

The sponsored version implements a query subprogram based on the MySQL protocol, allowing users to query data through various MySQLClient clients, enabling native functionality.

Additionally, client-side queries still support web-based query auditing, interception of non-query statements, and result desensitization.

Users can view client connection information by clicking on personal settings and connect to different data sources (those for which the user has query permissions) using different connection usernames. The connection username is composed of the username@DataSourceID. All client-side query users of a single Yearning user share one query password.

Upon login, the system checks whether the user has relevant data source permissions to prevent malicious privilege escalation.

![Client Connection Info](/images/extra05.png)

In clients like Navicat/DBeaver, enter the corresponding username and password to connect to the user's data source.
![Client Connection Example](/images/extra04.png)

**A user's audit records remain consistent with those on the Yearning web page. Corresponding query work orders can be found and audited through the Approval -> Query section.**

::: warning
1. Each user has only one randomly generated client-side login query password. Please keep it confidential.
2. Client-side queries are only effective when query auditing is disabled.
3. Client-side queries cannot be stopped via the web interface.
4. Client queries will generate various other SQL statements (e.g., automatic setting of utf8mb4, select databases(), etc.).
:::
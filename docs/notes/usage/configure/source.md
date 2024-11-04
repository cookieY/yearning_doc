---
title: Data Sources
createTime: 2024/11/04 15:51:57
permalink: /usage/ocdsdf1t/
---

## Creating Data Sources

<br>
<img src="/images/db.png" style="width:350px">

Key Terminologies:
+ Process: Assign an existing approval process (non-query) to the newly created data source.
+ Owner: The user responsible for the data source, and once query approval is enabled, this person oversees the data source's query approvals.
+ Type: Currently divided into three types: 1. Read-Write (can be queried and executed), 2. Write (execution only), 3. Read (query only).

::: tip
The different types will determine how the data source appears in the shuttle box for different authorization types within a permission group. For details, refer to [Permission Group Settings](/guide/config/group).
:::

## Editing Data Sources

![Edit Data Sources](/images/flowtarget.png)

Key Terminologies:
+ Exclude Databases: Select and save databases that need to be excluded so that they do not appear in the database selection dropdown on the submission order/query page.
+ Masking Fields: When masking fields are entered, the matched field data (case-sensitive) under this data source will not be displayed in the query results.

::: warning
If the following warning notification appears after clicking the data source edit button:
![Warning Notification](/images/cannot.png)

This indicates that there is a configuration issue with the data source, and it cannot connect to the database.
:::
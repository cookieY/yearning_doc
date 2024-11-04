---
title: How to update?
createTime: 2024/11/04 16:20:19
permalink: /usage/q8mdejgq/
---

Yearning employs automatic table structure synchronization, eliminating the need for manual table structure updates. Simply **stop the original service, replace the installation package, and restart**.

> In some special upgrade situations (destructive changes), manual data synchronization may be required. If there is no destructive upgrade indicated in the version upgrade announcement, you can ignore the following command!

```shell
./Yearning migrate
```

::: warning
#### Updating from Version 2.3.5 to 3.0.0

**The current version only supports updates from version 2.3.5**

1. Back up the original Yearning database.

2. Execute the **./migrate** binary file in the Yearning directory. Note that this must be executed **before Yearning starts!**

3. Start Yearning normally.
:::

::: danger
Due to the addition of new changes in some newer versions, please close the Yearning page and log in again after updating to use smoothly.

Since processes, database exclusion, and desensitization logic have been changed to be based on data sources, please update the configurations at the data source after updating.
:::
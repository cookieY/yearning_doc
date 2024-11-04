---
title: Submission
createTime: 2024/11/04 16:42:50
permalink: /usage/zz18pjdz/
---

Click on the work order application page and select the Query category for submission.

![Query Submission](/images/query01.png)

If the query review feature is enabled, you will access the following interface:

![Query Review Interface](/images/query02.png)

::: tip

+ When query review is enabled, you must submit a query request and get approval from the data source owner before performing queries. Only one data source can be queried at a time (queryable data sources are those for which the user has query permissions).
+ If query review is enabled, you must indicate if you wish to export the data during application (and the system's query export feature must be enabled).
+ If query review is not enabled, anyone can export data after the query export feature is enabled.
+ If query review is not enabled, a user can only query data sources for which they have query permissions.
+ Since queries use WebSocket connections, if using reverse proxy (like nginx), ensure correct configuration for WebSocket support.
:::

## Query Interface

![Query Interface](/images/query03.png)

Query Features:
+ Database/Table Search
+ Query History with One-click Copy
+ Multi-window Query
+ Support for executing multiple SQL statements simultaneously and displaying results
+ Right-click on table names to view table data information
+ If data export is enabled, you can export corresponding results after SQL execution

::: tip
+ When focused on the editor, use Ctrl/Cmd + E to trigger SQL query execution.
+ When focused on the editor, use Ctrl/Cmd + B to beautify SQL statements.
+ The editor supports common text shortcuts.
:::

## Clipboard Feature

![Clipboard Feature](/images/query04.png)

The Clipboard feature is similar to the Paste utility on Mac. Click to create a new clipboard, fill in the name and content in the pop-up window, and save. Use the Alt (Option) && Ctrl (Command) + V shortcut to access the clipboard.

![Clipboard Use](/images/query05.png)

Click the **Copy** icon to copy instantly.

## History Feature

<img src="/images/query06.png" style="width: 350px">

All successfully executed SQL statements are saved in the history for easy copying and reuse at any time.

::: tip
The History and Clipboard features appear similar, but they serve different use cases:

+ History: Quickly find and re-execute SQL statements during the current query session.
+ Clipboard: Save frequently used statements for copying and execution at any time.

Note: Both the clipboard and history data are stored locally in the user's browser. If using incognito mode, these features won't be available, and clearing browser data will also erase previous data.
:::
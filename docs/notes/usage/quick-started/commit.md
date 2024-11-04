---
title: Submission
createTime: 2024/11/04 16:40:50
permalink: /usage/oa6oxmp4/
---

Click on the work order application page and select either DML, DDL, or Query based on your submission needs to submit a work order.

![Work Order Submission](/images/order01.png)

Click the corresponding data source card to enter the work order submission page.

![Work Order Submission Page](/images/order02.png)

Layout Overview:
+ Left Side of the Page:
  + Fill in the work order information, with fields for Database and Work Order Description required.
  + After selecting the corresponding data table, click the **Get Table Structure** button to display the field and index information of the data table.
  + Scheduled Execution: This function relies on the local time on the server where Yearning is deployed. Synchronize the server time with local usage time to avoid errors. Additionally, since Yearning does not rely on third-party scheduling services, if Yearning crashes or restarts before the scheduled execution time, it will lose the schedule and the work order will not execute.
  + If the **Rollback** option is set to **Yes**, a rollback statement will be automatically generated and saved if the database supports binlog during the execution of the submitted SQL statement.
+ Right Side of the Page:
  + Top Right SQL Editor Box: Enter the SQL statements to be submitted into this editor box. Use the right-click menu to select the **SQL Check** button for SQL statement verification or the **SQL Beautify** button for formatting.
  + Bottom Right Audit Results Area: Displays the inspection results of the SQL statement after clicking the SQL Check button.

::: tip
+ When the focus is in the editor, use Ctrl/Cmd + E to trigger SQL check.
+ When the focus is in the editor, use Ctrl/Cmd + B to trigger SQL beautification.
+ The editor supports common text shortcuts.
+ The **Submit** button will only be enabled when all SQL statements have an **Error Level** of 0.
:::

## AutoTask

Automatic Task Execution:

Users can set up automatic task execution with this feature. When the submitted DML statements meet the conditions of an automatic task, they will be executed automatically without reviewer approval.

This feature is only applicable for DML statements. Use with caution!
---
title: Approval/Execution
createTime: 2024/11/04 16:37:59
permalink: /usage/76kpl0j9/
---

Navigate to the Approval -> Work Orders page, select the work order you need to approve, and click the details button to access the work order approval details page.

![Work Order Approval Details](/images/audit01.png)

Layout Overview:
+ Upper Side of the Page:
  + Display of basic work order information
  + Approval buttons
+ Lower Side of the Page:
  + Work order process and progress
  + SQL statement display, with options such as **SQL Check** for SQL statement verification or **SQL Beautify** for SQL statement formatting accessible from the right-click menu.
  + SQL statement approval results  

::: tip
+ When the focus is in the editor, use the Ctrl/Cmd + E shortcut to trigger SQL check.
+ When the focus is in the editor, use the Ctrl/Cmd + B shortcut to trigger SQL beautification.
+ The editor supports common text shortcuts.
+ The **Approve** button will only be activated when all **Error Levels** in the checked statements are 0.
+ After the final node personnel in the process have given their approval, Yearning will automatically execute the work order.
:::

## Generating Rollback Work Orders
![Generate Rollback Work Order](/images/audit02.png)

If the work order executes successfully and rollback statement generation is enabled, you can roll back the executed SQL by clicking the **Submit Rollback Statement** button in the **Results Section** of the work order details page. This will create a new work order (containing the rollback statement) that will follow the process through to execution.
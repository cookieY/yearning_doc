---
title: 工单提交
createTime: 2024/11/04 16:40:50
permalink: /zh/usage/oa6oxmp4/
---

点击工单申请页面，根据实际提单需求选择DML/DDL/Query中的某一类进行工单提交。

![](/images/order01.png)

点击对应数据源卡片进入工单提交页面


![](/images/order02.png)

布局介绍
+ 页面左侧
  + 工单信息填写，其中数据库，工单说明为必填。
  + 当选择对应数据表之后点击**获取表结构**按钮将会展示该数据表字段及索引信息
  + 定时执行 该功能依赖Yearning所部署服务器上本地时间，请将服务器时间与本地使用时间保持一致，否则将会出现错误。同时，由于Yearning并未依赖其他第三方定时服务，如在定时执行时间之前Yearning崩溃/重启将会丢失定时信息导致工单无法执行。
  + 当**是否回滚**选项选择为 **是** 时，该工单提交的SQL语句执行时如果该数据库开启binlog则会自动生成对应的回滚语句并保存。
+ 页面右侧
  + 右上SQL编辑框 请将需要提交的SQL语句填写入该编辑框内，鼠标右键菜单中选择 **SQL检测** 按钮进行SQL语句检测或通过 **SQL美化** 按钮进行SQL语句美化
  + 右下审核结果区域  当点击 SQL检测 按钮后该区域将会展示该SQL语句的检测结果。

::: tip
+ 当焦点处于编辑器中时，可以采用Ctrl/Cmd + E 快捷键触发SQL检测
+ 当焦点处于编辑器中时，可以采用Ctrl/Cmd + B 快捷键触发SQL美化
+ 同时该编辑器支持常用文本快捷键
+ **提交**按钮只有在检测语句 **错误等级** 均为0时才会激活
:::

## AutoTask

自动执行任务:

用户可通过该功能设置自动执行任务。当提交的dml语句符合相应任务条件。将会自动执行，无需审核人审核。

该功能仅限dml语句使用。请慎重使用！
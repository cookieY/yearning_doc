---
title: PT-OSC/GH-OST
createTime: 2024/11/04 15:54:38
permalink: /usage/cgd82cua/
---


::: warning
关于OSCExpr审核规则的注意事项：

在3.0.0版本之前的Yearning版本中，通过强制pt-osc的参数名来统一pt-osc执行指令。这给用户带来了不小的麻烦:
1. 无法扩展参数
2. 无法正确了解Yearning中的参数与pt-osc的关联性
3. 无法使用除pt-osc的其他迁移工具
:::

基于以上原因，在Yearning3.0.0中增加了OSCExpr参数，并废除了pt-osc相关的参数规则。

通过增加通用变量的方式来尽可能的满足所有场景下的DDL迁移工具需求。

增加通用变量如下：
```shell

1.  $SQL   对应执行工单SQL语句  
2.  $ADDR   对应执行工单数据源地址
3.  $PORT  对应执行工单数据源端口
4.  $USER    对应执行工单数据源用户
5.  $PASSWORD   对应执行工单数据源密码
6.  $SCHEMA   对应执行工单库名  
7.  $TABLE  对应执行工单表名
````

变更后如需在DDL语句中调用pt-osc指令则可以使用如下写法填写:

```shell
pt-online-schema-change --alter $SQL --user=$USER --password=$PASSWORD --host=$ADDR P=$PORT,D=$SCHEMA,t=$TABLE --execute
```

系统将自动把对应工单的相关数据填充到所关联的变量中，无需用户手动操作。

如需使用其他迁移工具，只需要将相关通用变量填入对应的指令中即可(如 gh-ost)。

**执行结果请在执行工单的工单详情处点击osc进度tab页进行查看**


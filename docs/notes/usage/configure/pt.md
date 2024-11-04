---
title: PT-OSC/GH-OST
createTime: 2024/11/04 15:54:38
permalink: /usage/cgd82cua/
---

::: warning
Regarding OSCExpr audit rule considerations:

In versions of Yearning prior to 3.0.0, pt-osc execution instructions were standardized through forced pt-osc parameter names. This created several issues:

1. The inability to extend parameters
2. Difficulty in understanding the relationship between parameters in Yearning and pt-osc
3. Lack of support for migration tools other than pt-osc
:::

Due to the above reasons, Yearning 3.0.0 introduces the OSCExpr parameter, replacing the previous pt-osc parameter rules.

By introducing general variables, the aim is to cater to all scenarios for DDL migration tool requirements. The added general variables are as follows:

```shell
1.  $SQL       Corresponds to the execution order's SQL statement  
2.  $ADDR      Corresponds to the execution order's data source address
3.  $PORT      Corresponds to the execution order's data source port
4.  $USER      Corresponds to the execution order's data source user
5.  $PASSWORD  Corresponds to the execution order's data source password
6.  $SCHEMA    Corresponds to the execution order's database name  
7.  $TABLE     Corresponds to the execution order's table name
```

After the changes, if you need to invoke pt-osc commands in DDL statements, you can write it as follows:

```shell
pt-online-schema-change --alter $SQL --user=$USER --password=$PASSWORD --host=$ADDR --port=$PORT,D=$SCHEMA,t=$TABLE --execute
```

The system will automatically populate the related data from the corresponding order into the associated variables, eliminating the need for manual input.

If you wish to use other migration tools, you simply need to substitute the relevant general variables into the appropriate command (for instance, gh-ost).

**To view the execution results, click the OSC Progress tab in the order details of the execution order.**
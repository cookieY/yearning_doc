# 审核规则

审核规则请通过 管理 -> 审核规则 处进行修改

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

1.  $SQL   
2.  $ADDR 
3.  $PORT 
4.  $USER 
5.  $PASSWORD 
6.  $SCHEMA 
7.  $TABLE

变更后如需在DDL语句中调用pt-osc指令则可以使用如下写法填写:

```shell
pt-online-schema-change --alter $SQL --user=$USER --password=$PASSWORD --host=$ADDR P=$PORT,D=$SCHEMA,t=$TABLE --execute
```

系统将自动把对应工单的相关数据填充到所关联的变量中。

如需使用其他迁移工具，只需要将相关通用变量填入对应的指令中即可(如 gh-ost)。


---
title: LDAP配置
createTime: 2024/11/04 15:54:19
permalink: /usage/xp6epr8b/
---

![](/images/ldap01.png)

在 管理 -> 设置页面中 填写LDAP相关信息

**如开启ldaps请勾选启动ldaps复选框**

::: tip
LDAP_Search filter 请根据实际情况填写，特别需要注意的是在Yearning中占位符使用%s进行表示，如上图所示。如果通过cn进行过滤则使用(&(cn=%s))。

输入对应测试用户密码即可对LDAP鉴权进行测试。
:::

## LDAP用户属性映射

通过属性映射将LDAP中的属性信息与Yearning用户的数据信息，例如部门，邮箱，真实姓名进行关联。

当前支持real_name(真实姓名),email(邮箱),department(部门) 3种字段的映射。 例如：ldap用户信息中 name字段对应真实姓名，dept字段对应部门，mail字段对应邮箱则映射格式如下(key为需要映射的用户字段,value为LDAP的对应属性的key值):
```json

{ "real_name":"name","email":"mail","department":"dept" } 

```

当设置完毕且正确后，LDAP用户第一次登录Yearning时将自动把对应LDAP属性信息更新到Yearning的用户数据中，不再需要管理员单独进行设置。
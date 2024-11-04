<template><div><p>赞助版实现了基于mysql协议的查询子程序，用户可通过不同的MysqlClient客户端来查询数据，实现原生功能。</p>
<p>同时C端查询依然支持网页端查询审计,非Query语句拦截,结果脱敏等功能。</p>
<p>用户点击个人设置查看客户端连接信息,通过不同的连接用户名可连接不同的数据源(该数据源为该用户的Query数据源权限)。</p>
<p>连接用户由 用户名@数据源ID组成，单Yearning用户的所有C端查询用户共用一个查询密码。</p>
<p>登录时会检查用户是否存在相关数据源权限,规避恶意提权问题。</p>
<p><img src="/images/extra05.png" alt=""></p>
<p>在 navicat/DBeaver 等客户端中输入对应用户名,密码即可连接到该用户的数据源。
<img src="/images/extra04.png" alt=""></p>
<p><strong>用户的审计记录与在Yearning 网页端一致。可通过审核--查询找到对应查询工单进行审计</strong></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ol>
<li>每个用户有且仅有一个随机生成的C端登录查询密码，请勿泄露。</li>
<li>C端查询仅在关闭查询审核时才生效</li>
<li>C端查询无法在网页端中止查询</li>
<li>客户端查询会产生许多其他的SQL语句执行(例如 自动设置utf8mb4，select databases()....)</li>
</ol>
</div>
</div></template>



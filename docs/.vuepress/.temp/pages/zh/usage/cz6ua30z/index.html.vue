<template><div><h2 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h2>
<p>创建用户有以下两种方式:</p>
<ul>
<li>LDAP登录 当用户第一次通过LDAP登录并成功后Yearning将自动创建该用户数据。(在Yearning中LDAP用户的密码为随机密码，所以LDAP用户无法通过非LDAP登录的方式登录本系统)</li>
<li>管理员在 管理 -&gt; 用户 页面中手动创建</li>
</ul>
<h2 id="编辑用户" tabindex="-1"><a class="header-anchor" href="#编辑用户"><span>编辑用户</span></a></h2>
<p><img src="/images/user01.png" alt="">
点击编辑按钮可编辑改用户行数据,如下所示:
<img src="/images/user02.png" alt=""></p>
<p>重点名词释义:</p>
<p>1.审计人  当用户为审计人角色时，将可查看审计页面下相关信息。</p>
<h2 id="用户赋权" tabindex="-1"><a class="header-anchor" href="#用户赋权"><span>用户赋权</span></a></h2>
<p><img src="/images/user03.png" alt="">
点击权限按钮即可对该用户进行赋权。可以同时将多个权限组赋予用户，用户的权限将根据所赋予的1个或多个权限组权限计算并去重后获得。
权限组权限配置请参考<a href="/guide/config/group">权限组设置</a>。</p>
</div></template>



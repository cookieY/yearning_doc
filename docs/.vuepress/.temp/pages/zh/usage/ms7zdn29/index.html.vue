<template><div><h3 id="理念" tabindex="-1"><a class="header-anchor" href="#理念"><span>理念</span></a></h3>
<p><strong>Yearning自2.1.7版本之后采用权限组的方式进行权限授权,权限最低下放至数据源。</strong></p>
<p><strong>Yearning中用户先以角色的形式分为两大类,分别为 普通用户/超级管理员。其中超级管理员角色为可见管理页面角色,普通用户为非可见管理页面角色。通过角色Yearning在细粒度权限划分之前先将用户分类。使管理类权限不会出现在使用者细粒度权限划分中</strong></p>
<p><strong>可根据每个用户的实际需求配置相应ddl/dml/查询数据源。每一类权限相互独立互不干扰。</strong></p>
<h3 id="权限种类" tabindex="-1"><a class="header-anchor" href="#权限种类"><span>权限种类</span></a></h3>
<p>在Yearning中权限共分为2大类</p>
<ol>
<li>
<p>角色权限</p>
</li>
<li>
<p>细粒度权限</p>
</li>
</ol>
<p>角色权限: 普通用户/超级管理员  该权限主要用来划定各用户权限边界并规定功能入口</p>
<p>细粒度权限: DML/DDL/查询的数据源访问权限,查询上级审核人</p>
<h3 id="如何分配权限" tabindex="-1"><a class="header-anchor" href="#如何分配权限"><span>如何分配权限</span></a></h3>
<p>角色权限:超级管理员在新建用户时可自行设置对应角色。LDAP用户登录默认第一次登录均为提交人角色。可在登录后由超级管理员修改角色(必须在赋权之前确定好用户的角色)</p>
<p>细粒度权限: 超级管理员建立权限组并将单个或多个权限组赋予用户，使用户继承权限组的细粒度权限。</p>
<h3 id="yearning没有初始超级管理员权限" tabindex="-1"><a class="header-anchor" href="#yearning没有初始超级管理员权限"><span>Yearning没有初始超级管理员权限</span></a></h3>
<p>首次使用Yearning时超级管理员本身也不具备对应的细粒度权限,需自行配置。 新建用户同样不具备任何权限。任何操作都必须在赋予对应的权限之后才能执行。所以请在使用之前赋予用户权限！</p>
<h3 id="设置用户权限" tabindex="-1"><a class="header-anchor" href="#设置用户权限"><span>设置用户权限</span></a></h3>
<p>1.超级管理员可在权限组页面创建相应权限组,并赋予权限组相关权限。</p>
<p>2.超级管理员在用户权限页面中选择用户并赋予权限(单个用户可授予多个权限组且当权限组权限重复时自动去重)</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><strong>Yearning采用基于用户的细粒度权限/角色权限,权限最低下放至数据源。</strong></p>
</div>
</div></template>



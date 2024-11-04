<template><div><p><strong>在正式使用Yearning前,你需要先设置如下setup(请务必花几分钟时间阅读!)。</strong></p>
<ol>
<li>创建用户</li>
<li>创建权限组并将权限组赋予给对应的用户</li>
<li>创建审批流程</li>
<li>添加数据源信息</li>
<li>对数据源赋予审批流程</li>
<li>在设置页面配置各项配置信息</li>
<li>根据需求调整自定义审核规则</li>
</ol>
<h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3>
<p>在Yearning中用户可以通过以下方式创建:</p>
<ol>
<li>在 <strong>管理-&gt;用户</strong> 页面admin用户自行创建用户。</li>
<li>打开 <strong>管理-&gt;设置</strong> 页面中的允许注册配置并保存。 由注册人自行点击yearning登录页面左上角注册按钮进行注册。</li>
<li>配置 <strong>管理-&gt;设置</strong> 页面中的Ldap的信息并保存。 ldap用户可在yearning登录页面中勾选ldap登录进行用户注册/登录操作。</li>
<li>基于config.toml配置的OIDC登陆方式进行用户登录操作。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>ldap配置中对于filter中的%s为占位符，类似于其他ldap系统中的%(user)s</p>
</div>
<h3 id="创建权限组并将权限组赋予给对应的用户" tabindex="-1"><a class="header-anchor" href="#创建权限组并将权限组赋予给对应的用户"><span>创建权限组并将权限组赋予给对应的用户</span></a></h3>
<p>通过<strong>管理-&gt;权限组</strong> 页面，admin可以创建/编辑/删除权限组。权限组提供了多种细粒度的权限管控(yearning目前权限管控仅下沉到数据源级别)如下所示:</p>
<ol>
<li>允许DDL工单提交的数据源范围</li>
<li>允许DML工单提交的数据源范围</li>
<li>允许查询工单提交的数据源范围</li>
</ol>
<p>创建完权限组后请通过<strong>管理-&gt;用户</strong>页面，选择你需要赋予权限组的用户点击该用户对应的权限按钮进行权限组赋权。</p>
<p>权限组设计理念可访问<a href="/guide/authority">权限设计</a></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>一个用户可以被赋予多个权限组,多权限组下该用户会集成2个权限组的全部权限</p>
<p>一个权限组也可以对多个用户进行赋权</p>
</div>
<h3 id="添加数据源信息" tabindex="-1"><a class="header-anchor" href="#添加数据源信息"><span>添加数据源信息</span></a></h3>
<p>通过<strong>管理-&gt;数据库</strong> 页面，admin可以创建/编辑/删除数据源。数据源为一个Mysql实例，数据库共分为读/写/读写三大种类。如果希望该数据源既可处理DDL/DML工单又能进行查询则该数据源应设置为读写，反之根据自己的需求可以设置为读/写。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>Yearning不支持一些特殊字符串例如@，这是由于转义以及可能会带来的pt-osc执行错误而不得不规避的问题，建议用户单独创建一个新的mysql用户用来对接Yearning平台</p>
</div>
<h3 id="为环境创建自定义审核规则" tabindex="-1"><a class="header-anchor" href="#为环境创建自定义审核规则"><span>为环境创建自定义审核规则</span></a></h3>
<p>通过<strong>管理-&gt;流程</strong> 页面，admin可以编辑环境的流程。</p>
<p>Yearning以环境为单元，可对不同的环境配置不同的审核流程。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>更改流程时请确保该环境下的工单都已处理完毕，否则可能会引起流程错乱！</p>
<p>如没有将对应环境配置流程则用户无法对这个环境进行任何DDL/DML工单提交操作</p>
</div>
<h3 id="在设置页面配置各项配置信息" tabindex="-1"><a class="header-anchor" href="#在设置页面配置各项配置信息"><span>在设置页面配置各项配置信息</span></a></h3>
<p>通过<strong>管理-&gt;设置</strong> 页面，admin可以配置Yearning的多项配置。</p>
<p>这里将介绍几个重点配置:</p>
<ol>
<li>查询limit上限: 该设置为 <strong>全局查询</strong> 最大的limit限制，默认为1000.这意味着通过Yearning进行的查询最多只会查询1000条，如需提高此阀值可直接修改这个配置。(DML/DDL的影响行数上限不受此规则限制，如需对DML/DDL影响行数上限进行修改请前往审核规则页面进行配置)</li>
<li>添加环境: 默认Yearning仅提供<strong>aws/aliyun</strong>两个环境，用户可自行添加或删除环境，添加完对应的环境后请及时前往流程模板页面添加该新环境的流程模板。</li>
</ol>
<h3 id="根据需求调整自定义审核规则" tabindex="-1"><a class="header-anchor" href="#根据需求调整自定义审核规则"><span>根据需求调整自定义审核规则</span></a></h3>
<p>通过<strong>管理-&gt;审核规则</strong> 页面，admin可以设置Yearning多达几十项的审核规则且每一项审核规则都有详细的描述。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>审核规则中OSC Expr 设置项可对DDL语句使用pt-osc/gh-ost表迁移工具</p>
<p>对于PT-OSC的设置请参考<a href="https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<p>对于GH-OST的设置请参考<a href="https://github.com/github/gh-ost" target="_blank" rel="noopener noreferrer">官方文档</a></p>
</div>
</div></template>



<template><div><h2 id="创建数据源" tabindex="-1"><a class="header-anchor" href="#创建数据源"><span>创建数据源</span></a></h2>
<br>
<img src="/images/db.png" style="width:350px">
<p>重点名词释义:</p>
<ul>
<li>流程 赋予该新建数据源已有的审核流程(非查询)</li>
<li>负责人 该用户为数据源实际负责人，且当查询审核开启后由该负责人负责该数据源的查询审批</li>
<li>类型 当前类型共分三种:1.读写(既可以被查询也可以被执行),2.写(仅执行),3.读(仅查询)</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>类型的不同将会导致该数据源出现在权限组内不同类型赋权的穿梭框中。详情请参考<a href="/guide/config/group">权限组设置</a></p>
</div>
<h2 id="编辑数据源" tabindex="-1"><a class="header-anchor" href="#编辑数据源"><span>编辑数据源</span></a></h2>
<p><img src="/images/flowtarget.png" alt=""></p>
<p>重点名词释义:</p>
<ul>
<li>排除数据库 选择需要排除的数据库并保存后，该数据库将不会出现在提交工单/查询页面的数据库选择下拉框中。</li>
<li>脱敏字段  输入脱敏字段后该数据源下匹配的该字段数据(大小写敏感)将不会显示在查询结果中。</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>当点击数据源编辑按钮后出现以下警告通知:
<img src="/images/cannot.png" alt=""></p>
<p>该信息说明数据源配置信息有误，无法连接到该数据库。</p>
</div>
</div></template>



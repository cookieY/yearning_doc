<template><div><p>点击工单申请页面，根据实际提单需求选择DML/DDL/Query中的某一类进行工单提交。</p>
<p><img src="/images/order01.png" alt=""></p>
<p>点击对应数据源卡片进入工单提交页面</p>
<p><img src="/images/order02.png" alt=""></p>
<p>布局介绍</p>
<ul>
<li>页面左侧
<ul>
<li>工单信息填写，其中数据库，工单说明为必填。</li>
<li>当选择对应数据表之后点击<strong>获取表结构</strong>按钮将会展示该数据表字段及索引信息</li>
<li>定时执行 该功能依赖Yearning所部署服务器上本地时间，请将服务器时间与本地使用时间保持一致，否则将会出现错误。同时，由于Yearning并未依赖其他第三方定时服务，如在定时执行时间之前Yearning崩溃/重启将会丢失定时信息导致工单无法执行。</li>
<li>当<strong>是否回滚</strong>选项选择为 <strong>是</strong> 时，该工单提交的SQL语句执行时如果该数据库开启binlog则会自动生成对应的回滚语句并保存。</li>
</ul>
</li>
<li>页面右侧
<ul>
<li>右上SQL编辑框 请将需要提交的SQL语句填写入该编辑框内，鼠标右键菜单中选择 <strong>SQL检测</strong> 按钮进行SQL语句检测或通过 <strong>SQL美化</strong> 按钮进行SQL语句美化</li>
<li>右下审核结果区域  当点击 SQL检测 按钮后该区域将会展示该SQL语句的检测结果。</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>当焦点处于编辑器中时，可以采用Ctrl/Cmd + E 快捷键触发SQL检测</li>
<li>当焦点处于编辑器中时，可以采用Ctrl/Cmd + B 快捷键触发SQL美化</li>
<li>同时该编辑器支持常用文本快捷键</li>
<li><strong>提交</strong>按钮只有在检测语句 <strong>错误等级</strong> 均为0时才会激活</li>
</ul>
</div>
<h2 id="autotask" tabindex="-1"><a class="header-anchor" href="#autotask"><span>AutoTask</span></a></h2>
<p>自动执行任务:</p>
<p>用户可通过该功能设置自动执行任务。当提交的dml语句符合相应任务条件。将会自动执行，无需审核人审核。</p>
<p>该功能仅限dml语句使用。请慎重使用！</p>
</div></template>



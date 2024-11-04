<template><div><p>点击工单申请页面，选择Query类进行查询。</p>
<p><img src="/images/query01.png" alt=""></p>
<p>如开启查询审核功能将进入如下界面：</p>
<p><img src="/images/query02.png" alt=""></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>查询审核开启后需要在查询前提交查询申请经由数据源负责人审批通过后方可查询，且同一时间只能申请一个数据源进行查询操作(可申请的数据源为用户其所拥有的query权限数据源)。</li>
<li>如开启查询审核需要在申请时注明是否导出(且系统已开启查询导出功能)。</li>
<li>如查询审核功能未开启则系统开启查询导出功能后所有人员均可导出数据</li>
<li>未开启查询审核功能，用户仅可对其拥有query权限的数据源进行查询</li>
<li>由于查询采用websocket连接，如使用反向代理(nginx)请确保对websocket代理的正确配置</li>
</ul>
</div>
<h2 id="查询界面" tabindex="-1"><a class="header-anchor" href="#查询界面"><span>查询界面</span></a></h2>
<p><img src="/images/query03.png" alt=""></p>
<p>查询功能:</p>
<ul>
<li>库/表搜索</li>
<li>查询历史记录 一键复制</li>
<li>多窗口查询</li>
<li>支持多SQL语句同时执行并显示结果</li>
<li>表名右键可查看该表数据信息</li>
<li>如开启数据导出功能则可在SQL执行完毕后导出相应结果</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>当焦点处于编辑器中时，可以采用Ctrl/Cmd + E 快捷键触发SQL查询</li>
<li>当焦点处于编辑器中时，可以采用Ctrl/Cmd + B 快捷键触发SQL美化</li>
<li>同时该编辑器支持常用文本快捷键</li>
</ul>
</div>
<h2 id="剪贴板功能" tabindex="-1"><a class="header-anchor" href="#剪贴板功能"><span>剪贴板功能</span></a></h2>
<p><img src="/images/query04.png" alt=""></p>
<p>剪贴板功能mac上的Paste小工具，点击新建剪贴板后在弹出框内填写名称及需要保存的内容，保存后通过alt(option) &amp;&amp; ctrl(command) + v 组合键调出剪贴板使用</p>
<p><img src="/images/query05.png" alt=""></p>
<p>点击<strong>复制</strong>图标即可一键复制</p>
<h2 id="历史记录功能" tabindex="-1"><a class="header-anchor" href="#历史记录功能"><span>历史记录功能</span></a></h2>
<img src="/images/query06.png" style="width: 350px">
<p>所有执行成功的SQL语句都会保存在该历史记录中方便随时复制调用</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>总体看来历史记录与剪贴板功能有许多相似之处，但它们的使用场景并不相同</p>
<ul>
<li>历史记录 在当前查询窗口期内快速查找到已执行的SQL语句重复执行</li>
<li>剪贴板 将常用的语句保存随时都可复制执行</li>
</ul>
<p>注意: 无论是剪贴板还是历史记录，数据均保存在用户浏览器本地。如开启无痕浏览模式将无法使用该功能，同时如对浏览器数据进行清理则之前的数据也会一并清空。</p>
</div>
</div></template>



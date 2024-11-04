<template><div><p>进入 审核-&gt;工单 页面选择需要审批的工单点击详情按钮进入该工单审核详情页</p>
<p><img src="/images/audit01.png" alt=""></p>
<p>布局介绍</p>
<ul>
<li>页面上侧
<ul>
<li>工单基本信息展示</li>
<li>审核按钮</li>
</ul>
</li>
<li>页面下侧
<ul>
<li>工单流程及进度</li>
<li>SQL语句展示 鼠标右键菜单中选择 <strong>SQL检测</strong> 按钮进行SQL语句检测或通过 <strong>SQL美化</strong> 按钮进行SQL语句美化</li>
<li>SQL语句审核结果</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>当焦点处于编辑器中时，可以采用Ctrl/Cmd + E 快捷键触发SQL检测</li>
<li>当焦点处于编辑器中时，可以采用Ctrl/Cmd + B 快捷键触发SQL美化</li>
<li>同时该编辑器支持常用文本快捷键</li>
<li><strong>同意</strong>按钮只有在检测语句 <strong>错误等级</strong> 均为0时才会激活</li>
<li>当流程最后节点人员通过后Yearning将会自动执行该工单</li>
</ul>
</div>
<h2 id="回滚工单生成" tabindex="-1"><a class="header-anchor" href="#回滚工单生成"><span>回滚工单生成</span></a></h2>
<p><img src="/images/audit02.png" alt=""></p>
<p>工单执行成功且开启生成回滚语句时，如需对执行的SQL进行回滚操作 请点击该工单详情页 <strong>结果栏</strong> 点击 <strong>提交回滚语句</strong>之后将会生成一个新的工单(包含此回滚语句)重新走完流程后即可执行</p>
</div></template>



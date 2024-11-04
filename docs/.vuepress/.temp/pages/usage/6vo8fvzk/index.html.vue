<template><div><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3>
<p>Yearning着重于SQL语句审核及审批流程的实现。在一般场景中我们希望于实现以下的审批流程:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>开发人员 -> DBA审核并执行</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>当业务不断扩大部门层级增多后我们希望拥有多层级的审批流程:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>开发人员 -> 开发主管审批 -> 项目负责人审批-> DBA审核并执行 (多层级)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>对于以上的需求及场景均可通过Yearning自定义流程功能实现。</p>
<h3 id="创建流程" tabindex="-1"><a class="header-anchor" href="#创建流程"><span>创建流程</span></a></h3>
<p>进入 <strong>管理-&gt;流程</strong> 页面，点击新建流程按钮</p>
<p><img src="/images/newflow.png" alt=""></p>
<p>名词释义:</p>
<ul>
<li>流程名称 (顾名思义)</li>
<li>阶段名称 (当前设置的流程阶段的名称)</li>
<li>阶段类型 (当前阶段的类型,共分两种:1.审核,2.执行)</li>
<li>审核人员 (指定当前阶段审核人员范围,可多选)</li>
<li>添加 (点击后将该阶段添加至流程中)</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>注意！每个流程的末端阶段的步骤类型必须为<strong>执行</strong>类型,否则该流程下的审核工单将无法成功完结并执行。</p>
<p>该流程功能仅针对工单审批不支持查询审批。</p>
<p>步骤添加后并不代表该流程已创建成功，点击<strong>保存按钮</strong>后即可保存</p>
<p>中间阶段(既提交及最后执行阶段除外)目前最多支持5层</p>
</div>
<h3 id="修改流程" tabindex="-1"><a class="header-anchor" href="#修改流程"><span>修改流程</span></a></h3>
<p><img src="/images/newflow02.png" alt=""></p>
<p>当我们需要对某一处阶段的数据进行调整时，我们可以点击右侧流程图中该阶段的<strong>编辑按钮</strong>进行编辑。</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>需要注意的是编辑仅可对该流程的审核人员范围进行变更，不支持对阶段类型，阶段名称进行修改。如需对这两处进行修改请删除该阶段重新添加。</p>
</div>
<p>当我们需要对阶段的位置进行更换时，我们可以选择需要更换位置的阶段点击 <strong>向上移动 / 向下移动</strong> 进行位置更换</p>
<h2 id="数据源应用该流程" tabindex="-1"><a class="header-anchor" href="#数据源应用该流程"><span>数据源应用该流程</span></a></h2>
<p><img src="/images/flowtarget.png" alt=""></p>
<p>创建完流程后，在 管理-&gt;数据源 处找到需要赋予流程的数据源，将流程添加到该数据源中并点击保存。</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>只有当数据源被赋予了流程之后,该数据源才被允许提交审批工单。</p>
</div>
</div></template>



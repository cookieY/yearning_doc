<template><div><p>Yearning采用自动表结构同步 无需手动更新表结构。只需<strong>停止原服务并替换安装包后重新启动</strong>即可</p>
<blockquote>
<p>在一些特殊的升级情况中(破坏性变更)需要手动进行数据同步操作.如在版本更新公告中并无提示破坏性升级则无视以下命令!</p>
</blockquote>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> migrate</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<h4 id="_2-3-5版本更新至3-0-0" tabindex="-1"><a class="header-anchor" href="#_2-3-5版本更新至3-0-0"><span>2.3.5版本更新至3.0.0</span></a></h4>
<p><strong>当前RC版本仅支持2.3.5版本更新迁移</strong></p>
<p>1.备份原Yearning数据库</p>
<p>2.执行Yearning目录下 <strong>./migrate</strong> 二进制文件。请注意 必须在<strong>Yearning</strong>启动之前执行！！</p>
<p>3.正常启动Yearning</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>由于在一些新版本中会增加一些新的变更，请在更新后关闭Yearning页面重新登录后进行使用。
由于流程,排除数据库,脱敏逻辑更改为基于数据源，请在更新后在数据源处修改配置。</p>
</div>
</div></template>



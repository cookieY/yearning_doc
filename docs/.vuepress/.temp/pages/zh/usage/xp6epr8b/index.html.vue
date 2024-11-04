<template><div><p><img src="/images/ldap01.png" alt=""></p>
<p>在 管理 -&gt; 设置页面中 填写LDAP相关信息</p>
<p><strong>如开启ldaps请勾选启动ldaps复选框</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>LDAP_Search filter 请根据实际情况填写，特别需要注意的是在Yearning中占位符使用%s进行表示，如上图所示。如果通过cn进行过滤则使用(&amp;(cn=%s))。</p>
<p>输入对应测试用户密码即可对LDAP鉴权进行测试。</p>
</div>
<h2 id="ldap用户属性映射" tabindex="-1"><a class="header-anchor" href="#ldap用户属性映射"><span>LDAP用户属性映射</span></a></h2>
<p>通过属性映射将LDAP中的属性信息与Yearning用户的数据信息，例如部门，邮箱，真实姓名进行关联。</p>
<p>当前支持real_name(真实姓名),email(邮箱),department(部门) 3种字段的映射。 例如：ldap用户信息中 name字段对应真实姓名，dept字段对应部门，mail字段对应邮箱则映射格式如下(key为需要映射的用户字段,value为LDAP的对应属性的key值):</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577"> "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">real_name</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">email</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">mail</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">department</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dept</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>当设置完毕且正确后，LDAP用户第一次登录Yearning时将自动把对应LDAP属性信息更新到Yearning的用户数据中，不再需要管理员单独进行设置。</p>
</div></template>



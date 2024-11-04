<template><div><p>Yearning 不依赖于任何第三方 SQL 审核工具作为审核引擎,内部已自己实现审核/回滚相关逻辑。</p>
<p><strong>仅依赖 Mysql 数据库。</strong></p>
<p>mysql 版本必须为<strong>5.7</strong>及以上版本(8.0及以上请将sql_mode 设置为空)并已事先自行安装完毕且<strong>创建 Yearning 库</strong>,字符集应为<strong>UTF8mb4</strong>(仅 Yearning 所需 mysql 版本)</p>
<p>Yearning 基于 1080p 分辨率开发<strong>仅支持 1080p 及以上显示器访问</strong></p>
<p>对于设置页面配置重叠的问题请确认自己的分辨率以及是否进行了放大操作</p>
<p>请使用Chrome最新版本(不包括 360 等其他魔改版本)</p>
<h1 id="yearning-下载" tabindex="-1"><a class="header-anchor" href="#yearning-下载"><span>Yearning 下载</span></a></h1>
<p>Yearning-go 提供二进制下载包</p>
<p>下载地址 <a href="https://github.com/cookieY/Yearning/releases" target="_blank" rel="noopener noreferrer">https://github.com/cookieY/Yearning/releases</a></p>
<p><strong>请选择最新版本 在 Assets 中选择 Yearning-x.x.x.linux-amd64.zip 包进行下载</strong></p>
<p><strong>如需进行代码修改或自己编译请移步至<a href="">二次开发页面</a></strong></p>
<h1 id="yearning-目录结构" tabindex="-1"><a class="header-anchor" href="#yearning-目录结构"><span>Yearning 目录结构</span></a></h1>
<p><img src="https://wuchen-1252812685.cos.ap-shanghai.myqcloud.com/img/yearning/20210301141132.png" alt=""></p>
<h2 id="_1-填写配置文件" tabindex="-1"><a class="header-anchor" href="#_1-填写配置文件"><span>1.填写配置文件</span></a></h2>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> conf.toml</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Mysql</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Db</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Yearning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Host</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">127.0.0.1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3306</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Password</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">xxxx</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">User</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">root</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">General</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   #数据库加解密key，只可更改一次。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">SecretKey</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dbcjqheupqjsuwsm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">LogLevel</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">debug</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # debug,info,warn,error   选择日志显示等级</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Lang</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">en_US</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # en_US,zh_CN  选择Yearning使用语言</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于-secretkey" tabindex="-1"><a class="header-anchor" href="#关于-secretkey"><span>关于 SecretKey</span></a></h3>
<p>SecretKey 是 token/数据库密码加密/解密的 salt。</p>
<p>建议所有用户在初次安装 Yearning 之前将 SecretKey 更改(不更改将存在安全风险)</p>
<p><strong>格式: 大小写字母均可, 长度必须为 16 位 如长度不是16位将会导致无法新建数据源</strong></p>
<p><strong>特别注意:</strong></p>
<p><strong>此 key 仅可在初次安装时更改!之后不可再次更改!如再次更改会导致之前已存放的数据源密码无法解密,最终导致无法获取相关数据源信息</strong></p>
<h2 id="使用帮助" tabindex="-1"><a class="header-anchor" href="#使用帮助"><span>使用帮助</span></a></h2>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --help</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://wuchen-1252812685.cos.ap-shanghai.myqcloud.com/img/yearning/20210301141137.jpg" alt=""></p>
<h2 id="_2-初始化及安装" tabindex="-1"><a class="header-anchor" href="#_2-初始化及安装"><span>2.初始化及安装</span></a></h2>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>如要再次安装，请先把 yearning 库下所有表删除，否则重复执行无效</strong></p>
<h2 id="_3-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-启动服务"><span>3.启动服务</span></a></h2>
<blockquote></blockquote>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">默认启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">参数启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --push</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">172.27.80.35</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --port</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">8000</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请注意:</p>
<p>由于Yearning中个别功能使用websocket进行通信。如采用反向代理的方式访问Yearning请在代理层对websocket协议进行代理支持。</p>
<p>例如: nginx 需要配置 proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection &quot;upgrade&quot;;</p>
</div>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span></span></span>
<span class="line"><span>打开浏览器 http://127.0.0.1:8000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>默认账号/密码：admin/Yearning_admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>欢迎来到Yearning</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/dash01.png" alt=""></p>
</div></template>



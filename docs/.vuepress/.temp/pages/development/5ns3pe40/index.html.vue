<template><div><h2 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h2>
<p>golang + yee(写法类似<a href="https://echo.labstack.com/" target="_blank" rel="noopener noreferrer">echo</a>) + <a href="https://gorm.io/zh_CN/docs/" target="_blank" rel="noopener noreferrer">gorm</a> + net/rpc</p>
<h2 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h2>
<p>js + <a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vue3.2</a> + <a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">vite2</a> + <a href="https://antdv.com/components/overview" target="_blank" rel="noopener noreferrer">antDesignVue3.2.0</a></p>
<h2 id="api文件目录" tabindex="-1"><a class="header-anchor" href="#api文件目录"><span>api文件目录</span></a></h2>
<p>当前Yearning并无公共API接口用于第三方接入，但可通过现有接口获取相关数据。</p>
<p>具体API可通过<a href="https://github.com/cookieY/gemini-next/tree/next/src/apis" target="_blank" rel="noopener noreferrer">gemini-next</a>API目录下的接口文件查看，以下为该目录结构：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span> |-- src</span></span>
<span class="line"><span>      |-- apis</span></span>
<span class="line"><span>      |   |-- autotask.ts</span></span>
<span class="line"><span>      |   |-- board.ts</span></span>
<span class="line"><span>      |   |-- dash.ts</span></span>
<span class="line"><span>      |   |-- db.ts</span></span>
<span class="line"><span>      |   |-- fetchSchema.ts</span></span>
<span class="line"><span>      |   |-- flow.ts</span></span>
<span class="line"><span>      |   |-- homeApis.ts</span></span>
<span class="line"><span>      |   |-- listAppApis.ts</span></span>
<span class="line"><span>      |   |-- loginApi.ts</span></span>
<span class="line"><span>      |   |-- orderPostApis.ts</span></span>
<span class="line"><span>      |   |-- policy.ts</span></span>
<span class="line"><span>      |   |-- query.ts</span></span>
<span class="line"><span>      |   |-- record.ts</span></span>
<span class="line"><span>      |   |-- rules.ts</span></span>
<span class="line"><span>      |   |-- setting.ts</span></span>
<span class="line"><span>      |   |-- user.ts</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



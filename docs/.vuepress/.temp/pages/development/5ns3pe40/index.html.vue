<template><div><h2 id="backend" tabindex="-1"><a class="header-anchor" href="#backend"><span>Backend</span></a></h2>
<p>The backend is developed using the following technologies:</p>
<ul>
<li><strong>Golang</strong>: A statically typed, compiled programming language designed for simplicity and efficiency.</li>
<li><strong>Yee</strong>: Similar in style to <a href="https://echo.labstack.com/" target="_blank" rel="noopener noreferrer">Echo</a>, used for building high-performance web applications.</li>
<li><strong>GORM</strong>: An ORM library for Golang, detailed at <a href="https://gorm.io/zh_CN/docs/" target="_blank" rel="noopener noreferrer">GORM Documentation</a>.</li>
<li><strong>Net/RPC</strong>: A package that provides the means to register and call remote functions.</li>
</ul>
<h2 id="frontend" tabindex="-1"><a class="header-anchor" href="#frontend"><span>Frontend</span></a></h2>
<p>The frontend utilizes the following technologies:</p>
<ul>
<li><strong>JavaScript</strong>: The core scripting language for web development.</li>
<li><strong>Vue 3.2</strong>: A progressive JavaScript framework for building user interfaces, see <a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3.2</a>.</li>
<li><strong>Vite 2</strong>: A build tool that offers speed and efficiency, see more at <a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">Vite 2</a>.</li>
<li><strong>Ant Design Vue 3.2.0</strong>: A UI library for Vue applications, see <a href="https://antdv.com/components/overview" target="_blank" rel="noopener noreferrer">Ant Design Vue</a>.</li>
</ul>
<h2 id="api-file-directory" tabindex="-1"><a class="header-anchor" href="#api-file-directory"><span>API File Directory</span></a></h2>
<p>Currently, Yearning does not provide a public API interface for third-party integration. However, you can access relevant data through existing interfaces.</p>
<p>Detailed APIs can be found in the <a href="https://github.com/cookieY/gemini-next/tree/next/src/apis" target="_blank" rel="noopener noreferrer">gemini-next</a> API directory, where the API files are structured as follows:</p>
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



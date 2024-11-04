<template><div><p>一个强大且本地部署的平台，专为数据库管理员（DBA）和开发人员设计，提供无缝的SQL检测和查询审计。专注于隐私和效率，为MYSQL审计提供直观且安全的环境。</p>
<hr>
<p><a href="https://www.murphysec.com/dr/nDuoncnUbuFMdrZsh7" target="_blank" rel="noopener noreferrer"><img src="https://www.oscs1024.com/platform/badge/cookieY/Yearning.svg?size=small" alt="OSCS 状态"></a>
<img src="https://img.shields.io/badge/-x86_x64 ARM Supports →-rgb(84,56,255)?style=flat-square&amp;logoColor=white&amp;logo=linux" alt="平台支持">
<a href="https://github.com/cookieY/Yearning/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/AGPL 3.0-white?labelColor=black&amp;style=flat-square" alt=""></a>
<img src="https://img.shields.io/github/languages/top/cookieY/Yearning?color=369eff&amp;label=golang&amp;labelColor=black&amp;logo=golang&amp;logoColor=white&amp;style=flat-square" alt="GitHub 顶级语言">
<a href="https://github.com/cookieY/Yearning/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/cookieY/Yearning?color=8ae8ff&amp;labelColor=black&amp;style=flat-square" alt=""></a>
<a href="https://github.com/cookieY/Yearning/network/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/cookieY/Yearning?color=ffcb47&amp;labelColor=black&amp;style=flat-square" alt=""></a>
<a href="https://github.com/cookieY/Yearning/releases/latest" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/downloads/cookieY/Yearning/total?labelColor=black&amp;logo=download&amp;logoColor=white&amp;style=flat-square" alt="下载次数"></a>
<a href="https://hub.docker.com/r/yeelabs/yearning" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/v/yeelabs/yearning?color=369eff&amp;label=docker&amp;labelColor=black&amp;logo=docker&amp;logoColor=white&amp;style=flat-square" alt=""></a>
<a href="https://hub.docker.com/r/yeelabs/yearning" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/yeelabs/yearning?color=369eff&amp;labelColor=black&amp;style=flat-square" alt=""></a>
<a href="https://hub.docker.com/r/yeelabs/yearning" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/pulls/yeelabs/yearning?color=45cc11&amp;labelColor=black&amp;style=flat-square" alt=""></a></p>
<h2 id="✨-功能" tabindex="-1"><a class="header-anchor" href="#✨-功能"><span>✨ 功能</span></a></h2>
<ul>
<li>
<p><strong>AI 助手</strong>：我们的AI助手提供实时SQL优化建议，提升SQL性能。同时支持文本到SQL的转换，允许用户输入自然语言并接收优化后的SQL语句。</p>
</li>
<li>
<p><strong>SQL 审计</strong>：创建具有审批工作流和自动语法检查的SQL审计工单。验证SQL语句的正确性、安全性和合规性。为DDL/DML操作自动生成回滚语句，并提供全面的历史记录以便追溯。</p>
</li>
<li>
<p><strong>查询审计</strong>：审计用户查询，限制数据源和数据库，并匿名化敏感字段。查询记录被保存以供将来参考。</p>
</li>
<li>
<p><strong>检查规则</strong>：我们的自动语法检查器支持多种检查规则，适用于大多数自动检查场景。</p>
</li>
<li>
<p><strong>隐私保护</strong>：Yearning是一个本地部署的开源解决方案，确保您的数据库和SQL语句的安全。它包括加密机制以保护敏感数据，即使在未经授权的访问情况下也能确保数据安全。</p>
</li>
<li>
<p><strong>RBAC（基于角色的访问控制）</strong>：创建和管理具有特定权限的角色，根据用户角色限制对查询工单、审计功能和其他敏感操作的访问。</p>
</li>
</ul>
<h3 id="像数-1-2-3-一样容易" tabindex="-1"><a class="header-anchor" href="#像数-1-2-3-一样容易"><span>像数 1, 2, 3 一样容易</span></a></h3>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#设置配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config.toml</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#初始化数据</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#运行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🤖-ai-助手" tabindex="-1"><a class="header-anchor" href="#🤖-ai-助手"><span>🤖 AI 助手</span></a></h2>
<p>我们的AI助手利用大型语言模型提供SQL优化建议和文本到SQL的转换。无论是使用默认还是自定义提示词，AI助手都能通过优化语句和将自然语言输入转换为SQL查询来提升SQL性能。</p>
<p><img src="/images/text2sql.jpg" alt="文本到SQL"></p>
<h2 id="🔖-自动sql检查器" tabindex="-1"><a class="header-anchor" href="#🔖-自动sql检查器"><span>🔖 自动SQL检查器</span></a></h2>
<p>自动SQL检查器根据预定义的规则和语法评估SQL语句。确保语句符合特定的编码标准、最佳实践和安全要求，提供了强大的验证层。</p>
<p><img src="/images/audit.png" alt="SQL 审计"></p>
<h2 id="💡-sql-语法高亮和自动补全" tabindex="-1"><a class="header-anchor" href="#💡-sql-语法高亮和自动补全"><span>💡 SQL 语法高亮和自动补全</span></a></h2>
<p>通过SQL语法高亮和自动补全功能提高查询编写效率。这些功能帮助用户在视觉上区分SQL查询的不同部分，如关键字、表名、列名和运算符，使阅读和理解查询结构变得更容易。</p>
<p><img src="/images/query.png" alt="SQL 查询"></p>
<h2 id="⏺️-订单-查询记录" tabindex="-1"><a class="header-anchor" href="#⏺️-订单-查询记录"><span>⏺️ 订单/查询记录</span></a></h2>
<p>我们的平台支持对用户订单和查询语句的审计。该功能允许您跟踪和记录所有查询操作，包括数据源、数据库和敏感字段的处理，确保查询操作符合规定并提供查询历史的可追溯性。</p>
<p><img src="/images/record.png" alt="订单/查询记录"></p>
<p>通过关注这些关键功能，Yearning提升了用户体验，优化了SQL性能，并确保数据库操作的强大合规性和可追溯性。</p>
<p>通过 Yearning，体验流畅、安全且高效的SQL审计和优化方法。</p>
</div></template>



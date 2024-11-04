<template><div><p>A robust, locally deployed platform designed for seamless SQL detection and query auditing, tailored specifically for DBAs and developers. Focused on privacy and efficiency, it provides an intuitive and secure environment for MYSQL auditing.</p>
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
<h2 id="✨-features" tabindex="-1"><a class="header-anchor" href="#✨-features"><span>✨ Features</span></a></h2>
<ul>
<li>
<p><strong>AI Assistant</strong>: Our AI assistant offers real-time SQL optimization suggestions, enhancing SQL performance. It also supports text-to-SQL conversion, allowing users to input natural language and receive optimized SQL statements.</p>
</li>
<li>
<p><strong>SQL Audit</strong>: Create SQL audit tickets with approval workflows and automated syntax checks. Validate SQL statements for correctness, security, and compliance. Rollback statements are automatically generated for DDL/DML operations, with a comprehensive history log for traceability.</p>
</li>
<li>
<p><strong>Query Audit</strong>: Audit user queries, restrict data sources and databases, and anonymize sensitive fields. Query records are saved for future reference.</p>
</li>
<li>
<p><strong>Check Rules</strong>: Our automated syntax checker supports a wide range of check rules, suitable for most automatic checking scenarios.</p>
</li>
<li>
<p><strong>Privacy Focused</strong>: Yearning is a locally deployable, open-source solution that ensures the security of your database and SQL statements. It includes encryption mechanisms to protect sensitive data, ensuring it remains secure even if unauthorized access occurs.</p>
</li>
<li>
<p><strong>RBAC (Role-Based Access Control)</strong>: Create and manage roles with specific permissions, restricting access to query work orders, auditing functions, and other sensitive operations based on user roles.</p>
</li>
</ul>
<h3 id="as-easy-as-1-2-3" tabindex="-1"><a class="header-anchor" href="#as-easy-as-1-2-3"><span>As easy as 1, 2, 3</span></a></h3>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">## setting configure file</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config.toml</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">## Initialize the database</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">## Start Yearning</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🤖-ai-assistance" tabindex="-1"><a class="header-anchor" href="#🤖-ai-assistance"><span>🤖 AI Assistance</span></a></h2>
<p>Our AI Assistant leverages a large language model to provide SQL optimization suggestions and text-to-SQL conversion. Whether using default or custom prompts, the AI Assistant enhances SQL performance by optimizing statements and converting natural language inputs into SQL queries.</p>
<p><img src="/images/text2sql.jpg" alt="文本到SQL"></p>
<h2 id="🔖-automatic-sql-checker" tabindex="-1"><a class="header-anchor" href="#🔖-automatic-sql-checker"><span>🔖 Automatic SQL Checker</span></a></h2>
<p>The automatic SQL checker evaluates SQL statements against predefined rules and syntax. It ensures that statements adhere to specific coding standards, best practices, and security requirements, providing a robust layer of validation.</p>
<p><img src="/images/audit.png" alt="SQL 审计"></p>
<h2 id="💡-sql-syntax-highlighting-and-auto-completion" tabindex="-1"><a class="header-anchor" href="#💡-sql-syntax-highlighting-and-auto-completion"><span>💡 SQL Syntax Highlighting and Auto-completion</span></a></h2>
<p>Enhance your query writing efficiency with SQL syntax highlighting and auto-completion. These features help users visually distinguish different components of a SQL query, such as keywords, table names, column names, and operators, making it easier to read and understand the query structure.</p>
<p><img src="/images/query.png" alt="SQL 查询"></p>
<h2 id="⏺️-order-query-record" tabindex="-1"><a class="header-anchor" href="#⏺️-order-query-record"><span>⏺️ Order/Query Record</span></a></h2>
<p>Our platform supports the auditing of user order and query statements. This feature allows you to track and record all query operations, including data sources, databases, and the handling of sensitive fields, ensuring compliance with regulations and providing traceability for query history.</p>
<p><img src="/images/record.png" alt="订单/查询记录"></p>
<p>By focusing on these key features, Yearning enhances user experience, optimizes SQL performance, and ensures robust compliance and traceability in database operations.</p>
<p>With Yearning, experience a streamlined, secure, and efficient approach to SQL auditing and optimization.</p>
</div></template>



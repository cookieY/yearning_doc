<template><div><p>Click on the work order application page and select the Query category for submission.</p>
<p><img src="/images/query01.png" alt="Query Submission"></p>
<p>If the query review feature is enabled, you will access the following interface:</p>
<p><img src="/images/query02.png" alt="Query Review Interface"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>When query review is enabled, you must submit a query request and get approval from the data source owner before performing queries. Only one data source can be queried at a time (queryable data sources are those for which the user has query permissions).</li>
<li>If query review is enabled, you must indicate if you wish to export the data during application (and the system's query export feature must be enabled).</li>
<li>If query review is not enabled, anyone can export data after the query export feature is enabled.</li>
<li>If query review is not enabled, a user can only query data sources for which they have query permissions.</li>
<li>Since queries use WebSocket connections, if using reverse proxy (like nginx), ensure correct configuration for WebSocket support.</li>
</ul>
</div>
<h2 id="query-interface" tabindex="-1"><a class="header-anchor" href="#query-interface"><span>Query Interface</span></a></h2>
<p><img src="/images/query03.png" alt="Query Interface"></p>
<p>Query Features:</p>
<ul>
<li>Database/Table Search</li>
<li>Query History with One-click Copy</li>
<li>Multi-window Query</li>
<li>Support for executing multiple SQL statements simultaneously and displaying results</li>
<li>Right-click on table names to view table data information</li>
<li>If data export is enabled, you can export corresponding results after SQL execution</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>When focused on the editor, use Ctrl/Cmd + E to trigger SQL query execution.</li>
<li>When focused on the editor, use Ctrl/Cmd + B to beautify SQL statements.</li>
<li>The editor supports common text shortcuts.</li>
</ul>
</div>
<h2 id="clipboard-feature" tabindex="-1"><a class="header-anchor" href="#clipboard-feature"><span>Clipboard Feature</span></a></h2>
<p><img src="/images/query04.png" alt="Clipboard Feature"></p>
<p>The Clipboard feature is similar to the Paste utility on Mac. Click to create a new clipboard, fill in the name and content in the pop-up window, and save. Use the Alt (Option) &amp;&amp; Ctrl (Command) + V shortcut to access the clipboard.</p>
<p><img src="/images/query05.png" alt="Clipboard Use"></p>
<p>Click the <strong>Copy</strong> icon to copy instantly.</p>
<h2 id="history-feature" tabindex="-1"><a class="header-anchor" href="#history-feature"><span>History Feature</span></a></h2>
<img src="/images/query06.png" style="width: 350px">
<p>All successfully executed SQL statements are saved in the history for easy copying and reuse at any time.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The History and Clipboard features appear similar, but they serve different use cases:</p>
<ul>
<li>History: Quickly find and re-execute SQL statements during the current query session.</li>
<li>Clipboard: Save frequently used statements for copying and execution at any time.</li>
</ul>
<p>Note: Both the clipboard and history data are stored locally in the user's browser. If using incognito mode, these features won't be available, and clearing browser data will also erase previous data.</p>
</div>
</div></template>



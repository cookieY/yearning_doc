<template><div><h2 id="creating-data-sources" tabindex="-1"><a class="header-anchor" href="#creating-data-sources"><span>Creating Data Sources</span></a></h2>
<br>
<img src="/images/db.png" style="width:350px">
<p>Key Terminologies:</p>
<ul>
<li>Process: Assign an existing approval process (non-query) to the newly created data source.</li>
<li>Owner: The user responsible for the data source, and once query approval is enabled, this person oversees the data source's query approvals.</li>
<li>Type: Currently divided into three types: 1. Read-Write (can be queried and executed), 2. Write (execution only), 3. Read (query only).</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The different types will determine how the data source appears in the shuttle box for different authorization types within a permission group. For details, refer to <a href="/guide/config/group">Permission Group Settings</a>.</p>
</div>
<h2 id="editing-data-sources" tabindex="-1"><a class="header-anchor" href="#editing-data-sources"><span>Editing Data Sources</span></a></h2>
<p><img src="/images/flowtarget.png" alt="Edit Data Sources"></p>
<p>Key Terminologies:</p>
<ul>
<li>Exclude Databases: Select and save databases that need to be excluded so that they do not appear in the database selection dropdown on the submission order/query page.</li>
<li>Masking Fields: When masking fields are entered, the matched field data (case-sensitive) under this data source will not be displayed in the query results.</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If the following warning notification appears after clicking the data source edit button:
<img src="/images/cannot.png" alt="Warning Notification"></p>
<p>This indicates that there is a configuration issue with the data source, and it cannot connect to the database.</p>
</div>
</div></template>



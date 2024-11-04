<template><div><p>The sponsored version implements a query subprogram based on the MySQL protocol, allowing users to query data through various MySQLClient clients, enabling native functionality.</p>
<p>Additionally, client-side queries still support web-based query auditing, interception of non-query statements, and result desensitization.</p>
<p>Users can view client connection information by clicking on personal settings and connect to different data sources (those for which the user has query permissions) using different connection usernames. The connection username is composed of the username@DataSourceID. All client-side query users of a single Yearning user share one query password.</p>
<p>Upon login, the system checks whether the user has relevant data source permissions to prevent malicious privilege escalation.</p>
<p><img src="/images/extra05.png" alt="Client Connection Info"></p>
<p>In clients like Navicat/DBeaver, enter the corresponding username and password to connect to the user's data source.
<img src="/images/extra04.png" alt="Client Connection Example"></p>
<p><strong>A user's audit records remain consistent with those on the Yearning web page. Corresponding query work orders can be found and audited through the Approval -&gt; Query section.</strong></p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<ol>
<li>Each user has only one randomly generated client-side login query password. Please keep it confidential.</li>
<li>Client-side queries are only effective when query auditing is disabled.</li>
<li>Client-side queries cannot be stopped via the web interface.</li>
<li>Client queries will generate various other SQL statements (e.g., automatic setting of utf8mb4, select databases(), etc.).</li>
</ol>
</div>
</div></template>



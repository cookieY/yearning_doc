<template><div><p><strong>Before officially using Yearning, you need to follow the setup steps below (please take a few minutes to read!).</strong></p>
<ol>
<li>Create Users</li>
<li>Create Permission Groups and Assign Them to Corresponding Users</li>
<li>Create Approval Processes</li>
<li>Add Data Source Information</li>
<li>Assign Approval Processes to Data Sources</li>
<li>Configure Various Settings in the Settings Page</li>
<li>Adjust Custom Review Rules Based on Requirements</li>
</ol>
<h3 id="create-users" tabindex="-1"><a class="header-anchor" href="#create-users"><span>Create Users</span></a></h3>
<p>In Yearning, users can be created in the following ways:</p>
<ol>
<li>Admin can create users on the <strong>Management -&gt; Users</strong> page.</li>
<li>Enable the registration option in the <strong>Management -&gt; Settings</strong> page and save. Users can then register themselves by clicking the register button on the top left of the Yearning login page.</li>
<li>Configure the Ldap information on the <strong>Management -&gt; Settings</strong> page and save. Ldap users can perform user registration/login by selecting ldap login on the Yearning login page.</li>
<li>Use the OIDC login method configured in config.toml for user login operations.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In the ldap configuration, the %s in the filter is a placeholder, similar to %(user)s in other ldap systems.</p>
</div>
<h3 id="create-permission-groups-and-assign-them-to-corresponding-users" tabindex="-1"><a class="header-anchor" href="#create-permission-groups-and-assign-them-to-corresponding-users"><span>Create Permission Groups and Assign Them to Corresponding Users</span></a></h3>
<p>Through the <strong>Management -&gt; Permission Groups</strong> page, admin can create/edit/delete permission groups. Permission groups provide fine-grained permission control (currently, Yearning's permission control is only at the data source level) as shown below:</p>
<ol>
<li>Data sources allowed for DDL order submission</li>
<li>Data sources allowed for DML order submission</li>
<li>Data sources allowed for query order submission</li>
</ol>
<p>After creating the permission group, assign it to users by selecting the user on the <strong>Management -&gt; Users</strong> page and clicking the permission button corresponding to the user.</p>
<p>For the design concept of permission groups, visit <a href="/guide/authority">Permission Design</a>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>A user can be assigned multiple permission groups, and in such cases, the user will have the combined permissions of both groups.</p>
<p>A permission group can also be assigned to multiple users.</p>
</div>
<h3 id="add-data-source-information" tabindex="-1"><a class="header-anchor" href="#add-data-source-information"><span>Add Data Source Information</span></a></h3>
<p>Through the <strong>Management -&gt; Database</strong> page, admin can create/edit/delete data sources. A data source is a MySQL instance, and databases are divided into three types: read, write, and read-write. If you want the data source to handle both DDL/DML orders and queries, set it to read-write; otherwise, set it to read or write based on your needs.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Yearning does not support certain special characters such as @ due to escaping issues and potential pt-osc execution errors. It is recommended to create a separate MySQL user to connect with the Yearning platform.</p>
</div>
<h3 id="create-custom-review-rules-for-the-environment" tabindex="-1"><a class="header-anchor" href="#create-custom-review-rules-for-the-environment"><span>Create Custom Review Rules for the Environment</span></a></h3>
<p>Through the <strong>Management -&gt; Process</strong> page, admin can edit the process of the environment.</p>
<p>Yearning uses the environment as a unit, allowing different approval processes for different environments.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Ensure that all orders in the environment are processed before changing the process to avoid process confusion!</p>
<p>If no process is configured for an environment, users cannot submit any DDL/DML orders for that environment.</p>
</div>
<h3 id="configure-various-settings-in-the-settings-page" tabindex="-1"><a class="header-anchor" href="#configure-various-settings-in-the-settings-page"><span>Configure Various Settings in the Settings Page</span></a></h3>
<p>Through the <strong>Management -&gt; Settings</strong> page, admin can configure many settings in Yearning.</p>
<p>Here are some key settings:</p>
<ol>
<li>Query Limit: This sets the maximum limit for <strong>global queries</strong>, defaulting to 1000. This means that queries through Yearning will only return a maximum of 1000 rows. To increase this threshold, modify the setting directly. (The upper limit on the number of affected rows for DML/DDL is not subject to this rule. To modify the upper limit for DML/DDL affected rows, go to the review rules page.)</li>
<li>Add Environment: By default, Yearning only provides <strong>aws/aliyun</strong> environments. Users can add or delete environments. After adding a new environment, promptly go to the process template page to add a process template for the new environment.</li>
</ol>
<h3 id="adjust-custom-review-rules-based-on-requirements" tabindex="-1"><a class="header-anchor" href="#adjust-custom-review-rules-based-on-requirements"><span>Adjust Custom Review Rules Based on Requirements</span></a></h3>
<p>Through the <strong>Management -&gt; Review Rules</strong> page, admin can set up to dozens of review rules in Yearning, each with a detailed description.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The OSC Expr setting in review rules can use pt-osc/gh-ost table migration tools for DDL statements.</p>
<p>For PT-OSC settings, refer to the <a href="https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
<p>For GH-OST settings, refer to the <a href="https://github.com/github/gh-ost" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
</div>
</div></template>



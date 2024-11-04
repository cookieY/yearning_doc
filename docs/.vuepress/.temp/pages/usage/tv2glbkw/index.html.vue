<template><div><p><strong>Before officially using Yearning, please set up the following (take a few minutes to read this!).</strong></p>
<ol>
<li>Create Users</li>
<li>Create Permission Groups and Assign Them to Corresponding Users</li>
<li>Create Approval Processes</li>
<li>Add Data Source Information</li>
<li>Assign Approval Processes to Data Sources</li>
<li>Configure Settings in the Settings Page</li>
<li>Adjust Custom Audit Rules as Needed</li>
</ol>
<h3 id="create-users" tabindex="-1"><a class="header-anchor" href="#create-users"><span>Create Users</span></a></h3>
<p>Users in Yearning can be created in the following ways:</p>
<ol>
<li>Admin users can manually create users through the <strong>Management-&gt;Users</strong> page.</li>
<li>Enable and save the registration option in the <strong>Management-&gt;Settings</strong> page. The user can then register by clicking the register button on the top left corner of the Yearning login page.</li>
<li>Configure and save the Ldap information in the <strong>Management-&gt;Settings</strong> page. Ldap users can select Ldap login on the Yearning login page to register/login.</li>
<li>User login can also be performed via OIDC login configured through <code v-pre>config.toml</code>.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In Ldap configuration, the <code v-pre>%s</code> in the filter is a placeholder, similar to <code v-pre>%(user)s</code> in other Ldap systems.</p>
</div>
<h3 id="create-permission-groups-and-assign-them-to-corresponding-users" tabindex="-1"><a class="header-anchor" href="#create-permission-groups-and-assign-them-to-corresponding-users"><span>Create Permission Groups and Assign Them to Corresponding Users</span></a></h3>
<p>Admin can create/edit/delete permission groups through the <strong>Management-&gt;Permission Groups</strong> page. Permission groups offer various fine-grained permissions control (currently at data source level only), as shown below:</p>
<ol>
<li>Range of data sources allowed for DDL submission</li>
<li>Range of data sources allowed for DML submission</li>
<li>Range of data sources allowed for query submission</li>
</ol>
<p>After creating the permission group, please go to the <strong>Management-&gt;Users</strong> page, select the user to whom you need to grant the permission group, and click the permission button corresponding to that user for authorization.</p>
<p>To understand the philosophy behind permission groups, visit <a href="/guide/authority">Permission Design</a>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>A user can be assigned multiple permission groups. In such a case, the user will inherit all permissions from both groups.</p>
<p>A single permission group can be assigned to multiple users.</p>
</div>
<h3 id="add-data-source-information" tabindex="-1"><a class="header-anchor" href="#add-data-source-information"><span>Add Data Source Information</span></a></h3>
<p>Admin can create/edit/delete data sources through the <strong>Management-&gt;Databases</strong> page. A data source is a MySQL instance, categorized into three types: read, write, and read-write. If you wish the data source to handle both DDL/DML submissions and queries, it should be set to read-write; otherwise, set it according to your needs.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Yearning does not support certain special characters like <code v-pre>@</code>, due to potential issues with escaping and pt-osc execution errors. It is recommended to create a new MySQL user specifically for integration with the Yearning platform.</p>
</div>
<h3 id="create-custom-audit-rules-for-environments" tabindex="-1"><a class="header-anchor" href="#create-custom-audit-rules-for-environments"><span>Create Custom Audit Rules for Environments</span></a></h3>
<p>Admin can edit the process of an environment through the <strong>Management-&gt;Processes</strong> page.</p>
<p>Yearning uses environments as units, allowing different audit processes for different environments.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Ensure all orders in the environment are processed before changing the process to avoid confusion.</p>
<p>If there is no process configuration for the environment, users cannot submit any DDL/DML orders for that environment.</p>
</div>
<h3 id="configure-settings-in-the-settings-page" tabindex="-1"><a class="header-anchor" href="#configure-settings-in-the-settings-page"><span>Configure Settings in the Settings Page</span></a></h3>
<p>Admin can configure various settings of Yearning through the <strong>Management-&gt;Settings</strong> page.</p>
<p>Here are some key configurations:</p>
<ol>
<li>Query Limit: This is the maximum limit for <strong>global queries</strong>, defaulting to 1000. This means queries through Yearning can return a maximum of 1000 rows. To increase this limit, modify this setting directly. (The limit for DML/DDL affected rows is not bound by this rule; modify this in the audit rules page.)</li>
<li>Add Environment: By default, Yearning only provides <strong>aws/aliyun</strong> environments. Users can add or remove environments as needed. After adding an environment, promptly go to the process template page to add a template for that environment.</li>
</ol>
<h3 id="adjust-custom-audit-rules-as-needed" tabindex="-1"><a class="header-anchor" href="#adjust-custom-audit-rules-as-needed"><span>Adjust Custom Audit Rules as Needed</span></a></h3>
<p>Admin can configure numerous audit rules, each with detailed descriptions, through the <strong>Management-&gt;Audit Rules</strong> page.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In the Audit Rules, OSC Expr settings can utilize pt-osc/gh-ost for table migrations with DDL statements.</p>
<p>For PT-OSC settings, refer to the <a href="https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
<p>For GH-OST settings, refer to the <a href="https://github.com/github/gh-ost" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
</div>
</div></template>



<template><div><h3 id="philosophy" tabindex="-1"><a class="header-anchor" href="#philosophy"><span>Philosophy</span></a></h3>
<p><strong>Since version 2.1.7, Yearning has adopted permission groups for authorization, with the lowest level of permissions granted to data sources.</strong></p>
<p><strong>In Yearning, users are initially divided into two main categories based on roles: Regular Users and Super Administrators. Super Administrator roles have access to the management page, while Regular Users do not. Before fine-grained permissions are defined, users are classified by roles in Yearning. This ensures that management-related permissions do not appear in user-level fine-grained permissions.</strong></p>
<p><strong>Permissions related to DDL, DML, and Query data sources can be configured according to each user's actual needs. Each type of permission is independent and does not interfere with the others.</strong></p>
<h3 id="types-of-permissions" tabindex="-1"><a class="header-anchor" href="#types-of-permissions"><span>Types of Permissions</span></a></h3>
<p>In Yearning, permissions are divided into two major categories:</p>
<ol>
<li>Role Permissions</li>
<li>Fine-Grained Permissions</li>
</ol>
<p>Role Permissions: These include Regular Users and Super Administrators. This permission primarily defines the boundary of each user's permissions and specifies the entry points for various functions.</p>
<p>Fine-Grained Permissions: Include access to DML/DDL/query data sources and reviewer for queries.</p>
<h3 id="how-to-assign-permissions" tabindex="-1"><a class="header-anchor" href="#how-to-assign-permissions"><span>How to Assign Permissions</span></a></h3>
<p>Role Permissions: Super Administrators can set the appropriate role when creating a new user. By default, LDAP users logging in for the first time are assigned the submitter role. The role can be modified by the Super Administrator after logging in (the user's role must be determined before granting permissions).</p>
<p>Fine-Grained Permissions: Super Administrators create permission groups and assign one or more permission groups to users, allowing users to inherit the fine-grained permissions of the permission group.</p>
<h3 id="initial-lack-of-super-administrator-permissions-in-yearning" tabindex="-1"><a class="header-anchor" href="#initial-lack-of-super-administrator-permissions-in-yearning"><span>Initial Lack of Super Administrator Permissions in Yearning</span></a></h3>
<p>Upon first use of Yearning, even the Super Administrator does not have the corresponding fine-grained permissions and must configure them manually. Newly created users also lack any permissions. All operations require corresponding permissions to be assigned beforehand. Therefore, please assign permissions to users before use!</p>
<h3 id="setting-user-permissions" tabindex="-1"><a class="header-anchor" href="#setting-user-permissions"><span>Setting User Permissions</span></a></h3>
<ol>
<li>
<p>Super Administrators can create appropriate permission groups on the Permission Groups page and grant associated permissions to the groups.</p>
</li>
<li>
<p>Super Administrators can select users on the User Permissions page and grant them permissions (a single user can be assigned multiple permission groups, and duplicate permissions within the groups will be automatically deduplicated).</p>
</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p><strong>Yearning employs user-based fine-grained permissions/role permissions, with the lowest level of permissions granted to data sources.</strong></p>
</div>
</div></template>



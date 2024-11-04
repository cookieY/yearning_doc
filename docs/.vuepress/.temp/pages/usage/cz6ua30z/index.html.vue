<template><div><h2 id="creating-users" tabindex="-1"><a class="header-anchor" href="#creating-users"><span>Creating Users</span></a></h2>
<p>Users can be created in the following two ways:</p>
<ul>
<li>LDAP Login: When a user logs in through LDAP for the first time and succeeds, Yearning will automatically create user data for them. (In Yearning, the password for an LDAP user is randomly generated, so LDAP users cannot log in using non-LDAP methods.)</li>
<li>Admin creates users manually on the Management -&gt; Users page.</li>
</ul>
<h2 id="editing-users" tabindex="-1"><a class="header-anchor" href="#editing-users"><span>Editing Users</span></a></h2>
<p><img src="/images/user01.png" alt="Edit User"></p>
<p>Clicking the edit button allows you to edit the user's row data, as shown below:</p>
<p><img src="/images/user02.png" alt="Edit User Details"></p>
<p>Key Terminology:</p>
<ol>
<li>Auditor: When a user has the auditor role, they will be able to view related information on the audit page.</li>
</ol>
<h2 id="assigning-permissions-to-users" tabindex="-1"><a class="header-anchor" href="#assigning-permissions-to-users"><span>Assigning Permissions to Users</span></a></h2>
<p><img src="/images/user03.png" alt="Assign Permissions"></p>
<p>Click the permissions button to assign permissions to the user. Multiple permission groups can be assigned to a user simultaneously, and the user's permissions will be calculated and deduplicated based on the one or more permission groups assigned. For permission group configuration, refer to <a href="/guide/config/group">Permission Group Settings</a>.</p>
</div></template>



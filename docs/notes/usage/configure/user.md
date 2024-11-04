---
title: Users
createTime: 2024/11/04 15:52:19
permalink: /usage/cz6ua30z/
---

## Creating Users

Users can be created in the following two ways:

+ LDAP Login: When a user logs in through LDAP for the first time and succeeds, Yearning will automatically create user data for them. (In Yearning, the password for an LDAP user is randomly generated, so LDAP users cannot log in using non-LDAP methods.)
+ Admin creates users manually on the Management -> Users page.

## Editing Users

![Edit User](/images/user01.png)

Clicking the edit button allows you to edit the user's row data, as shown below:

![Edit User Details](/images/user02.png)

Key Terminology:

1. Auditor: When a user has the auditor role, they will be able to view related information on the audit page.

## Assigning Permissions to Users

![Assign Permissions](/images/user03.png)

Click the permissions button to assign permissions to the user. Multiple permission groups can be assigned to a user simultaneously, and the user's permissions will be calculated and deduplicated based on the one or more permission groups assigned. For permission group configuration, refer to [Permission Group Settings](/guide/config/group).
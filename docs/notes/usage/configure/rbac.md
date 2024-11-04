---
title: RBAC
createTime: 2024/11/04 16:44:57
permalink: /usage/ms7zdn29/
---

### Philosophy

**Since version 2.1.7, Yearning has adopted permission groups for authorization, with the lowest level of permissions granted to data sources.**

**In Yearning, users are initially divided into two main categories based on roles: Regular Users and Super Administrators. Super Administrator roles have access to the management page, while Regular Users do not. Before fine-grained permissions are defined, users are classified by roles in Yearning. This ensures that management-related permissions do not appear in user-level fine-grained permissions.**

**Permissions related to DDL, DML, and Query data sources can be configured according to each user's actual needs. Each type of permission is independent and does not interfere with the others.**

### Types of Permissions

In Yearning, permissions are divided into two major categories:

1. Role Permissions
2. Fine-Grained Permissions

Role Permissions: These include Regular Users and Super Administrators. This permission primarily defines the boundary of each user's permissions and specifies the entry points for various functions.

Fine-Grained Permissions: Include access to DML/DDL/query data sources and reviewer for queries.

### How to Assign Permissions

Role Permissions: Super Administrators can set the appropriate role when creating a new user. By default, LDAP users logging in for the first time are assigned the submitter role. The role can be modified by the Super Administrator after logging in (the user's role must be determined before granting permissions).

Fine-Grained Permissions: Super Administrators create permission groups and assign one or more permission groups to users, allowing users to inherit the fine-grained permissions of the permission group.

### Initial Lack of Super Administrator Permissions in Yearning

Upon first use of Yearning, even the Super Administrator does not have the corresponding fine-grained permissions and must configure them manually. Newly created users also lack any permissions. All operations require corresponding permissions to be assigned beforehand. Therefore, please assign permissions to users before use!

### Setting User Permissions

1. Super Administrators can create appropriate permission groups on the Permission Groups page and grant associated permissions to the groups.

2. Super Administrators can select users on the User Permissions page and grant them permissions (a single user can be assigned multiple permission groups, and duplicate permissions within the groups will be automatically deduplicated).

::: warning
**Yearning employs user-based fine-grained permissions/role permissions, with the lowest level of permissions granted to data sources.**
:::
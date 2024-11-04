---
title: Quick Start
createTime: 2024/11/04 15:13:49
permalink: /usage/tv2glbkw/
---

**Before officially using Yearning, please set up the following (take a few minutes to read this!).**

1. Create Users
2. Create Permission Groups and Assign Them to Corresponding Users
3. Create Approval Processes
4. Add Data Source Information
5. Assign Approval Processes to Data Sources
6. Configure Settings in the Settings Page
7. Adjust Custom Audit Rules as Needed

### Create Users

Users in Yearning can be created in the following ways:

1. Admin users can manually create users through the **Management->Users** page.
2. Enable and save the registration option in the **Management->Settings** page. The user can then register by clicking the register button on the top left corner of the Yearning login page.
3. Configure and save the Ldap information in the **Management->Settings** page. Ldap users can select Ldap login on the Yearning login page to register/login.
4. User login can also be performed via OIDC login configured through `config.toml`.

::: tip
In Ldap configuration, the `%s` in the filter is a placeholder, similar to `%(user)s` in other Ldap systems.
:::

### Create Permission Groups and Assign Them to Corresponding Users

Admin can create/edit/delete permission groups through the **Management->Permission Groups** page. Permission groups offer various fine-grained permissions control (currently at data source level only), as shown below:

1. Range of data sources allowed for DDL submission
2. Range of data sources allowed for DML submission
3. Range of data sources allowed for query submission

After creating the permission group, please go to the **Management->Users** page, select the user to whom you need to grant the permission group, and click the permission button corresponding to that user for authorization.

To understand the philosophy behind permission groups, visit [Permission Design](/guide/authority).

::: tip
A user can be assigned multiple permission groups. In such a case, the user will inherit all permissions from both groups.

A single permission group can be assigned to multiple users.
:::

### Add Data Source Information

Admin can create/edit/delete data sources through the **Management->Databases** page. A data source is a MySQL instance, categorized into three types: read, write, and read-write. If you wish the data source to handle both DDL/DML submissions and queries, it should be set to read-write; otherwise, set it according to your needs.

::: warning
Yearning does not support certain special characters like `@`, due to potential issues with escaping and pt-osc execution errors. It is recommended to create a new MySQL user specifically for integration with the Yearning platform.
:::

### Create Custom Audit Rules for Environments

Admin can edit the process of an environment through the **Management->Processes** page.

Yearning uses environments as units, allowing different audit processes for different environments.

::: warning
Ensure all orders in the environment are processed before changing the process to avoid confusion.

If there is no process configuration for the environment, users cannot submit any DDL/DML orders for that environment.
:::

### Configure Settings in the Settings Page

Admin can configure various settings of Yearning through the **Management->Settings** page.

Here are some key configurations:

1. Query Limit: This is the maximum limit for **global queries**, defaulting to 1000. This means queries through Yearning can return a maximum of 1000 rows. To increase this limit, modify this setting directly. (The limit for DML/DDL affected rows is not bound by this rule; modify this in the audit rules page.)
2. Add Environment: By default, Yearning only provides **aws/aliyun** environments. Users can add or remove environments as needed. After adding an environment, promptly go to the process template page to add a template for that environment.

### Adjust Custom Audit Rules as Needed

Admin can configure numerous audit rules, each with detailed descriptions, through the **Management->Audit Rules** page.

::: tip
In the Audit Rules, OSC Expr settings can utilize pt-osc/gh-ost for table migrations with DDL statements.

For PT-OSC settings, refer to the [official documentation](https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html).

For GH-OST settings, refer to the [official documentation](https://github.com/github/gh-ost).
:::
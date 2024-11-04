---
title: LDAP Configuration
createTime: 2024/11/04 15:54:19
permalink: /usage/xp6epr8b/
---

![LDAP Configuration](/images/ldap01.png)

Fill in the LDAP-related information in the Management -> Settings page.

**If enabling ldaps, please check the "Enable ldaps" checkbox.**

::: tip
Please fill in the LDAP_Search filter according to your actual situation. Notably, placeholders in Yearning use `%s`. As shown in the image above, if filtering by `cn`, use `(&(cn=%s))`.

Enter the relevant test user's password to test LDAP authentication.
:::

## LDAP User Attribute Mapping

Use attribute mapping to associate attribute information from LDAP with Yearning user data, such as department, email, and real name.

Currently, it supports the mapping of three fields: `real_name` (real name), `email` (email), and `department` (department). For example, if the `name` field in ldap user information corresponds to the real name, the `dept` field corresponds to the department, and the `mail` field corresponds to the email, the mapping format is as follows (key is the user field to be mapped, value is the key value of the corresponding LDAP attribute):

```json
{ "real_name": "name", "email": "mail", "department": "dept" } 
```

Once set up correctly, the first time an LDAP user logs into Yearning, the corresponding LDAP attribute information will automatically be updated to Yearning's user data, eliminating the need for the administrator to set it separately.
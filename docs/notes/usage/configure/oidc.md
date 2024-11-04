---
title: OIDC Login Configuration
createTime: 2024/11/04 15:54:04
permalink: /usage/boccobus/
---

```shell
cat conf.toml
[Oidc]
Enable = false  // Enable OIDC
ClientId = ""
ClientSecret = ""
Scope = ""
AuthUrl = ""
TokenUrl = ""
UserUrl = ""
RedirectUrL = ""
UserNameKey = "" // Field mapping for username
RealNameKey = "" // Field mapping for real name
EmailKey = ""  // Field mapping for email
SessionKey = "" // Field mapping for SessionState
```

Once configured, you can log in via OIDC.

![OIDC Login Animation](/images/oidclogin.gif)
# OIDC登录配置

```shell
cat conf.toml
[Oidc]
Enable = false  // 开启OIDC
ClientId = ""
ClientSecret = ""
Scope = ""
AuthUrl = ""
TokenUrl = ""
UserUrl = ""
RedirectUrL = ""
UserNameKey = "" // 用户名映射字段
RealNameKey = "" // 真实姓名映射字段
EmailKey = ""  // 邮箱映射字段
SessionKey = "" //SessionState 字段

```
配置完毕后即可通过OIDC登录

![](/images/oidclogin.gif)
---
title: Juno 调用
createTime: 2024/11/04 17:08:00
permalink: /zh/development/16e5vp2y/
---
## 如何使用
1. 使用docker部署juno
   ```shell 
   docker run -d -e MYSQL_USER=${YEARNING_DB_USER} -e MYSQL_PASSWORD=${YEARNING_DB_PASSWORD} -e MYSQL_ADDR=${YEARNING_DB_ADDR:PORT} -e MYSQL_DB=${YEARNING_DB}  -p 50001:50001 yeelabs/juno
   ```
2. 在conf.toml中将juno地址填写到GrpcAddr参数内(默认127.0.0.1:50001)
3. 进行调试

::: tip
juno与Yearning 共用同一个数据库。Yearning项目内的config.toml文件中RpcAddr配置项填写为juno所在主机的ip(请勿使用本地回环地址连接)及端口

当前juno支持amd64/arm64。
:::

### 调用方法

juno 采用原生net/rpc 库进行通信，主要提供以下方法

1. Check （SQL语句检测）
2. MergeAlterTables （多条DDL语句合并）
3. Exec （SQL语句执行）
4. Query （SQL查询）

RPC初始化代码

```go
// Yearning/src/lib/rpc.go
func NewRpc() *rpc.Client {
	client, err := rpc.DialHTTP("tcp", model.C.General.RpcAddr)
	if err != nil {
		log.Println(err)
	}
	return client
}
```

```go
// SQL检测调用 
// Yearning/src/handler/fetch/fetch.go 204
var rs []engine.Record
client.Call("Engine.Check", engine.CheckArgs{
			SQL:      u.SQL,
			Schema:   u.Database,
			IP:       s.IP,
			Username: s.Username,
			Port:     s.Port,
			Password: lib.Decrypt(s.Password),
			Kind:     u.Kind,
			Lang:     "zh-cn",
			Rule:     model.GloRole,
		}, &rs)
```
```go
// SQL执行调用
// Yearning/src/handler/order/audit/impl.go 70
var isCall bool
client.Call("Engine.Exec", &ExecArgs{
			Order:    &order,
			Rules:    model.GloRole,
			IP:       source.IP,
			Port:     source.Port,
			Username: source.Username,
			Password: lib.Decrypt(source.Password),
			Message:  model.GloMessage,
		}, &isCall
```
```go
// SQL查询调用
// Yearning/src/handler/personal/impl.go 65
var rs []engine.Record
client.Call("Engine.Query", &QueryArgs{
			SQL:              q.Ref.Sql,
			Limit:            model.GloOther.Limit,
			InsulateWordList: insulateWordList,
		}, &rs)
```
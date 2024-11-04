---
title: Juno Invocation
createTime: 2024/11/04 17:08:00
permalink: /development/16e5vp2y/
---

## How to Use

1. Deploy Juno using Docker:
   ```shell 
   docker run -d -e MYSQL_USER=${YEARNING_DB_USER} -e MYSQL_PASSWORD=${YEARNING_DB_PASSWORD} -e MYSQL_ADDR=${YEARNING_DB_ADDR:PORT} -e MYSQL_DB=${YEARNING_DB}  -p 50001:50001 yeelabs/juno
   ```
2. In the `conf.toml`, enter the Juno address in the `GrpcAddr` parameter (default is 127.0.0.1:50001).
3. Proceed with debugging.

::: tip
Juno shares the same database with Yearning. In the Yearning project's config.toml file, the `RpcAddr` configuration should be filled with the IP of the host where Juno is located (do not use the local loopback address) and the port.

Currently, Juno supports amd64/arm64 architectures.
:::

### Invocation Methods

Juno uses the native net/rpc library for communication and primarily provides the following methods:

1. **Check** (SQL statement validation)
2. **MergeAlterTables** (Merging multiple DDL statements)
3. **Exec** (SQL statement execution)
4. **Query** (SQL querying)

RPC Initialization Code:

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

SQL Validation Invocation:

```go
// SQL Check Invocation 
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

SQL Execution Invocation:

```go
// SQL Execution Invocation
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
		}, &isCall)
```

SQL Query Invocation:

```go
// SQL Query Invocation
// Yearning/src/handler/personal/impl.go 65
var rs []engine.Record
client.Call("Engine.Query", &QueryArgs{
			SQL:              q.Ref.Sql,
			Limit:            model.GloOther.Limit,
			InsulateWordList: insulateWordList,
		}, &rs)
```
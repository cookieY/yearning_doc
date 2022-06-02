# Juno 调用

## 如何使用
2. 启动juno(可以通过-p 指定端口 默认端口为50001)
3. 在conf.toml中将juno地址填写到GrpcAddr参数内(默认127.0.0.1:50001)
4. 进行调试

::: tip
juno与Yearning 必须共用同一个数据库且共用同一份配置文件(如juno与Yearning不在同一台主机，则需拷贝一份cofnig.toml文件与juno放在同级目录。且Yearning项目内的config.toml文件中RpcAddr配置项填写为juno所在主机的ip及端口)

由于当前juno仅只有linux版本,建议基于mac/windows平台开发的开发者使用docker启动juno。
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
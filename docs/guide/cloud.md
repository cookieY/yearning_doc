# Docker & K8s

## Docker

### 注意

Yearning安装包内已含有Dockerfile文件,可直接进行build打包成镜像

**Yearning 从v2.0.4版本开始支持环境变量传参**

容器启动时可通过环境变量的方式传入数据库地址。

如下所示

```shell
docker run -d -it -p8000:8000 -e MYSQL_USER=root -e MYSQL_ADDR=10.0.0.3:3306 -e MYSQL_PASSWORD=123123 -e MYSQL_DB=Yearning test/yearning
```

## K8s

k8s部署参考[K8S | 部署 Yearning SQL 审核平台](https://zhuanlan.zhihu.com/p/408504679)

#### Secret
``` yml
apiVersion: v1
kind: Secret
metadata:
  name: db-conf
  namespace: yearning
type: Opaque  # 使用的是generic类型
data:   # 这里配置的是数据库的相关信息，使用base64加密输入：
  addr: cm9vdAweqw==
  user: cm9vdAweqw==
  pass: cm9vdAweqw==
  data: WWVhcm5pbmc=    # echo -n 'Yearning' | base64
```

#### Service
```yml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: yearning
  name: yearning
  namespace: yearning
spec:
  ports:
    - port: 80  # svc内部端口，通过clusterIP访问
      protocol: TCP
      targetPort: 8000  # 镜像内服务的端口
  selector: # 标签选择器，与deployment中的标签保持一致
    app: yearning
  type: NodePort  # Service类型
```

#### Ingress
``` yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: yearing
  namespace: zheng
spec:
  rules:
    # 需要在本地机器的hosts文件中添加配置：192.168.111.111 www.yearning.com
    - host: www.yearning.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: yearning
                port:
                  number: 80
```

#### Deployment
``` yml
apiVersion: apps/v1 # API版泵
kind: Deployment  # 资源类型
metadata: # 元数据
  labels: # 标签
    app: SQL-Review
  name: yearning  # deployment的名字
  namespace: yearning  # 所属命名空间
spec: 
  replicas: 3 # 副本数
  selector: # 选择器，选择针对谁做
    matchLabels:
      app: yearning
  template: # 镜像的模板
    metadata: # 元数据
      labels: # 标签
        app: yearning
    spec:
      containers: # 容器信息
        - image: 192.168.189.111/project/yearning  # 容器镜像
          name: yearning # 容器的名字
          imagePullPolicy: IfNotPresent # 镜像的下载策略
          env:  # 容器中的变量
            - name: MYSQL_ADDR
              valueFrom:
                secretKeyRef: # 存储的变量信息
                  name: db-conf
                  key: addr
            - name: MYSQL_USER
              valueFrom:
                secretKeyRef:
                  name: db-conf
                  key: user
            - name: MYSQL_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: db-conf
                  key: pass
            - name: MYSQL_DB
              valueFrom:
                secretKeyRef:
                  name: db-conf
                  key: data
          ports:    # 定义容器中的端口信息
            - containerPort: 8000
              name: web
              protocol: TCP
          readinessProbe:   # 就绪检查
            httpGet:
              path: /
              port: web
              scheme: HTTP
            initialDelaySeconds: 25
            periodSeconds: 2
          livenessProbe:    # 存活检查
            httpGet:
              path: /
              port: web
              scheme: HTTP
            initialDelaySeconds: 30
            periodSeconds: 2
          resources:    # 资源限制
            requests:
              cpu: 200m
              memory: 1Gi
            limits:
              cpu: 250m
              memory: 2Gi
```

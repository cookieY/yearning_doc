---
title: k8s
createTime: 2024/11/04 15:47:05
permalink: /usage/hf1nqbio/
---

k8s部署[来自知乎](https://zhuanlan.zhihu.com/p/408504679) 以下为适配3.0版本的部署方式。

#### Secret
``` yml
apiVersion: v1
kind: Secret
metadata:
  name: db-conf
  namespace: yearning
type: Opaque  # 使用的是generic类型
data:   # 这里配置的是数据库的相关信息，使用base64加密输入： # echo -n 'xxxx' | base64
  addr: cm9vdAweqw==
  user: cm9vdAweqw==
  pass: cm9vdAweqw==
  data: WWVhcm5pbmc=    
  sk: W3213123Vhcm5pbmc=
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
  name: yearning
  namespace: yearning
spec:
  rules:
    - host: yearning.io
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
    app: yearning
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
        - image: yeelabs/yearning  # 容器镜像
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
            - name: SECRET_KEY
              valueFrom:
                secretKeyRef:
                  name: db-conf
                  key: sk
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

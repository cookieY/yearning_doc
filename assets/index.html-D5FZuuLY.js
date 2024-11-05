import{_ as i,c as a,a as n,o as l}from"./app-B_p-YCDi.js";const e={};function h(p,s){return l(),a("div",null,s[0]||(s[0]=[n(`<p>Kubernetes Deployment (Adapted for Version 3.0) <a href="https://zhuanlan.zhihu.com/p/408504679" target="_blank" rel="noopener noreferrer">Source: Zhihu</a></p><p>Below is the deployment method adapted for version 3.0.</p><h4 id="secret" tabindex="-1"><a class="header-anchor" href="#secret"><span>Secret</span></a></h4><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">apiVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Secret</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">metadata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> db-conf</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  namespace</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Opaque</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 使用的是generic类型</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # 这里配置的是数据库的相关信息，使用base64加密输入： # echo -n &#39;xxxx&#39; | base64</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  addr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cm9vdAweqw==</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cm9vdAweqw==</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  pass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cm9vdAweqw==</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> WWVhcm5pbmc=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  sk</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> W3213123Vhcm5pbmc=</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>Service</span></a></h4><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">apiVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Service</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">metadata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  labels</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  namespace</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">spec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 80</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # svc内部端口，通过clusterIP访问</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      protocol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TCP</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      targetPort</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 8000</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 镜像内服务的端口</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  selector</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 标签选择器，与deployment中的标签保持一致</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> NodePort</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # Service类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress"><span>Ingress</span></a></h4><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">apiVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> networking.k8s.io/v1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Ingress</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">metadata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  namespace</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">spec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  rules</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning.io</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      http</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        paths</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">          -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            pathType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Prefix</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            backend</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              service</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h4><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">apiVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apps/v1</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # API版泵</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Deployment</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 资源类型</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">metadata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 元数据</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  labels</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 标签</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # deployment的名字</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  namespace</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 所属命名空间</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">spec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  replicas</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 副本数</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  selector</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 选择器，选择针对谁做</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    matchLabels</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 镜像的模板</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    metadata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 元数据</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      labels</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 标签</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    spec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      containers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 容器信息</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yeelabs/yearning</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 容器镜像</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yearning</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 容器的名字</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          imagePullPolicy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> IfNotPresent</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 镜像的下载策略</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          env</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 容器中的变量</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_ADDR</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              valueFrom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                secretKeyRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 存储的变量信息</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> db-conf</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> addr</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_USER</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              valueFrom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                secretKeyRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> db-conf</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              valueFrom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                secretKeyRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> db-conf</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pass</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_DB</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              valueFrom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                secretKeyRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> db-conf</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> data</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SECRET_KEY</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              valueFrom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                secretKeyRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> db-conf</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">                  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sk</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 定义容器中的端口信息</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> containerPort</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 8000</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              protocol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TCP</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          readinessProbe</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # 就绪检查</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            httpGet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              scheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> HTTP</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            initialDelaySeconds</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 25</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            periodSeconds</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          livenessProbe</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 存活检查</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            httpGet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              scheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> HTTP</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            initialDelaySeconds</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            periodSeconds</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          resources</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 资源限制</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            requests</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              cpu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 200m</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              memory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1Gi</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            limits</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              cpu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 250m</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              memory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2Gi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const t=i(e,[["render",h],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/usage/hf1nqbio/","title":"Kubernetes","lang":"en-US","frontmatter":{"title":"Kubernetes","createTime":"2024/11/04 15:47:05","permalink":"/usage/hf1nqbio/","description":"Kubernetes Deployment (Adapted for Version 3.0) Source: Zhihu Below is the deployment method adapted for version 3.0. Secret Service Ingress Deployment","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://next.yearning.io/zh/usage/hf1nqbio/"}],["meta",{"property":"og:url","content":"https://next.yearning.io/usage/hf1nqbio/"}],["meta",{"property":"og:site_name","content":"Yearning Guide"}],["meta",{"property":"og:title","content":"Kubernetes"}],["meta",{"property":"og:description","content":"Kubernetes Deployment (Adapted for Version 3.0) Source: Zhihu Below is the deployment method adapted for version 3.0. Secret Service Ingress Deployment"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:12:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:12:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:12:55.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.32,"words":397},"git":{"createdTime":1730716067000,"updatedTime":1730729575000,"contributors":[{"name":"Henry","email":"henry@yearning.io","commits":1},{"name":"HenryYee","email":"henry@yearning.io","commits":1}]},"autoDesc":true,"filePathRelative":"notes/usage/k8s.md","bulletin":false}');export{t as comp,d as data};
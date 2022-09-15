import{_ as p,r as t,o as l,a as c,b as s,d as o,F as r,c as a,e as n}from"./app.0fe12f9e.js";const u={},k=a(`<h1 id="docker-k8s" tabindex="-1"><a class="header-anchor" href="#docker-k8s" aria-hidden="true">#</a> Docker &amp; K8s</h1><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><p>Yearning\u5B89\u88C5\u5305\u5185\u5DF2\u542B\u6709Dockerfile\u6587\u4EF6,\u53EF\u76F4\u63A5\u8FDB\u884Cbuild\u6253\u5305\u6210\u955C\u50CF</p><p>\u5BB9\u5668\u542F\u52A8\u65F6\u53EF\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u7684\u65B9\u5F0F\u4F20\u5165\u6570\u636E\u5E93\u5730\u5740\u4EE5\u53CA\u79D8\u94A5\u3002</p><p>\u5355\u72EC\u4F7F\u7528docker\u65F6\u8BF7\u5148\u521B\u5EFA\u6570\u636E\u5E93\u5E76\u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E3A<strong>utf8mb4</strong></p><p>\u5982\u4E0B\u6240\u793A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -it -p8000:8000 -e <span class="token assign-left variable">SECRET_KEY</span><span class="token operator">=</span>dbcjqheupqjsuwsm -e <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span>root -e <span class="token assign-left variable">MYSQL_ADDR</span><span class="token operator">=</span><span class="token number">10.0</span>.0.3:3306 -e <span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token number">123123</span> -e <span class="token assign-left variable">MYSQL_DB</span><span class="token operator">=</span>Yearning chaiyd/yearning
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker-compose-\u63A8\u8350\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u63A8\u8350\u5B89\u88C5" aria-hidden="true">#</a> Docker-compose(\u63A8\u8350\u5B89\u88C5)</h2><p>\u5B89\u88C5\u5305/\u6E90\u7801\u4ED3\u5E93\u5185docker\u76EE\u5F55\u4E0B\u6267\u884C <code>docker-compose up -d</code> \u5373\u53EF</p><h2 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> K8s</h2>`,11),i=n("k8s\u90E8\u7F72"),b={href:"https://zhuanlan.zhihu.com/p/408504679",target:"_blank",rel:"noopener noreferrer"},m=n("\u6765\u81EA\u77E5\u4E4E"),y=n(" \u4EE5\u4E0B\u4E3A\u9002\u914D3.0\u7248\u672C\u7684\u90E8\u7F72\u65B9\u5F0F\u3002"),d=a(`<h4 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> Secret</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>conf
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> yearning
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque  <span class="token comment"># \u4F7F\u7528\u7684\u662Fgeneric\u7C7B\u578B</span>
<span class="token key atrule">data</span><span class="token punctuation">:</span>   <span class="token comment"># \u8FD9\u91CC\u914D\u7F6E\u7684\u662F\u6570\u636E\u5E93\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u4F7F\u7528base64\u52A0\u5BC6\u8F93\u5165\uFF1A # echo -n &#39;xxxx&#39; | base64</span>
  <span class="token key atrule">addr</span><span class="token punctuation">:</span> cm9vdAweqw==
  <span class="token key atrule">user</span><span class="token punctuation">:</span> cm9vdAweqw==
  <span class="token key atrule">pass</span><span class="token punctuation">:</span> cm9vdAweqw==
  <span class="token key atrule">data</span><span class="token punctuation">:</span> WWVhcm5pbmc=    
  <span class="token key atrule">sk</span><span class="token punctuation">:</span> W3213123Vhcm5pbmc=
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> yearning
  <span class="token key atrule">name</span><span class="token punctuation">:</span> yearning
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> yearning
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>  <span class="token comment"># svc\u5185\u90E8\u7AEF\u53E3\uFF0C\u901A\u8FC7clusterIP\u8BBF\u95EE</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8000</span>  <span class="token comment"># \u955C\u50CF\u5185\u670D\u52A1\u7684\u7AEF\u53E3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># \u6807\u7B7E\u9009\u62E9\u5668\uFF0C\u4E0Edeployment\u4E2D\u7684\u6807\u7B7E\u4FDD\u6301\u4E00\u81F4</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> yearning
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort  <span class="token comment"># Service\u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress" aria-hidden="true">#</a> Ingress</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> yearning
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> yearning
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> yearning.io
      <span class="token key atrule">http</span><span class="token punctuation">:</span>
        <span class="token key atrule">paths</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
            <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
            <span class="token key atrule">backend</span><span class="token punctuation">:</span>
              <span class="token key atrule">service</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> yearning
                <span class="token key atrule">port</span><span class="token punctuation">:</span>
                  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment"># API\u7248\u6CF5</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment  <span class="token comment"># \u8D44\u6E90\u7C7B\u578B</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># \u5143\u6570\u636E</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># \u6807\u7B7E</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> yearning
  <span class="token key atrule">name</span><span class="token punctuation">:</span> yearning  <span class="token comment"># deployment\u7684\u540D\u5B57</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> yearning  <span class="token comment"># \u6240\u5C5E\u547D\u540D\u7A7A\u95F4</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># \u526F\u672C\u6570</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># \u9009\u62E9\u5668\uFF0C\u9009\u62E9\u9488\u5BF9\u8C01\u505A</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> yearning
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># \u955C\u50CF\u7684\u6A21\u677F</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># \u5143\u6570\u636E</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># \u6807\u7B7E</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> yearning
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token comment"># \u5BB9\u5668\u4FE1\u606F</span>
        <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> chaiyd/yearning  <span class="token comment"># \u5BB9\u5668\u955C\u50CF</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> yearning <span class="token comment"># \u5BB9\u5668\u7684\u540D\u5B57</span>
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent <span class="token comment"># \u955C\u50CF\u7684\u4E0B\u8F7D\u7B56\u7565</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span>  <span class="token comment"># \u5BB9\u5668\u4E2D\u7684\u53D8\u91CF</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_ADDR
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span> <span class="token comment"># \u5B58\u50A8\u7684\u53D8\u91CF\u4FE1\u606F</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>conf
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> addr
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_USER
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>conf
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> user
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_PASSWORD
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>conf
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> pass
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_DB
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>conf
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> data
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SECRET_KEY
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>conf
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> sk
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>    <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668\u4E2D\u7684\u7AEF\u53E3\u4FE1\u606F</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8000</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> web
              <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
          <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>   <span class="token comment"># \u5C31\u7EEA\u68C0\u67E5</span>
            <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
              <span class="token key atrule">path</span><span class="token punctuation">:</span> /
              <span class="token key atrule">port</span><span class="token punctuation">:</span> web
              <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
            <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">25</span>
            <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">2</span>
          <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>    <span class="token comment"># \u5B58\u6D3B\u68C0\u67E5</span>
            <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
              <span class="token key atrule">path</span><span class="token punctuation">:</span> /
              <span class="token key atrule">port</span><span class="token punctuation">:</span> web
              <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
            <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
            <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">2</span>
          <span class="token key atrule">resources</span><span class="token punctuation">:</span>    <span class="token comment"># \u8D44\u6E90\u9650\u5236</span>
            <span class="token key atrule">requests</span><span class="token punctuation">:</span>
              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 200m
              <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1Gi
            <span class="token key atrule">limits</span><span class="token punctuation">:</span>
              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 250m
              <span class="token key atrule">memory</span><span class="token punctuation">:</span> 2Gi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div>`,8);function h(g,v){const e=t("ExternalLinkIcon");return l(),c(r,null,[k,s("p",null,[i,s("a",b,[m,o(e)]),y]),d],64)}var _=p(u,[["render",h],["__file","cloud.html.vue"]]);export{_ as default};

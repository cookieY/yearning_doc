import{_ as s,c as n}from"./app.0fe12f9e.js";var a="/images/oidclogin.gif";const e={},p=n(`<h1 id="oidc\u767B\u5F55\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#oidc\u767B\u5F55\u914D\u7F6E" aria-hidden="true">#</a> OIDC\u767B\u5F55\u914D\u7F6E</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> conf.toml
<span class="token punctuation">[</span>Oidc<span class="token punctuation">]</span>
Enable <span class="token operator">=</span> <span class="token boolean">false</span>  // \u5F00\u542FOIDC
ClientId <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
ClientSecret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
Scope <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
AuthUrl <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
TokenUrl <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
UserUrl <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
RedirectUrL <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
UserNameKey <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> // \u7528\u6237\u540D\u6620\u5C04\u5B57\u6BB5
RealNameKey <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> // \u771F\u5B9E\u59D3\u540D\u6620\u5C04\u5B57\u6BB5
EmailKey <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>  // \u90AE\u7BB1\u6620\u5C04\u5B57\u6BB5
SessionKey <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> //SessionState \u5B57\u6BB5

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u914D\u7F6E\u5B8C\u6BD5\u540E\u5373\u53EF\u901A\u8FC7OIDC\u767B\u5F55</p><p><img src="`+a+'" alt=""></p>',4);function t(o,r){return p}var c=s(e,[["render",t],["__file","oidc.html.vue"]]);export{c as default};

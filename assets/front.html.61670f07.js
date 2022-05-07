import{_ as n,c as s}from"./app.6ea523e9.js";const a={},e=s(`<h1 id="gemini-next" tabindex="-1"><a class="header-anchor" href="#gemini-next" aria-hidden="true">#</a> Gemini-Next</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|-- gemini-next
    |-- .gitignore
    |-- README.md
    |-- index.html
    |-- package.json
    |-- tsconfig.json
    |-- vite.config.ts
    |-- yarn.lock
    |-- img
    |   |-- audit.png
    |   |-- dash.png
    |   |-- login.png
    |   |-- logo.jpeg
    |   |-- query.png
    |   |-- record.png
    |-- public
    |   |-- favicon.ico
    |   |-- icon.png
    |-- src
        |-- App.vue
        |-- global.d.ts
        |-- main.ts
        |-- router.ts
        |-- shims-vue.d.ts
        |-- vite-env.d.ts
        |-- apis
        |   |-- autotask.ts
        |   |-- board.ts
        |   |-- dash.ts
        |   |-- db.ts
        |   |-- fetchSchema.ts
        |   |-- flow.ts
        |   |-- homeApis.ts
        |   |-- listAppApis.ts
        |   |-- loginApi.ts
        |   |-- orderPostApis.ts
        |   |-- policy.ts
        |   |-- query.ts
        |   |-- record.ts
        |   |-- rules.ts
        |   |-- setting.ts
        |   |-- user.ts
        |-- assets
        |   |-- comment
        |   |   |-- 1.svg
        |   |   |-- 2.svg
        |   |   |-- 3.svg
        |   |   |-- comment.svg
        |   |   |-- rockets.svg
        |   |-- login
        |       |-- 1.mp4
        |       |-- logo.png
        |-- components # \u7EC4\u4EF6\u5E93
        |   |-- chartCard
        |   |   |-- chart.less
        |   |   |-- chartCard.vue
        |   |   |-- miniArea.vue
        |   |   |-- miniBar.vue
        |   |   |-- miniCol.vue
        |   |-- editor
        |   |   |-- editor.vue
        |   |   |-- impl.ts
        |   |   |-- keyword.ts
        |   |   |-- work.ts
        |   |-- listApp
        |   |   |-- listApp.vue
        |   |   |-- queryApp.vue
        |   |   |-- queryBanner.vue
        |   |   |-- queryOrder.vue
        |   |-- menu
        |   |   |-- menu.vue
        |   |-- orderProfile
        |   |   |-- comment.vue
        |   |   |-- orderProfile.vue
        |   |   |-- osc.vue
        |   |   |-- rejectModal.vue
        |   |   |-- results.vue
        |   |-- pageHeader
        |   |   |-- pageHeader.vue
        |   |-- queryProfile
        |   |   |-- queryProfile.vue
        |   |-- steps
        |   |   |-- steps.vue
        |   |-- table
        |   |   |-- index.ts
        |   |   |-- orderTable.vue
        |   |   |-- orderTableSearch.vue
        |   |   |-- stateTags.vue
        |   |   |-- table.vue
        |   |-- user
        |       |-- changePassword.vue
        |       |-- registerForm.vue
        |       |-- userRules.vue
        |-- config # \u901A\u7528\u914D\u7F6E
        |   |-- request.ts
        |   |-- vars.ts
        |-- lang # i18n\u76F8\u5173
        |   |-- en-us.ts
        |   |-- index.ts
        |   |-- zh-cn.ts
        |   |-- en-us
        |   |   |-- autoTask
        |   |   |   |-- index.ts
        |   |   |-- common
        |   |   |   |-- index.ts
        |   |   |-- menu
        |   |   |   |-- index.ts
        |   |   |-- order
        |   |   |   |-- index.ts
        |   |   |-- query
        |   |   |   |-- index.ts
        |   |   |-- record
        |   |   |   |-- index.ts
        |   |   |-- setting
        |   |   |   |-- index.ts
        |   |   |-- user
        |   |       |-- index.ts
        |   |-- zh-cn
        |       |-- autoTask
        |       |   |-- index.ts
        |       |-- common
        |       |   |-- index.ts
        |       |-- menu
        |       |   |-- index.ts
        |       |-- order
        |       |   |-- index.ts
        |       |-- query
        |       |   |-- index.ts
        |       |-- record
        |       |   |-- index.ts
        |       |-- setting
        |       |   |-- index.ts
        |       |-- user
        |           |-- index.ts
        |-- lib
        |   |-- index.ts
        |-- mixins 
        |   |-- common.ts
        |   |-- db.ts
        |   |-- fetch.ts
        |   |-- juno.ts
        |-- socket
        |   |-- index.ts
        |-- store
        |   |-- index.ts
        |   |-- types.ts
        |   |-- module
        |       |-- common.ts
        |       |-- highlight.ts
        |       |-- menu.ts
        |       |-- order.ts
        |       |-- user.ts
        |-- style
        |   |-- theme.less
        |-- types
        |   |-- index.ts
        |-- views # \u9875\u9762
            |-- apply
            |   |-- apply.vue
            |   |-- order.vue
            |-- common
            |   |-- announce.vue
            |   |-- auditLayout.vue
            |   |-- sponsor.vue
            |   |-- subLayout.vue
            |-- home
            |   |-- home.vue
            |   |-- profile.vue
            |-- layout
            |   |-- layout.vue
            |-- login
            |   |-- login-form.vue
            |   |-- login.vue
            |-- manager
            |   |-- autotask
            |   |   |-- autotask.vue
            |   |   |-- autotaskModal.vue
            |   |   |-- autotaskTable.vue
            |   |-- board
            |   |   |-- board.vue
            |   |-- db
            |   |   |-- db.vue
            |   |   |-- dbForm.vue
            |   |   |-- dbModal.vue
            |   |   |-- dbTable.vue
            |   |   |-- dbTableSearch.vue
            |   |-- flow
            |   |   |-- flow.vue
            |   |   |-- flowModal.vue
            |   |   |-- flowTable.vue
            |   |-- policy
            |   |   |-- policy.vue
            |   |   |-- policyModal.vue
            |   |   |-- policyTable.vue
            |   |-- rules
            |   |   |-- rules.ts
            |   |   |-- rules.vue
            |   |-- setting
            |   |   |-- setting.vue
            |   |-- user
            |       |-- user.vue
            |       |-- userTable.vue
            |       |-- userTableSearch.vue
            |-- query
            |   |-- clip.vue
            |   |-- clipBoard.vue
            |   |-- history.vue
            |   |-- input.vue
            |   |-- modal.vue
            |   |-- query.vue
            |   |-- table.vue
            |   |-- tree.vue
            |-- record
            |   |-- order.vue
            |   |-- query.vue
            |   |-- record.vue
            |   |-- libs
            |       |-- tips.vue
            |-- server
                |-- order
                |   |-- list.vue
                |-- query
                    |-- list.vue
                    |-- querySearch.vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br></div></div>`,2);function r(l,p){return e}var u=n(a,[["render",r],["__file","front.html.vue"]]);export{u as default};

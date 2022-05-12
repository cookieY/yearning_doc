import{_ as n,c as s}from"./app.2ffbff1e.js";const a={},e=s(`<h1 id="yearning-go" tabindex="-1"><a class="header-anchor" href="#yearning-go" aria-hidden="true">#</a> Yearning-go</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|-- Yearning
    |-- .gitignore
    |-- Juno
    |-- LICENSE
    |-- README.md
    |-- README_EN.md
    |-- conf.toml.template
    |-- go.mod
    |-- go.sum
    |-- logo_s.png
    |-- main.go
    |-- cmd  # cli\u6307\u4EE4
    |   |-- cli.go
    |   |-- cmd.go
    |   |-- migrate.go
    |-- docker
    |   |-- Dockerfile
    |   |-- README.md
    |   |-- docker-compose.yml
    |-- img
    |   |-- audit.png
    |   |-- dash.png
    |   |-- login.png
    |   |-- logo.jpeg
    |   |-- query.png
    |   |-- record.png
    |-- migrate
    |   |-- main.go
    |-- src
        |-- apis
        |   |-- dash.go
        |   |-- fetch.go
        |   |-- query.go
        |-- engine
        |   |-- engine.go
        |-- handler # \u63A5\u53E3\u6838\u5FC3\u903B\u8F91
        |   |-- dashboard.go
        |   |-- commom # \u516C\u5171\u65B9\u6CD5
        |   |   |-- error.go
        |   |   |-- expr.go
        |   |   |-- types.go
        |   |   |-- util.go
        |   |-- fetch # \u901A\u7528\u83B7\u53D6\u63A5\u53E3
        |   |   |-- fetch.go
        |   |   |-- fetch_test.go
        |   |   |-- impl.go
        |   |-- login # \u767B\u5F55\u53CA\u4E2A\u4EBA\u4FE1\u606F\u63A5\u53E3
        |   |   |-- login.go
        |   |   |-- profile.go
        |   |-- manage # \u7BA1\u7406\u63A5\u53E3
        |   |   |-- board.go
        |   |   |-- autoTask
        |   |   |   |-- autoTask.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- db
        |   |   |   |-- dbmanage.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- group
        |   |   |   |-- group.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- roles
        |   |   |   |-- roles.go
        |   |   |   |-- route.go
        |   |   |-- settings
        |   |   |   |-- route.go
        |   |   |   |-- setting.go
        |   |   |   |-- setting_test.go
        |   |   |-- tpl
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |   |-- tpl.go
        |   |   |   |-- tpl_test.go
        |   |   |-- user
        |   |       |-- impl.go
        |   |       |-- route.go
        |   |       |-- user.go
        |   |       |-- user_test.go
        |   |-- order # \u5DE5\u5355\u63A5\u53E3
        |   |   |-- audit
        |   |   |   |-- audit.go
        |   |   |   |-- impl.go
        |   |   |   |-- route.go
        |   |   |-- osc
        |   |   |   |-- impl.go
        |   |   |   |-- osc.go
        |   |   |   |-- route.go
        |   |   |-- query
        |   |   |   |-- query.go
        |   |   |   |-- route.go
        |   |   |-- record
        |   |       |-- record.go
        |   |-- personal # \u7528\u6237\u5DE5\u5355\u63D0\u4EA4/\u67E5\u8BE2 \u63A5\u53E3
        |       |-- impl.go
        |       |-- order.go
        |       |-- post.go
        |       |-- query.go
        |       |-- query_test.go
        |       |-- route.go
        |       |-- util.go
        |-- lib #\u516C\u5171\u5E93
        |   |-- ding.go
        |   |-- encrypt.go
        |   |-- encrypt_test.go
        |   |-- jwtAuth.go
        |   |-- rpc.go
        |   |-- sendMail.go
        |   |-- sendMail_test.go
        |   |-- toolbox.go
        |   |-- toolbox_test.go
        |   |-- wrapper.go
        |-- model # \u6570\u636E\u6A21\u578B
        |   |-- db.go
        |   |-- db_test.go
        |   |-- global.go
        |   |-- impl.go
        |   |-- modal.go
        |-- router # \u540E\u7AEF\u8DEF\u7531\u8868
        |   |-- router.go
        |-- service # Yearning\u542F\u52A8\u51FD\u6570
        |   |-- migrate.go
        |   |-- migrate_test.go
        |   |-- yearning.go
        |-- test
            |-- testCore.go

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br></div></div>`,2);function r(l,p){return e}var i=n(a,[["render",r],["__file","catalog.html.vue"]]);export{i as default};

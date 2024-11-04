<template><div><h2 id="_2023-04-24-yearning-3-1-4" tabindex="-1"><a class="header-anchor" href="#_2023-04-24-yearning-3-1-4"><span>2023-04-24 Yearning 3.1.4</span></a></h2>
<ul>
<li>工单/查询工单列表不再采用轮训方式实时获取数据，改用ws</li>
<li>工单/查询详情采用卡片抽屉式进行展示</li>
<li>修复google浏览器执行查询语句语句时，如果查询结果的列过多，会导致整个浏览器被撑大的问题 #789</li>
<li>新增对ARMv64的支持</li>
</ul>
<h2 id="_2023-03-09-yearning-3-1-3" tabindex="-1"><a class="header-anchor" href="#_2023-03-09-yearning-3-1-3"><span>2023-03-09 Yearning 3.1.3</span></a></h2>
<ul>
<li>修复gh-ost无法执行的问题</li>
<li>修复工单列表刷新异常的问题</li>
<li>修复dml语句未备份执行时 执行信息无法展示的问题</li>
</ul>
<h2 id="_2023-02-10-yearning-3-1-2-2" tabindex="-1"><a class="header-anchor" href="#_2023-02-10-yearning-3-1-2-2"><span>2023-02-10 Yearning 3.1.2.2</span></a></h2>
<ul>
<li>修复firefox浏览器头部样式遮挡问题 #637</li>
<li>修复insert语句审核异常的问题 #760 #759 #755</li>
</ul>
<h2 id="_2023-02-01-yearning-3-1-2-1" tabindex="-1"><a class="header-anchor" href="#_2023-02-01-yearning-3-1-2-1"><span>2023-02-01 Yearning 3.1.2.1</span></a></h2>
<ul>
<li>修复查询审核工单提交后工单异常的问题</li>
<li>修复公告栏数据无法保存的问题</li>
<li>修复用户创建密码验证文案显示错误的问题</li>
<li>修复枚举类审核异常的问题</li>
<li>修复语法检测timestamp类型字段的默认值为字符串时依然通过</li>
<li>修复审核insert into 语句列数与值列表不匹配审核异常的问题</li>
<li>支持 drop table if exists语句</li>
<li>支持数据源SSL连接</li>
</ul>
<h2 id="_2022-11-14-yearning-3-1-1-1" tabindex="-1"><a class="header-anchor" href="#_2022-11-14-yearning-3-1-1-1"><span>2022-11-14 Yearning 3.1.1.1</span></a></h2>
<ul>
<li>解决回滚语句升序导致的依赖语句执行错误问题(更改为降序)</li>
<li>调整提交防抖逻辑 规避重复提交问题</li>
<li>修复工单时间查询失效的问题</li>
<li>修复表字符集更改回滚语句异常的问题</li>
<li>修复SQL语句为空时依然可以提交的问题</li>
<li>对列表页使用前端缓存</li>
<li>修复枚举类审核异常的问题</li>
<li>修复执行时间未展示的问题</li>
<li>修复create table 回滚语句生成单独索引语句导致无法回滚的问题</li>
<li>修复安装初始化时admin赋权语句错误的问题</li>
</ul>
<h2 id="_2022-09-15-yearning-3-1-0" tabindex="-1"><a class="header-anchor" href="#_2022-09-15-yearning-3-1-0"><span>2022-09-15 Yearning 3.1.0</span></a></h2>
<ul>
<li>修复SQL检测/执行完毕后连接不释放的问题</li>
<li>修复审核人如果没有数据源权限无法审核的问题</li>
</ul>
<h2 id="_2022-09-01-yearning-3-0-9" tabindex="-1"><a class="header-anchor" href="#_2022-09-01-yearning-3-0-9"><span>2022-09-01 Yearning 3.0.9</span></a></h2>
<ul>
<li>优化大批量SQL导致审核列表卡死的问题</li>
<li>优化白色主题布局</li>
<li>修复SSL非465端口邮件无法发送的问题</li>
</ul>
<h2 id="_2022-08-18-yearning-3-0-8" tabindex="-1"><a class="header-anchor" href="#_2022-08-18-yearning-3-0-8"><span>2022-08-18 Yearning 3.0.8</span></a></h2>
<ul>
<li>添加i18n 英语支持(目前仅对前端内容)</li>
<li>修复推送消息没有工单说明及标题错误的问题(针对&gt;= 3.0.5版本)</li>
<li>修复查询时库名中带有特殊符号导致无法切库的问题 #661</li>
<li>优化迁移脚本体验(针对2.3.5版本迁移至3.x版本)</li>
</ul>
<h2 id="_2022-08-18-yearning-3-0-7" tabindex="-1"><a class="header-anchor" href="#_2022-08-18-yearning-3-0-7"><span>2022-08-18 Yearning 3.0.7</span></a></h2>
<ul>
<li>修复测试消息推送不发送的问题</li>
<li>修复工单时间字段查询控制台报错的问题</li>
<li>修复工单重复提交异常的问题</li>
<li>修复查询导出xls列顺序混乱的问题</li>
<li>优化查询显示结果</li>
<li>优化工单详情进度信息样式</li>
<li>优化容器部署支持秘钥自定义</li>
<li>优化OIDC登录逻辑</li>
</ul>
<h2 id="_2022-08-11-yearning-3-0-6" tabindex="-1"><a class="header-anchor" href="#_2022-08-11-yearning-3-0-6"><span>2022-08-11 Yearning 3.0.6</span></a></h2>
<ul>
<li>完善ws查询断线重连逻辑</li>
<li>修复查询结果tab页显示异常的问题</li>
<li>修复3.0.5版本消息推送格式异常的问题</li>
<li>修复某些查询写法导致字段脱敏逃逸的问题</li>
</ul>
<h2 id="_2022-08-06-yearning-3-0-5" tabindex="-1"><a class="header-anchor" href="#_2022-08-06-yearning-3-0-5"><span>2022-08-06 Yearning 3.0.5</span></a></h2>
<ul>
<li>修复DDL语句提交超过10条卡死的问题</li>
<li>修复enum类型检测时长度报错的问题</li>
<li>修复工单/查询在进行测试/查询操作时的安全问题</li>
<li>新增查询省略显示</li>
<li>优化查询逻辑,提高单一连接利用率。</li>
<li>修复自动联想多窗口时重复提示的问题</li>
</ul>
<h2 id="_2022-07-23-yearning-3-0-4" tabindex="-1"><a class="header-anchor" href="#_2022-07-23-yearning-3-0-4"><span>2022-07-23 Yearning 3.0.4</span></a></h2>
<ul>
<li>修复工单无法撤销的问题</li>
<li>修复首页文案错误</li>
<li>修复工单申请搜索异常的问题</li>
<li>修复语句执行失败文档异常的问题</li>
<li>修复工单无法生成回滚语句的问题</li>
<li>修复初始化缺少表结构的问题</li>
</ul>
<h2 id="_2022-07-19-yearning-3-0-3" tabindex="-1"><a class="header-anchor" href="#_2022-07-19-yearning-3-0-3"><span>2022-07-19 Yearning 3.0.3</span></a></h2>
<ul>
<li>修复数据清除无法使用的问题</li>
<li>修复字段长度不足导致无法提交工单的问题</li>
<li>修复查询联想数据过大导致浏览器SessionStorage配额超限的问题</li>
<li>修复回滚语句为空时依然能够提交回滚语句的问题</li>
<li>修复DDL语句 AUTO_INCREMENT审核报错的问题</li>
<li>修复用户无法添加的问题</li>
<li>修复查询数据源切换后不同源相同数据库名无法展开的问题</li>
<li>修复关键词检查异常的问题</li>
<li>修复docker安装时异常panic的问题 #610</li>
<li>修复datetime(3)类型不能正常插入精确到毫秒的时间值 #616</li>
<li>修复SQL检测时，不能drop联合索引，自增列主键不得删除 #612</li>
<li>支持DRDS2.0</li>
<li>审核详情页新增工单说明展示</li>
<li>添加 检测/美化按钮提示</li>
<li>gorm版本升级为v2版本</li>
<li>代码组织优化，开发环境升级为go1.18版本</li>
</ul>
<h2 id="_2022-06-20-yearning-3-0-1" tabindex="-1"><a class="header-anchor" href="#_2022-06-20-yearning-3-0-1"><span>2022-06-20 Yearning 3.0.1</span></a></h2>
<ul>
<li>添加用户撤销工单功能</li>
<li>添加切换查询数据源功能</li>
<li>查询增加用户自行结束会话功能</li>
<li>优化查询审核逻辑,开启查询审核的查询工单不可切换数据源</li>
<li>修复数据源名称无法修改的问题</li>
<li>优化数据源查询逻辑</li>
<li>新增审核规则DDLAllowMultiAlter  DDL单个工单允许多alter语句提交</li>
<li>修复流程编辑后新建流程将老流程替换的问题</li>
</ul>
<h2 id="_2022-06-02-yearning-3-0-0-ga" tabindex="-1"><a class="header-anchor" href="#_2022-06-02-yearning-3-0-0-ga"><span>2022-06-02 Yearning 3.0.0-GA</span></a></h2>
<p><strong>设计</strong></p>
<ol>
<li>前端页面重新绘制。采用vite+vue3.2开发模式。全局页面默认采用暗黑主题,支持主题切换(可在个人详情处更换配色方案)。</li>
<li>统一布局及设计语言。</li>
<li>优化工单申请布局，采用卡片布局并支持全文搜索。</li>
<li>全新设计的审核/查询详情页。</li>
</ol>
<p><strong>审核引擎</strong></p>
<ol>
<li>全新重构的审核引擎。新增hit cache 大幅提高批量SQL审核的执行效率。</li>
<li>优化相关代码减少重复逻辑。</li>
<li>支持gh/osc等脚本执行</li>
<li>支持SQL语句上下文关联审核</li>
<li>升级AST语法树为最新版本</li>
</ol>
<p><strong>查询</strong></p>
<ol>
<li>全新的查询界面,支持快捷键调出剪贴板，支持库/表搜索</li>
<li>右键表名可直接查询表数据</li>
<li>编辑框支持选中执行,支持多条同时执行,支持快捷键执行</li>
<li>导出文件格式更改为xls</li>
<li>查询连接改用websocket(再也不存在SQL执行时间大于http超时时间从而永远查不出来的尴尬)</li>
<li>查询数据采用msgpack格式大幅压缩数据大小</li>
<li>查询表格支持resize功能可进行宽度拖拽</li>
<li>自动联想关联至字段级别</li>
<li>大幅优化脱敏查询性能</li>
<li>优化查询工单超过查询时限后状态未及时更新的问题
12.优化脱敏逻辑，基于数据源而不是基于全局</li>
<li>新增查询历史记录,可一键复制当前查询期内之前执行的SQL语句</li>
</ol>
<p><strong>审核</strong></p>
<ol>
<li>用户不再需要选择上级审核人,由系统直接发送给流程节点的审核人，如该节点存在多个审核人则该节点的审核人均拥有审核权利但只能有一位审核人进行状态变更</li>
<li>增加工单提交页面退出/刷新 确认提醒</li>
<li>SQL工单新增评论功能</li>
<li>OSC进度不再以百分比显示,而是显示全部执行信息,方便排错</li>
</ol>
<p><strong>其他</strong></p>
<ol>
<li>优化排除数据库逻辑，基于数据源而不是基于全局</li>
<li>优化流程，实现与环境分离,流程可绑定在1个或多个数据源中</li>
<li>优化定时执行，等待时间超过mysql最大连接超时时间，在真正执行前才初始化</li>
<li>新增用户水印功能</li>
<li>新增数据源负责人,该负责人将会作为查询审核人</li>
<li>新增LDAP测试用户选项，优化LDAP测试结果逻辑</li>
<li>新增LDAP用户属性映射功能,可将LDAP对应的字段数据映射进Yearning指定的用户字段中。实现LDAP用户登录后自动更新真实姓名,部门,邮箱等用户信息</li>
<li>新增debounce防抖机制,优化工单提交,检测,登录动作，避免快速点击时多次提交的问题</li>
</ol>
<h4 id="_2-3-5版本更新至3-0" tabindex="-1"><a class="header-anchor" href="#_2-3-5版本更新至3-0"><span>2.3.5版本更新至3.0</span></a></h4>
<p><strong>当前RC版本仅支持2.3.5版本更新迁移</strong></p>
<p>1.备份原Yearning数据库</p>
<p>2.执行Yearning目录下 <strong>migrate</strong> 二进制文件。请注意 必须在<strong>Yearning</strong>启动之前执行！！</p>
<p>3.正常启动Yearning</p>
<p><strong>由于流程,排除数据库,脱敏逻辑更改为基于数据源，请在更新后在数据源处修改配置</strong></p>
<h2 id="_2022-05-27-yearning-3-0-0-rc13" tabindex="-1"><a class="header-anchor" href="#_2022-05-27-yearning-3-0-0-rc13"><span>2022-05-27 Yearning 3.0.0-RC13</span></a></h2>
<ul>
<li>修复高并发下SQL回滚panic的问题</li>
<li>修复迁移工具导致用户权限组为空时用户权限异常的问题</li>
<li>修复秘钥不正确导致的报错问题</li>
<li>修复审核及工单检测时编辑器可以选中语句测试的问题</li>
<li>审核页面添加刷新按钮</li>
<li>修复工单提交form校验错误的问题</li>
<li>优化card-header 样式</li>
</ul>
<h2 id="_2022-05-20-yearning-3-0-0-rc12" tabindex="-1"><a class="header-anchor" href="#_2022-05-20-yearning-3-0-0-rc12"><span>2022-05-20 Yearning 3.0.0-RC12</span></a></h2>
<ul>
<li>修复启动参数命令提示错误的问题 ( —config 提示为-config)</li>
<li>修复登录页用户注册弹出框不会在注册后关闭的问题</li>
<li>修复ddl语句默认值空字符串，不能通过校验检查</li>
<li>修复varchar类型字段长度检测基于字节长度的问题</li>
<li>修复DML/DDL 影响行数，不生效的问题</li>
<li>修复SQL语句在不经检测依然可以审核同意的问题</li>
<li>修复SQL检测后更改数据提交按钮没有禁用的问题</li>
<li>修复查询空闲等待时间过长导致连接异常中断的问题</li>
</ul>
<h2 id="_2022-05-11-yearning-3-0-0-rc11" tabindex="-1"><a class="header-anchor" href="#_2022-05-11-yearning-3-0-0-rc11"><span>2022-05-11 Yearning 3.0.0-RC11</span></a></h2>
<ul>
<li>优化普通主题显示效果</li>
<li>修复建表必须拥有字段审核规则异常的问题</li>
<li>修复退出后仍可通过后退操作进入系统的问题</li>
<li>修复迁移工具panic问题</li>
</ul>
<h2 id="_2022-05-09-yearning-3-0-0-rc10" tabindex="-1"><a class="header-anchor" href="#_2022-05-09-yearning-3-0-0-rc10"><span>2022-05-09 Yearning 3.0.0-RC10</span></a></h2>
<ul>
<li>新增DDL审核alter语句merge功能</li>
<li>新增工单申请处选择框搜索功能</li>
<li>新增主题更换功能 -&gt;  顶部Header右侧 个人设置中</li>
<li>修复查询工单被审核人提前结束后，使用者无法返回查询入口的问题</li>
</ul>
<h2 id="_2022-05-07-yearning-3-0-0-rc9" tabindex="-1"><a class="header-anchor" href="#_2022-05-07-yearning-3-0-0-rc9"><span>2022-05-07 Yearning 3.0.0-RC9</span></a></h2>
<ul>
<li>修复SQL美化后多出空格导致执行失败的问题</li>
<li>优化相关按钮文案</li>
<li>修复重新提交及回滚语句提交按钮显示异常的问题</li>
<li>数据源测试连接新增loading</li>
</ul>
<h2 id="_2022-05-06-yearning-3-0-0-rc8" tabindex="-1"><a class="header-anchor" href="#_2022-05-06-yearning-3-0-0-rc8"><span>2022-05-06 Yearning 3.0.0-RC8</span></a></h2>
<ul>
<li>修复删除数据源文案提示错误</li>
<li>新增工单同意确认提示框</li>
<li>修复工单中SQL语句为空点击执行导致程序崩溃的问题</li>
<li>修复迁移脚本未对查询数据源数据处理的问题</li>
<li>新增LDAP测试用户选项，优化LDAP测试结果逻辑</li>
<li>新增LDAP用户属性映射功能,可将LDAP对应的字段数据映射进Yearning指定的用户字段中。实现LDAP用户登录后自动更新真实姓名,部门,邮箱等用户信息</li>
<li>新增查询历史记录,可一键复制当前查询期内之前执行的SQL语句</li>
<li>新增数据源负责人,该负责人将会作为查询审核人</li>
<li>更换登录背景视频,防止眩晕</li>
<li>新增debounce防抖机制,优化工单提交,检测,登录动作，避免快速点击时多次提交的问题</li>
</ul>
<p>Yearning采用自动表结构同步 无需手动更新表结构。只需<strong>停止原服务并替换安装包后重新启动</strong>即可</p>
<blockquote>
<p>在一些特殊的升级情况中(破坏性变更)需要手动进行数据同步操作.如在版本更新公告中并无提示破坏性升级则无视以下命令!</p>
</blockquote>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> migrate</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<h4 id="_2-3-5版本更新至3-0-0" tabindex="-1"><a class="header-anchor" href="#_2-3-5版本更新至3-0-0"><span>2.3.5版本更新至3.0.0</span></a></h4>
<p><strong>当前RC版本仅支持2.3.5版本更新迁移</strong></p>
<p>1.备份原Yearning数据库</p>
<p>2.执行Yearning目录下 <strong>./migrate</strong> 二进制文件。请注意 必须在<strong>Yearning</strong>启动之前执行！！</p>
<p>3.正常启动Yearning</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>由于在一些新版本中会增加一些新的变更，请在更新后关闭Yearning页面重新登录后进行使用。
由于流程,排除数据库,脱敏逻辑更改为基于数据源，请在更新后在数据源处修改配置。</p>
</div>
</div></template>



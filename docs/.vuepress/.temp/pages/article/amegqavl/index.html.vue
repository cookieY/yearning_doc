<template><div><h3 id="_2024-11-01-yearning-3-1-9" tabindex="-1"><a class="header-anchor" href="#_2024-11-01-yearning-3-1-9"><span>2024-11-01 Yearning 3.1.9</span></a></h3>
<ul>
<li>Improved the stream message format for the AI assistant.</li>
<li>Fixed the issue where the list did not refresh when creating a data source.</li>
<li>Resolved the problem of precision loss with bigint data type (#1104).</li>
<li>Fixed the issue where executing SQL did not support SSL connections (#1120).</li>
<li>Added DMLWhereExprValueIsNull audit parameter: Checks if the where condition value in DML statements is null.</li>
<li>Introduced a new audit button (#1032).</li>
</ul>
<h3 id="_2024-07-27-yearning-3-1-8" tabindex="-1"><a class="header-anchor" href="#_2024-07-27-yearning-3-1-8"><span>2024-07-27 Yearning 3.1.8</span></a></h3>
<ul>
<li>Implemented audit button debounce to fix abnormal data issues caused by multiple clicks.</li>
<li>Added smart assistant functionality.</li>
<li>Introduced SQL statement AI optimization and AI text-generated SQL functions.</li>
<li>Enabled viewing of table structures in the query menu (#1057).</li>
<li>Added MFA authentication (sponsored version).</li>
<li>Fixed the problem where datetime field type detection might occasionally display errors (#1039).</li>
<li>Resolved the issue where query audits could be submitted multiple times (#1024).</li>
<li>Fixed the abnormal display of default audit person restrictions (#991).</li>
<li>Updated dependencies and resolved security vulnerabilities.</li>
<li>Updated Docker file image to fix issues with changing language settings via environment variables.</li>
</ul>
<h3 id="_2024-01-02-yearning-3-1-7" tabindex="-1"><a class="header-anchor" href="#_2024-01-02-yearning-3-1-7"><span>2024-01-02 Yearning 3.1.7</span></a></h3>
<ul>
<li>Fixed the error that occurred when the process status was abnormal after a flow change, causing information to not display.</li>
<li>Added new search conditions for termination, cancellation, and pending execution in order search.</li>
</ul>
<h3 id="_2023-09-08-yearning-3-1-6-3" tabindex="-1"><a class="header-anchor" href="#_2023-09-08-yearning-3-1-6-3"><span>2023-09-08 Yearning 3.1.6.3</span></a></h3>
<ul>
<li>Fix: Closed #901 by resolving the issue where querying a non-existent table name or executing a DML caused the query page to freeze.</li>
<li>Various optimizations.</li>
</ul>
<h3 id="_2023-08-10-yearning-3-1-6-2" tabindex="-1"><a class="header-anchor" href="#_2023-08-10-yearning-3-1-6-2"><span>2023-08-10 Yearning 3.1.6.2</span></a></h3>
<ul>
<li>Feature: Closed #832, allowing for custom audit rules on a per data source basis.</li>
<li>Feature: Multi-language support; specify front and back-end languages via config.toml, supporting Chinese/English.</li>
<li>Fix: Closed #848, resolving the issue where the loading indicator was not shown during query waits.</li>
<li>Optimization: Closed #840, improved daily order number display issues on the homepage.</li>
<li>Optimization: Closed #790, added data source column display on the order audit page.</li>
<li>Optimization: Closed #703, supported changing execution time/immediate execution/termination of scheduled tasks.</li>
<li>Optimization: Changed the order list sorting rule to be based on audit status and chronological order.</li>
<li>Optimization: Supported transaction mode execution for DML data; activate this option in the audit rules by searching for DMLTransaction.</li>
<li>Optimization: Closed #795, query keyword reminders (table names, field names) are restricted to the current database. When a database is selected, its table and field names are obtained.</li>
<li>Optimization: Query results now support copying cell content upon click.</li>
<li>Optimization: Specified domain address changes are now made through the settings page instead of via the -s flag; DingTalk card supports URL jumps.</li>
<li>Various other optimizations.</li>
</ul>
<h3 id="_2023-07-04-yearning-3-1-5" tabindex="-1"><a class="header-anchor" href="#_2023-07-04-yearning-3-1-5"><span>2023-07-04 Yearning 3.1.5</span></a></h3>
<ul>
<li>Optimized layout on the audit detail page.</li>
<li>Improved layout of audit buttons #829 #825 #802.</li>
<li>Fixed exceptions in audit query time range condition formatting.</li>
<li>Resolved errors when adding datetime fields with default values of 0000-00-00 00:00:00 #823.</li>
<li>Corrected the issue where queries could still be audited after the person responsible had been changed.</li>
</ul>
<h3 id="_2023-04-24-yearning-3-1-4" tabindex="-1"><a class="header-anchor" href="#_2023-04-24-yearning-3-1-4"><span>2023-04-24 Yearning 3.1.4</span></a></h3>
<ul>
<li>Transitioned from polling to WebSocket for real-time data retrieval in orders/query lists.</li>
<li>Order/query details are displayed using a card drawer style.</li>
<li>Fixed the issue where executing query statements with too many columns in Google Chrome would cause the browser to enlarge excessively #789.</li>
<li>Added ARMv64 support.</li>
</ul>
<h3 id="_2023-03-09-yearning-3-1-3" tabindex="-1"><a class="header-anchor" href="#_2023-03-09-yearning-3-1-3"><span>2023-03-09 Yearning 3.1.3</span></a></h3>
<ul>
<li>Resolved issues with gh-ost execution.</li>
<li>Fixed order list refresh anomalies.</li>
<li>Addressed the problem where execution information could not be displayed when DML statements were executed without backup.</li>
</ul>
<h3 id="_2023-02-10-yearning-3-1-2-2" tabindex="-1"><a class="header-anchor" href="#_2023-02-10-yearning-3-1-2-2"><span>2023-02-10 Yearning 3.1.2.2</span></a></h3>
<ul>
<li>Fixed the Firefox browser header style blocking issue #637.</li>
<li>Resolved insert statement audit anomalies #760 #759 #755.</li>
</ul>
<h3 id="_2023-02-01-yearning-3-1-2-1" tabindex="-1"><a class="header-anchor" href="#_2023-02-01-yearning-3-1-2-1"><span>2023-02-01 Yearning 3.1.2.1</span></a></h3>
<ul>
<li>Corrected the order anomaly issue post-query audit order submission.</li>
<li>Resolved the problem where the bulletin board data could not be saved.</li>
<li>Fixed the display error in password creation validation documentation.</li>
<li>Addressed enumeration audit anomalies.</li>
<li>Rectified syntax detection issues when the default value of timestamp fields is a string.</li>
<li>Resolved audit anomalies in insert into statements where column and value list numbers do not match.</li>
<li>Added support for drop table if exists statements.</li>
<li>Supported SSL connection for data sources.</li>
</ul>
<h3 id="_2022-11-14-yearning-3-1-1-1" tabindex="-1"><a class="header-anchor" href="#_2022-11-14-yearning-3-1-1-1"><span>2022-11-14 Yearning 3.1.1.1</span></a></h3>
<ul>
<li>Resolved the issue where rollback statements executed in ascending order, causing dependency errors (changed to descending order).</li>
<li>Adjusted debounce logic to prevent duplicate submissions.</li>
<li>Fixed the issue where querying with an order time didn't work.</li>
<li>Corrected anomalies in rollback statements when changing table character sets.</li>
<li>Fixed the problem allowing submission of empty SQL statements.</li>
<li>Implemented front-end caching for list pages.</li>
<li>Resolved audit anomalies with enumerations.</li>
<li>Fixed the issue where execution time was not displayed.</li>
<li>Corrected errors in creating separate index statements for table rollback statements.</li>
<li>Fixed the admin authorization statement error during installation initialization.</li>
</ul>
<h3 id="_2022-09-15-yearning-3-1-0" tabindex="-1"><a class="header-anchor" href="#_2022-09-15-yearning-3-1-0"><span>2022-09-15 Yearning 3.1.0</span></a></h3>
<ul>
<li>Resolved the issue of SQL connections not being released after detection/execution.</li>
<li>Fixed the issue where auditors couldn't perform audits without data source permissions.</li>
</ul>
<h3 id="_2022-09-01-yearning-3-0-9" tabindex="-1"><a class="header-anchor" href="#_2022-09-01-yearning-3-0-9"><span>2022-09-01 Yearning 3.0.9</span></a></h3>
<ul>
<li>Optimized the audit list to prevent freezing with large batches of SQL.</li>
<li>Enhanced the layout for the white theme.</li>
<li>Corrected email sending issues for SSL non-465 ports.</li>
</ul>
<h3 id="_2022-08-18-yearning-3-0-8" tabindex="-1"><a class="header-anchor" href="#_2022-08-18-yearning-3-0-8"><span>2022-08-18 Yearning 3.0.8</span></a></h3>
<ul>
<li>Added i18n English support (currently for front-end content only).</li>
<li>Fixed the narrative and title errors in push notifications (affecting versions &gt;= 3.0.5).</li>
<li>Resolved issues with switching databases when special symbols are included in the database name during queries (#661).</li>
<li>Enhanced migration script experience (for migrations from version 2.3.5 to 3.x).</li>
</ul>
<h3 id="_2022-08-18-yearning-3-0-7" tabindex="-1"><a class="header-anchor" href="#_2022-08-18-yearning-3-0-7"><span>2022-08-18 Yearning 3.0.7</span></a></h3>
<ul>
<li>Resolved issues with test message not sending.</li>
<li>Fixed console errors in order time field queries.</li>
<li>Addressed issues of duplicate order submissions.</li>
<li>Corrected disordered column sequences in exported XLS queries.</li>
<li>Improved the visualization of query results.</li>
<li>Enhanced style for order detail progress information.</li>
<li>Improved container deployment with custom secret key support.</li>
<li>Optimized OIDC login logic.</li>
</ul>
<h3 id="_2022-08-11-yearning-3-0-6" tabindex="-1"><a class="header-anchor" href="#_2022-08-11-yearning-3-0-6"><span>2022-08-11 Yearning 3.0.6</span></a></h3>
<ul>
<li>Enhanced WebSocket query reconnection logic.</li>
<li>Fixed tab display anomalies in query results.</li>
<li>Solved message format issues in version 3.0.5.</li>
<li>Resolved issues with certain query formats causing sensitive data exposure.</li>
</ul>
<h3 id="_2022-08-06-yearning-3-0-5" tabindex="-1"><a class="header-anchor" href="#_2022-08-06-yearning-3-0-5"><span>2022-08-06 Yearning 3.0.5</span></a></h3>
<ul>
<li>Fixed freezing issues when more than 10 DDL statements were submitted.</li>
<li>Resolved length error issues when checking enum types.</li>
<li>Addressed security issues in order/query during testing/query operations.</li>
<li>Introduced query abbreviation display.</li>
<li>Optimized query logic for increased connection utilization efficiency.</li>
<li>Fixed repeated prompts in multi-window auto-suggestion scenarios.</li>
</ul>
<h3 id="_2022-07-23-yearning-3-0-4" tabindex="-1"><a class="header-anchor" href="#_2022-07-23-yearning-3-0-4"><span>2022-07-23 Yearning 3.0.4</span></a></h3>
<ul>
<li>Fixed issues preventing order revoking.</li>
<li>Corrected homepage narrative errors.</li>
<li>Resolved anomalies in order application searches.</li>
<li>Fixed execution failure document anomalies.</li>
<li>Addressed issues preventing rollback statement generation for orders.</li>
<li>Corrected initialization issues with missing table structures.</li>
</ul>
<h3 id="_2022-07-19-yearning-3-0-3" tabindex="-1"><a class="header-anchor" href="#_2022-07-19-yearning-3-0-3"><span>2022-07-19 Yearning 3.0.3</span></a></h3>
<ul>
<li>Resolved issues with unusable data clearance.</li>
<li>Fixed insufficient field length preventing order submission.</li>
<li>Addressed browser SessionStorage quota exceedance issues due to large query suggestions.</li>
<li>Fixed issues allowing submission of rollback statements even when empty.</li>
<li>Resolved AUTO_INCREMENT DDL audit errors.</li>
<li>Solved user addition issues.</li>
<li>Fixed database name expansion issues when switching data sources with identical names.</li>
<li>Corrected keyword check anomalies.</li>
<li>Resolved panic anomalies in Docker installations (#610).</li>
<li>Fixed issues with inserting millisecond-accurate datetime(3) values (#616).</li>
<li>Resolved issues preventing the dropping of composite indexes in SQL checks; PK AUTOINCREMENT columns must not be deleted (#612).</li>
<li>Added support for DRDS 2.0.</li>
<li>Included order description display in audit details.</li>
<li>Added detection/beautification button prompts.</li>
<li>Upgraded gorm to version v2.</li>
<li>Optimized code organization and upgraded to Go 1.18 for the development environment.</li>
</ul>
<h3 id="_2022-06-20-yearning-3-0-1" tabindex="-1"><a class="header-anchor" href="#_2022-06-20-yearning-3-0-1"><span>2022-06-20 Yearning 3.0.1</span></a></h3>
<ul>
<li>Added functionality for users to revoke orders.</li>
<li>Enabled switching of query data sources.</li>
<li>Implemented session end function for users in queries.</li>
<li>Optimized query audit logic; orders requiring query audits cannot switch data sources.</li>
<li>Fixed issues preventing modification of data source names.</li>
<li>Enhanced data source query logic.</li>
<li>Introduced DDLAllowMultiAlter audit rule, enabling multiple alter statements in a single DDL order.</li>
<li>Fixed issues where editing a process replaced old processes when creating a new one.</li>
</ul>
<h3 id="_2022-06-02-yearning-3-0-0-ga" tabindex="-1"><a class="header-anchor" href="#_2022-06-02-yearning-3-0-0-ga"><span>2022-06-02 Yearning 3.0.0-GA</span></a></h3>
<p><strong>Design</strong></p>
<ol>
<li>Redesigned the front-end interface using vite+vue3.2 development model. The default theme is dark, with an option for theme switching, which can be changed in personal settings.</li>
<li>Unified layout and design language.</li>
<li>Optimized order application layout to use a card style with full-text search support.</li>
<li>Completely redesigned audit/query details page.</li>
</ol>
<p><strong>Review Engine</strong></p>
<ol>
<li>Completely restructured review engine with added hit cache, significantly improving performance in auditing batch SQLs.</li>
<li>Optimized related code to reduce redundant logic.</li>
<li>Supports execution of gh/osc scripts.</li>
<li>Supports context-aware audits for SQL statements.</li>
<li>Upgraded AST syntax tree to the latest version.</li>
</ol>
<p><strong>Query</strong></p>
<ol>
<li>A brand-new query interface, supporting shortcuts for clipboard access and database/table searches.</li>
<li>Allows querying table data by right-clicking on the table name.</li>
<li>The editor supports running selected or multiple queries simultaneously and via shortcuts.</li>
<li>Changed export file format to XLS.</li>
<li>Converted query connections to WebSocket, eliminating timeouts during prolonged SQL execution.</li>
<li>Compressed query data using msgpack format to significantly reduce size.</li>
<li>The query table supports resizing and width adjustments via drag-and-drop.</li>
<li>Auto-suggestions now associate to the field level.</li>
<li>Drastically improved performance for desensitized queries.</li>
<li>Fixed the issue where query state did not update in time if query duration exceeded limits.</li>
<li>Optimized desensitization logic to be data source-based rather than global.</li>
<li>Added query history records, allowing one-click copy of SQL statements executed during the current query session.</li>
</ol>
<p><strong>Audit</strong></p>
<ol>
<li>Users no longer need to choose a superior auditor; the system automatically sends it to the flow node's auditor. If multiple auditors exist, they all have audit rights, but only one can change the state.</li>
<li>Added exit/refresh confirmation prompts on the order submission page.</li>
<li>Introduced a comment function for SQL orders.</li>
<li>OSC progress now displays complete execution information instead of just a percentage, making troubleshooting easier.</li>
</ol>
<p><strong>Others</strong></p>
<ol>
<li>Optimized exclusion of databases to be based on data sources instead of global.</li>
<li>Decoupled processes from environments; processes can bind to one or more data sources.</li>
<li>Optimized scheduled execution to ensure that initialization only occurs before actual execution when wait time exceeds MySQL's max connection timeout.</li>
<li>Added a user watermark feature.</li>
<li>Introduced a data source leader, who will also serve as the query auditor.</li>
<li>Added an LDAP test user option, optimizing LDAP test results logic.</li>
<li>Added LDAP user attribute mapping, enabling mapped fields from LDAP into specified Yearning user fields. This allows automatic updating of real name, department, and email upon LDAP user login.</li>
<li>Added a debounce mechanism to optimize order submission, checking, and login actions to prevent multiple submissions from rapid clicks.</li>
</ol>
<h4 id="update-from-version-2-3-5-to-3-0" tabindex="-1"><a class="header-anchor" href="#update-from-version-2-3-5-to-3-0"><span>Update from Version 2.3.5 to 3.0</span></a></h4>
<p><strong>Current RC version only supports updates from 2.3.5</strong></p>
<ol>
<li>Backup the original Yearning database.</li>
<li>Execute the <strong>migrate</strong> binary file in the Yearning directory. Ensure this is done <strong>before</strong> starting Yearning!</li>
<li>Start Yearning normally.</li>
</ol>
<p><strong>Since the process, database exclusion, and desensitization logic have changed to be data source-based, please modify the configuration at the data source post-update.</strong></p>
<h3 id="_2022-05-27-yearning-3-0-0-rc13" tabindex="-1"><a class="header-anchor" href="#_2022-05-27-yearning-3-0-0-rc13"><span>2022-05-27 Yearning 3.0.0-RC13</span></a></h3>
<ul>
<li>Fixed SQL rollback panic under high concurrency.</li>
<li>Addressed migration tool issues causing user permission exceptions when user groups are empty.</li>
<li>Fixed errors resulting from incorrect secret keys.</li>
<li>Resolved issues where the editor allowed selection of statements for testing during audit and order detection.</li>
<li>Added refresh button to the audit page.</li>
<li>Fixed form validation errors during order submissions.</li>
<li>Optimized card-header style.</li>
</ul>
<h3 id="_2022-05-20-yearning-3-0-0-rc12" tabindex="-1"><a class="header-anchor" href="#_2022-05-20-yearning-3-0-0-rc12"><span>2022-05-20 Yearning 3.0.0-RC12</span></a></h3>
<ul>
<li>Corrected command prompt errors in startup parameters (—config corrected to -config).</li>
<li>Fixed issue where the registration popup on login would not close post-registration.</li>
<li>Fixed validation checks for DDL statements with empty string defaults.</li>
<li>Resolved issues with varchar type field length checks based on byte length.</li>
<li>Fixed problems where DML/DDL affect row count was not effective.</li>
<li>Resolved issue of agreeing to audit SQL statements without prior checks.</li>
<li>Addressed issues where data submission buttons were not disabled after SQL checks.</li>
<li>Fixed connection interruption due to prolonged idle wait times.</li>
</ul>
<h3 id="_2022-05-11-yearning-3-0-0-rc11" tabindex="-1"><a class="header-anchor" href="#_2022-05-11-yearning-3-0-0-rc11"><span>2022-05-11 Yearning 3.0.0-RC11</span></a></h3>
<ul>
<li>Enhanced the display of the normal theme.</li>
<li>Resolved anomalies in audit rules requiring table creation with fields.</li>
<li>Fixed issue allowing system re-entry through back operation after logout.</li>
<li>Resolved panic issues with the migration tool.</li>
</ul>
<h3 id="_2022-05-09-yearning-3-0-0-rc10" tabindex="-1"><a class="header-anchor" href="#_2022-05-09-yearning-3-0-0-rc10"><span>2022-05-09 Yearning 3.0.0-RC10</span></a></h3>
<ul>
<li>Added merge function for DDL audit alter statements.</li>
<li>Introduced search function in order application selection box.</li>
<li>Added theme change feature under Personal Settings in the top header.</li>
<li>Fixed issue preventing users from returning to the query portal if a query order was ended early by the auditor.</li>
</ul>
<h3 id="_2022-05-07-yearning-3-0-0-rc9" tabindex="-1"><a class="header-anchor" href="#_2022-05-07-yearning-3-0-0-rc9"><span>2022-05-07 Yearning 3.0.0-RC9</span></a></h3>
<ul>
<li>Fixed failures caused by added spaces post-SQL beautification.</li>
<li>Optimized related button text.</li>
<li>Corrected display anomalies in resubmission and rollback statement submission buttons.</li>
<li>Added loading indicator for data source test connections.</li>
</ul>
<h2 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log"><span>Change Log</span></a></h2>
<h3 id="_2022-05-06-yearning-3-0-0-rc8" tabindex="-1"><a class="header-anchor" href="#_2022-05-06-yearning-3-0-0-rc8"><span>2022-05-06 Yearning 3.0.0-RC8</span></a></h3>
<ul>
<li>Fixed incorrect text prompts when deleting a data source.</li>
<li>Added a confirmation prompt box for order approval.</li>
<li>Resolved the issue where executing an empty SQL statement in an order caused a program crash.</li>
<li>Fixed issues in the migration script that did not process query data source information.</li>
<li>Introduced LDAP test user option, improving LDAP test result feedback.</li>
<li>Added LDAP user attribute mapping, enabling LDAP fields to be mapped into Yearning user fields. This allows LDAP users to log in and automatically update their real names, departments, and emails.</li>
<li>Added query history feature, allowing users to copy previously executed SQL statements within the current session.</li>
<li>Added a role for data source leaders, who will act as query auditors.</li>
<li>Changed login background video to prevent dizziness.</li>
<li>Introduced a debounce mechanism to optimize order submission, checking, and login actions, preventing multiple submissions from rapid clicks.</li>
</ul>
<p>Yearning uses automatic table structure synchronization, so no manual updates are required. Simply <strong>stop the existing service, replace the installation package, and then restart</strong> to apply updates.</p>
<blockquote>
<p>In some specific upgrade situations (destructive changes), manual data synchronization is necessary. If the version update announcement doesn't mention destructive upgrades, you can ignore the following command:</p>
</blockquote>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> migrate</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<h4 id="upgrading-from-version-2-3-5-to-3-0-0" tabindex="-1"><a class="header-anchor" href="#upgrading-from-version-2-3-5-to-3-0-0"><span>Upgrading from Version 2.3.5 to 3.0.0</span></a></h4>
<p><strong>Current RC version supports migration only from version 2.3.5</strong></p>
<ol>
<li>
<p>Backup the original Yearning database.</p>
</li>
<li>
<p>Execute the <strong>./migrate</strong> binary file in the Yearning directory. Ensure this is done <strong>before</strong> starting Yearning!</p>
</li>
<li>
<p>Start Yearning normally.</p>
</li>
</ol>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>In some new versions, there may be additional changes. Please close and reopen the Yearning page to log in again after the update.
Since processes, exclusion of databases, and desensitization logic have changed to be data source-based, modify configurations in the data sources after updating.</p>
</div>
</div></template>



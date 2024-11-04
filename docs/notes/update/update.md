---
title: Change Logs
createTime: 2024/11/04 16:20:19
permalink: /article/amegqavl/
---
### 2024-11-01 Yearning 3.1.9
- Improved the stream message format for the AI assistant.
- Fixed the issue where the list did not refresh when creating a data source.
- Resolved the problem of precision loss with bigint data type (#1104).
- Fixed the issue where executing SQL did not support SSL connections (#1120).
- Added DMLWhereExprValueIsNull audit parameter: Checks if the where condition value in DML statements is null.
- Introduced a new audit button (#1032).

### 2024-07-27 Yearning 3.1.8
- Implemented audit button debounce to fix abnormal data issues caused by multiple clicks.
- Added smart assistant functionality.
- Introduced SQL statement AI optimization and AI text-generated SQL functions.
- Enabled viewing of table structures in the query menu (#1057).
- Added MFA authentication (sponsored version).
- Fixed the problem where datetime field type detection might occasionally display errors (#1039).
- Resolved the issue where query audits could be submitted multiple times (#1024).
- Fixed the abnormal display of default audit person restrictions (#991).
- Updated dependencies and resolved security vulnerabilities.
- Updated Docker file image to fix issues with changing language settings via environment variables.

### 2024-01-02 Yearning 3.1.7
- Fixed the error that occurred when the process status was abnormal after a flow change, causing information to not display.
- Added new search conditions for termination, cancellation, and pending execution in order search.

### 2023-09-08 Yearning 3.1.6.3
- Fix: Closed #901 by resolving the issue where querying a non-existent table name or executing a DML caused the query page to freeze.
- Various optimizations.

### 2023-08-10 Yearning 3.1.6.2
- Feature: Closed #832, allowing for custom audit rules on a per data source basis.
- Feature: Multi-language support; specify front and back-end languages via config.toml, supporting Chinese/English.
- Fix: Closed #848, resolving the issue where the loading indicator was not shown during query waits.
- Optimization: Closed #840, improved daily order number display issues on the homepage.
- Optimization: Closed #790, added data source column display on the order audit page.
- Optimization: Closed #703, supported changing execution time/immediate execution/termination of scheduled tasks.
- Optimization: Changed the order list sorting rule to be based on audit status and chronological order.
- Optimization: Supported transaction mode execution for DML data; activate this option in the audit rules by searching for DMLTransaction.
- Optimization: Closed #795, query keyword reminders (table names, field names) are restricted to the current database. When a database is selected, its table and field names are obtained.
- Optimization: Query results now support copying cell content upon click.
- Optimization: Specified domain address changes are now made through the settings page instead of via the -s flag; DingTalk card supports URL jumps.
- Various other optimizations.

### 2023-07-04 Yearning 3.1.5
- Optimized layout on the audit detail page.
- Improved layout of audit buttons #829 #825 #802.
- Fixed exceptions in audit query time range condition formatting.
- Resolved errors when adding datetime fields with default values of 0000-00-00 00:00:00 #823.
- Corrected the issue where queries could still be audited after the person responsible had been changed.

### 2023-04-24 Yearning 3.1.4
- Transitioned from polling to WebSocket for real-time data retrieval in orders/query lists.
- Order/query details are displayed using a card drawer style.
- Fixed the issue where executing query statements with too many columns in Google Chrome would cause the browser to enlarge excessively #789.
- Added ARMv64 support.

### 2023-03-09 Yearning 3.1.3
- Resolved issues with gh-ost execution.
- Fixed order list refresh anomalies.
- Addressed the problem where execution information could not be displayed when DML statements were executed without backup.

### 2023-02-10 Yearning 3.1.2.2
- Fixed the Firefox browser header style blocking issue #637.
- Resolved insert statement audit anomalies #760 #759 #755.

### 2023-02-01 Yearning 3.1.2.1
- Corrected the order anomaly issue post-query audit order submission.
- Resolved the problem where the bulletin board data could not be saved.
- Fixed the display error in password creation validation documentation.
- Addressed enumeration audit anomalies.
- Rectified syntax detection issues when the default value of timestamp fields is a string.
- Resolved audit anomalies in insert into statements where column and value list numbers do not match.
- Added support for drop table if exists statements.
- Supported SSL connection for data sources.

### 2022-11-14 Yearning 3.1.1.1
- Resolved the issue where rollback statements executed in ascending order, causing dependency errors (changed to descending order).
- Adjusted debounce logic to prevent duplicate submissions.
- Fixed the issue where querying with an order time didn't work.
- Corrected anomalies in rollback statements when changing table character sets.
- Fixed the problem allowing submission of empty SQL statements.
- Implemented front-end caching for list pages.
- Resolved audit anomalies with enumerations.
- Fixed the issue where execution time was not displayed.
- Corrected errors in creating separate index statements for table rollback statements.
- Fixed the admin authorization statement error during installation initialization.

### 2022-09-15 Yearning 3.1.0
- Resolved the issue of SQL connections not being released after detection/execution.
- Fixed the issue where auditors couldn't perform audits without data source permissions.

### 2022-09-01 Yearning 3.0.9
- Optimized the audit list to prevent freezing with large batches of SQL.
- Enhanced the layout for the white theme.
- Corrected email sending issues for SSL non-465 ports.

### 2022-08-18 Yearning 3.0.8
- Added i18n English support (currently for front-end content only).
- Fixed the narrative and title errors in push notifications (affecting versions >= 3.0.5).
- Resolved issues with switching databases when special symbols are included in the database name during queries (#661).
- Enhanced migration script experience (for migrations from version 2.3.5 to 3.x).

### 2022-08-18 Yearning 3.0.7
- Resolved issues with test message not sending.
- Fixed console errors in order time field queries.
- Addressed issues of duplicate order submissions.
- Corrected disordered column sequences in exported XLS queries.
- Improved the visualization of query results.
- Enhanced style for order detail progress information.
- Improved container deployment with custom secret key support.
- Optimized OIDC login logic.

### 2022-08-11 Yearning 3.0.6
- Enhanced WebSocket query reconnection logic.
- Fixed tab display anomalies in query results.
- Solved message format issues in version 3.0.5.
- Resolved issues with certain query formats causing sensitive data exposure.

### 2022-08-06 Yearning 3.0.5
- Fixed freezing issues when more than 10 DDL statements were submitted.
- Resolved length error issues when checking enum types.
- Addressed security issues in order/query during testing/query operations.
- Introduced query abbreviation display.
- Optimized query logic for increased connection utilization efficiency.
- Fixed repeated prompts in multi-window auto-suggestion scenarios.

### 2022-07-23 Yearning 3.0.4
- Fixed issues preventing order revoking.
- Corrected homepage narrative errors.
- Resolved anomalies in order application searches.
- Fixed execution failure document anomalies.
- Addressed issues preventing rollback statement generation for orders.
- Corrected initialization issues with missing table structures.

### 2022-07-19 Yearning 3.0.3
- Resolved issues with unusable data clearance.
- Fixed insufficient field length preventing order submission.
- Addressed browser SessionStorage quota exceedance issues due to large query suggestions.
- Fixed issues allowing submission of rollback statements even when empty.
- Resolved AUTO_INCREMENT DDL audit errors.
- Solved user addition issues.
- Fixed database name expansion issues when switching data sources with identical names.
- Corrected keyword check anomalies.
- Resolved panic anomalies in Docker installations (#610).
- Fixed issues with inserting millisecond-accurate datetime(3) values (#616).
- Resolved issues preventing the dropping of composite indexes in SQL checks; PK AUTOINCREMENT columns must not be deleted (#612).
- Added support for DRDS 2.0.
- Included order description display in audit details.
- Added detection/beautification button prompts.
- Upgraded gorm to version v2.
- Optimized code organization and upgraded to Go 1.18 for the development environment.

### 2022-06-20 Yearning 3.0.1
- Added functionality for users to revoke orders.
- Enabled switching of query data sources.
- Implemented session end function for users in queries.
- Optimized query audit logic; orders requiring query audits cannot switch data sources.
- Fixed issues preventing modification of data source names.
- Enhanced data source query logic.
- Introduced DDLAllowMultiAlter audit rule, enabling multiple alter statements in a single DDL order.
- Fixed issues where editing a process replaced old processes when creating a new one. 

### 2022-06-02 Yearning 3.0.0-GA

**Design**
1. Redesigned the front-end interface using vite+vue3.2 development model. The default theme is dark, with an option for theme switching, which can be changed in personal settings.
2. Unified layout and design language.
3. Optimized order application layout to use a card style with full-text search support.
4. Completely redesigned audit/query details page.

**Review Engine**
1. Completely restructured review engine with added hit cache, significantly improving performance in auditing batch SQLs.
2. Optimized related code to reduce redundant logic.
3. Supports execution of gh/osc scripts.
4. Supports context-aware audits for SQL statements.
5. Upgraded AST syntax tree to the latest version.

**Query**
1. A brand-new query interface, supporting shortcuts for clipboard access and database/table searches.
2. Allows querying table data by right-clicking on the table name.
3. The editor supports running selected or multiple queries simultaneously and via shortcuts.
4. Changed export file format to XLS.
5. Converted query connections to WebSocket, eliminating timeouts during prolonged SQL execution.
6. Compressed query data using msgpack format to significantly reduce size.
7. The query table supports resizing and width adjustments via drag-and-drop.
8. Auto-suggestions now associate to the field level.
9. Drastically improved performance for desensitized queries.
10. Fixed the issue where query state did not update in time if query duration exceeded limits.
12. Optimized desensitization logic to be data source-based rather than global.
13. Added query history records, allowing one-click copy of SQL statements executed during the current query session.

**Audit**
1. Users no longer need to choose a superior auditor; the system automatically sends it to the flow node's auditor. If multiple auditors exist, they all have audit rights, but only one can change the state.
2. Added exit/refresh confirmation prompts on the order submission page.
3. Introduced a comment function for SQL orders.
4. OSC progress now displays complete execution information instead of just a percentage, making troubleshooting easier.

**Others**
1. Optimized exclusion of databases to be based on data sources instead of global.
2. Decoupled processes from environments; processes can bind to one or more data sources.
3. Optimized scheduled execution to ensure that initialization only occurs before actual execution when wait time exceeds MySQL's max connection timeout.
4. Added a user watermark feature.
5. Introduced a data source leader, who will also serve as the query auditor.
6. Added an LDAP test user option, optimizing LDAP test results logic.
7. Added LDAP user attribute mapping, enabling mapped fields from LDAP into specified Yearning user fields. This allows automatic updating of real name, department, and email upon LDAP user login.
8. Added a debounce mechanism to optimize order submission, checking, and login actions to prevent multiple submissions from rapid clicks.

#### Update from Version 2.3.5 to 3.0

**Current RC version only supports updates from 2.3.5**
1. Backup the original Yearning database.
2. Execute the **migrate** binary file in the Yearning directory. Ensure this is done **before** starting Yearning!
3. Start Yearning normally.

**Since the process, database exclusion, and desensitization logic have changed to be data source-based, please modify the configuration at the data source post-update.**

### 2022-05-27 Yearning 3.0.0-RC13
- Fixed SQL rollback panic under high concurrency.
- Addressed migration tool issues causing user permission exceptions when user groups are empty.
- Fixed errors resulting from incorrect secret keys.
- Resolved issues where the editor allowed selection of statements for testing during audit and order detection.
- Added refresh button to the audit page.
- Fixed form validation errors during order submissions.
- Optimized card-header style.

### 2022-05-20 Yearning 3.0.0-RC12
- Corrected command prompt errors in startup parameters (—config corrected to -config).
- Fixed issue where the registration popup on login would not close post-registration.
- Fixed validation checks for DDL statements with empty string defaults.
- Resolved issues with varchar type field length checks based on byte length.
- Fixed problems where DML/DDL affect row count was not effective.
- Resolved issue of agreeing to audit SQL statements without prior checks.
- Addressed issues where data submission buttons were not disabled after SQL checks.
- Fixed connection interruption due to prolonged idle wait times.

### 2022-05-11 Yearning 3.0.0-RC11
- Enhanced the display of the normal theme.
- Resolved anomalies in audit rules requiring table creation with fields.
- Fixed issue allowing system re-entry through back operation after logout.
- Resolved panic issues with the migration tool.

### 2022-05-09 Yearning 3.0.0-RC10
- Added merge function for DDL audit alter statements.
- Introduced search function in order application selection box.
- Added theme change feature under Personal Settings in the top header.
- Fixed issue preventing users from returning to the query portal if a query order was ended early by the auditor.

### 2022-05-07 Yearning 3.0.0-RC9
- Fixed failures caused by added spaces post-SQL beautification.
- Optimized related button text.
- Corrected display anomalies in resubmission and rollback statement submission buttons.
- Added loading indicator for data source test connections.
  
## Change Log

### 2022-05-06 Yearning 3.0.0-RC8
- Fixed incorrect text prompts when deleting a data source.
- Added a confirmation prompt box for order approval.
- Resolved the issue where executing an empty SQL statement in an order caused a program crash.
- Fixed issues in the migration script that did not process query data source information.
- Introduced LDAP test user option, improving LDAP test result feedback.
- Added LDAP user attribute mapping, enabling LDAP fields to be mapped into Yearning user fields. This allows LDAP users to log in and automatically update their real names, departments, and emails.
- Added query history feature, allowing users to copy previously executed SQL statements within the current session.
- Added a role for data source leaders, who will act as query auditors.
- Changed login background video to prevent dizziness.
- Introduced a debounce mechanism to optimize order submission, checking, and login actions, preventing multiple submissions from rapid clicks.

Yearning uses automatic table structure synchronization, so no manual updates are required. Simply **stop the existing service, replace the installation package, and then restart** to apply updates.

> In some specific upgrade situations (destructive changes), manual data synchronization is necessary. If the version update announcement doesn't mention destructive upgrades, you can ignore the following command:

```shell
./Yearning migrate
```

::: warning
#### Upgrading from Version 2.3.5 to 3.0.0

**Current RC version supports migration only from version 2.3.5**

1. Backup the original Yearning database.

2. Execute the **./migrate** binary file in the Yearning directory. Ensure this is done **before** starting Yearning!

3. Start Yearning normally.
:::

::: danger
In some new versions, there may be additional changes. Please close and reopen the Yearning page to log in again after the update.
Since processes, exclusion of databases, and desensitization logic have changed to be data source-based, modify configurations in the data sources after updating.
:::
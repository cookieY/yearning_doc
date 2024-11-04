<template><div><p>Click on the work order application page and select either DML, DDL, or Query based on your submission needs to submit a work order.</p>
<p><img src="/images/order01.png" alt="Work Order Submission"></p>
<p>Click the corresponding data source card to enter the work order submission page.</p>
<p><img src="/images/order02.png" alt="Work Order Submission Page"></p>
<p>Layout Overview:</p>
<ul>
<li>Left Side of the Page:
<ul>
<li>Fill in the work order information, with fields for Database and Work Order Description required.</li>
<li>After selecting the corresponding data table, click the <strong>Get Table Structure</strong> button to display the field and index information of the data table.</li>
<li>Scheduled Execution: This function relies on the local time on the server where Yearning is deployed. Synchronize the server time with local usage time to avoid errors. Additionally, since Yearning does not rely on third-party scheduling services, if Yearning crashes or restarts before the scheduled execution time, it will lose the schedule and the work order will not execute.</li>
<li>If the <strong>Rollback</strong> option is set to <strong>Yes</strong>, a rollback statement will be automatically generated and saved if the database supports binlog during the execution of the submitted SQL statement.</li>
</ul>
</li>
<li>Right Side of the Page:
<ul>
<li>Top Right SQL Editor Box: Enter the SQL statements to be submitted into this editor box. Use the right-click menu to select the <strong>SQL Check</strong> button for SQL statement verification or the <strong>SQL Beautify</strong> button for formatting.</li>
<li>Bottom Right Audit Results Area: Displays the inspection results of the SQL statement after clicking the SQL Check button.</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>When the focus is in the editor, use Ctrl/Cmd + E to trigger SQL check.</li>
<li>When the focus is in the editor, use Ctrl/Cmd + B to trigger SQL beautification.</li>
<li>The editor supports common text shortcuts.</li>
<li>The <strong>Submit</strong> button will only be enabled when all SQL statements have an <strong>Error Level</strong> of 0.</li>
</ul>
</div>
<h2 id="autotask" tabindex="-1"><a class="header-anchor" href="#autotask"><span>AutoTask</span></a></h2>
<p>Automatic Task Execution:</p>
<p>Users can set up automatic task execution with this feature. When the submitted DML statements meet the conditions of an automatic task, they will be executed automatically without reviewer approval.</p>
<p>This feature is only applicable for DML statements. Use with caution!</p>
</div></template>



<template><div><p>Navigate to the Approval -&gt; Work Orders page, select the work order you need to approve, and click the details button to access the work order approval details page.</p>
<p><img src="/images/audit01.png" alt="Work Order Approval Details"></p>
<p>Layout Overview:</p>
<ul>
<li>Upper Side of the Page:
<ul>
<li>Display of basic work order information</li>
<li>Approval buttons</li>
</ul>
</li>
<li>Lower Side of the Page:
<ul>
<li>Work order process and progress</li>
<li>SQL statement display, with options such as <strong>SQL Check</strong> for SQL statement verification or <strong>SQL Beautify</strong> for SQL statement formatting accessible from the right-click menu.</li>
<li>SQL statement approval results</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>When the focus is in the editor, use the Ctrl/Cmd + E shortcut to trigger SQL check.</li>
<li>When the focus is in the editor, use the Ctrl/Cmd + B shortcut to trigger SQL beautification.</li>
<li>The editor supports common text shortcuts.</li>
<li>The <strong>Approve</strong> button will only be activated when all <strong>Error Levels</strong> in the checked statements are 0.</li>
<li>After the final node personnel in the process have given their approval, Yearning will automatically execute the work order.</li>
</ul>
</div>
<h2 id="generating-rollback-work-orders" tabindex="-1"><a class="header-anchor" href="#generating-rollback-work-orders"><span>Generating Rollback Work Orders</span></a></h2>
<p><img src="/images/audit02.png" alt="Generate Rollback Work Order"></p>
<p>If the work order executes successfully and rollback statement generation is enabled, you can roll back the executed SQL by clicking the <strong>Submit Rollback Statement</strong> button in the <strong>Results Section</strong> of the work order details page. This will create a new work order (containing the rollback statement) that will follow the process through to execution.</p>
</div></template>



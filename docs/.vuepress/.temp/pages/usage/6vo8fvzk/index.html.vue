<template><div><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h3>
<p>Yearning focuses on the implementation of SQL statement audits and approval workflows. In typical scenarios, we aim to implement the following approval workflow:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Developer -> DBA reviews and executes</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>As the business grows and departmental levels increase, we may wish to have multi-level approval workflows:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Developer -> Development Manager Approval -> Project Leader Approval -> DBA Review and Execution (Multi-Level)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The above requirements and scenarios can be achieved using Yearning's custom workflow feature.</p>
<h3 id="creating-a-workflow" tabindex="-1"><a class="header-anchor" href="#creating-a-workflow"><span>Creating a Workflow</span></a></h3>
<p>Navigate to the <strong>Management-&gt;Processes</strong> page and click the &quot;New Process&quot; button.</p>
<p><img src="/images/newflow.png" alt="New Process Button"></p>
<p>Glossary:</p>
<ul>
<li>Process Name (as the name implies)</li>
<li>Stage Name (the name of the current set process stage)</li>
<li>Stage Type (type of the current stage, divided into two: 1. Review, 2. Execute)</li>
<li>Reviewers (assign the range of reviewers for the current stage, multiple selections allowed)</li>
<li>Add (click to add this stage to the process)</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Note! The last stage's step type in each process must be of <strong>Execute</strong> type; otherwise, the audit order under this process cannot be successfully completed and executed.</p>
<p>This process function is only applicable for order approval and does not support query approval.</p>
<p>Adding a step does not mean the process is successfully created; click the <strong>Save Button</strong> to save.</p>
<p>The intermediate stages (except the initial submission and final execution stage) currently support up to 5 levels.</p>
</div>
<h3 id="modifying-a-workflow" tabindex="-1"><a class="header-anchor" href="#modifying-a-workflow"><span>Modifying a Workflow</span></a></h3>
<p><img src="/images/newflow02.png" alt="Modify Workflow"></p>
<p>When adjustments to a particular stage's data are needed, click the <strong>Edit Button</strong> for that stage in the flowchart on the right.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Note that editing can only change the range of reviewers for a stage and does not support modifications to the stage type or name. To modify these two, remove the stage and add it again.</p>
</div>
<p>To change the position of a stage, select the stage you want to reposition and click <strong>Move Up / Move Down</strong> to change its position.</p>
<h2 id="apply-the-workflow-to-the-data-source" tabindex="-1"><a class="header-anchor" href="#apply-the-workflow-to-the-data-source"><span>Apply the Workflow to the Data Source</span></a></h2>
<p><img src="/images/flowtarget.png" alt="Apply Workflow"></p>
<p>After creating a workflow, go to Management-&gt;Data Sources, find the data source to which you want to assign the workflow, add the workflow to the data source, and click save.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>A data source is only allowed to submit approval orders once it has been assigned a workflow.</p>
</div>
</div></template>



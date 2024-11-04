<template><div><p>Yearning employs automatic table structure synchronization, eliminating the need for manual table structure updates. Simply <strong>stop the original service, replace the installation package, and restart</strong>.</p>
<blockquote>
<p>In some special upgrade situations (destructive changes), manual data synchronization may be required. If there is no destructive upgrade indicated in the version upgrade announcement, you can ignore the following command!</p>
</blockquote>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./Yearning</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> migrate</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<h4 id="updating-from-version-2-3-5-to-3-0-0" tabindex="-1"><a class="header-anchor" href="#updating-from-version-2-3-5-to-3-0-0"><span>Updating from Version 2.3.5 to 3.0.0</span></a></h4>
<p><strong>The current version only supports updates from version 2.3.5</strong></p>
<ol>
<li>
<p>Back up the original Yearning database.</p>
</li>
<li>
<p>Execute the <strong>./migrate</strong> binary file in the Yearning directory. Note that this must be executed <strong>before Yearning starts!</strong></p>
</li>
<li>
<p>Start Yearning normally.</p>
</li>
</ol>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>Due to the addition of new changes in some newer versions, please close the Yearning page and log in again after updating to use smoothly.</p>
<p>Since processes, database exclusion, and desensitization logic have been changed to be based on data sources, please update the configurations at the data source after updating.</p>
</div>
</div></template>



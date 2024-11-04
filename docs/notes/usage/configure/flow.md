---
title: Flow
createTime: 2024/11/04 15:53:52
permalink: /usage/6vo8fvzk/
---

### Introduction

Yearning focuses on the implementation of SQL statement audits and approval workflows. In typical scenarios, we aim to implement the following approval workflow:

```
Developer -> DBA reviews and executes
```

As the business grows and departmental levels increase, we may wish to have multi-level approval workflows:

```
Developer -> Development Manager Approval -> Project Leader Approval -> DBA Review and Execution (Multi-Level)
```

The above requirements and scenarios can be achieved using Yearning's custom workflow feature.

### Creating a Workflow

Navigate to the **Management->Processes** page and click the "New Process" button.

![New Process Button](/images/newflow.png)

Glossary:

+ Process Name (as the name implies)
+ Stage Name (the name of the current set process stage)
+ Stage Type (type of the current stage, divided into two: 1. Review, 2. Execute)
+ Reviewers (assign the range of reviewers for the current stage, multiple selections allowed)
+ Add (click to add this stage to the process)

::: warning
Note! The last stage's step type in each process must be of **Execute** type; otherwise, the audit order under this process cannot be successfully completed and executed.

This process function is only applicable for order approval and does not support query approval.

Adding a step does not mean the process is successfully created; click the **Save Button** to save.

The intermediate stages (except the initial submission and final execution stage) currently support up to 5 levels.
:::

### Modifying a Workflow

![Modify Workflow](/images/newflow02.png)

When adjustments to a particular stage's data are needed, click the **Edit Button** for that stage in the flowchart on the right.

::: tip
Note that editing can only change the range of reviewers for a stage and does not support modifications to the stage type or name. To modify these two, remove the stage and add it again.
:::

To change the position of a stage, select the stage you want to reposition and click **Move Up / Move Down** to change its position.

## Apply the Workflow to the Data Source

![Apply Workflow](/images/flowtarget.png)

After creating a workflow, go to Management->Data Sources, find the data source to which you want to assign the workflow, add the workflow to the data source, and click save.

::: tip
A data source is only allowed to submit approval orders once it has been assigned a workflow.
:::
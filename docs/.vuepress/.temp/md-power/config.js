import { defineClientConfig } from 'vuepress/client'
import Tabs from '/root/guide/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/root/guide/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/root/guide/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/root/guide/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import '/root/guide/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})

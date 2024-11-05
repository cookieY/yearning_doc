import CodeDemo from "/Users/henryyee/PersonalProjects/guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.5_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/henryyee/PersonalProjects/guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.5_typescript@5.6.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};

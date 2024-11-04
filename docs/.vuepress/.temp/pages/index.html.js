import comp from "/root/guide/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Yearning\",\"tagline\":\"\",\"text\":\"Out-of-the-box MySQL SQL Review Tool: Ready to Roll with No Hassles!\",\"actions\":[{\"theme\":\"brand\",\"text\":\"Get Started\",\"link\":\"/zh/usage/ptbzchak/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/cookieY/Yearning\"}]}}]},\"headers\":[],\"readingTime\":{\"minutes\":0.15,\"words\":46},\"filePathRelative\":\"README.md\",\"categoryList\":[],\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

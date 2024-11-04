import comp from "/Users/henryyee/PersonalProjects/yearning_guide/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Yearning\",\"tagline\":\"\",\"text\":\"开箱即用的MYSQL SQL审核工具\",\"actions\":[{\"theme\":\"brand\",\"text\":\"立即上手\",\"link\":\"/zh/usage/ptbzchak/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/cookieY/Yearning\"}]}}]},\"headers\":[],\"readingTime\":{\"minutes\":0.15,\"words\":45},\"filePathRelative\":\"zh/README.md\",\"categoryList\":[],\"bulletin\":false}")
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

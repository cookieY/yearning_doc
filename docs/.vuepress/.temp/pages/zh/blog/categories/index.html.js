import comp from "/root/guide/docs/.vuepress/.temp/pages/zh/blog/categories/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/blog/categories/\",\"title\":\"分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"分类\",\"draft\":true},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"type\":\"blog-categories\",\"bulletin\":false}")
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

export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.png\"}]],\"locales\":{\"/\":{\"title\":\"Yearning Guide\",\"lang\":\"en-US\",\"description\":\"Get started with Yearning\"},\"/zh/\":{\"title\":\"Yearning Guide\",\"lang\":\"zh-CN\",\"description\":\"Get started with Yearning\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

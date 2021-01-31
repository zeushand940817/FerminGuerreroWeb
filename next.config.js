module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/graphicDesign': { page: '/graphicDesign' },
      '/allProjects': { page: '/allProjects' },
      '/info': { page: '/info' },
      '/projects/[slug]': { page: '/projects/[slug]' },
      '/tag/[tag]': { page: '/tag/[tag]' },
      '/typefaceDesign': { page: '/typefaceDesign' },
      '/404': { page: '/404' },
    }
  },
}

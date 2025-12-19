/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://saviacademy.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/private'],
      },
    ],
    additionalSitemaps: [
      'https://saviacademy.in/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  generateIndexSitemap: true,
  outDir: 'public',
}

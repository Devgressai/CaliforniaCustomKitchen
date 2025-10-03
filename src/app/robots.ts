import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '*.pdf',
          '/thank-you',
          '/contact-success'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/thank-you',
          '/contact-success'
        ]
      }
    ],
    sitemap: 'https://california-custom-kitchen.vercel.app/sitemap.xml',
    host: 'https://california-custom-kitchen.vercel.app'
  }
}

import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cannalifenj.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://cannalifenj.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   
  ]
}
import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    return [
        {
          url: `${process.env.BASE_URL}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        {
            url: `${process.env.BASE_URL}/checkup`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
          url: `${process.env.BASE_URL}/forum`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.9,
        },
        {
          url: `${process.env.BASE_URL}/about-us`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${process.env.BASE_URL}/events`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${process.env.BASE_URL}/privacy-policy`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
      ]
}
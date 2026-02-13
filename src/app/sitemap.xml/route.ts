import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://somossena.com";

  const pages = [
    { path: "", priority: "1.0" },
    { path: "term", priority: "0.8" },
    { path: "privacy", priority: "0.8" },
    { path: "nosotros", priority: "0.8" },
    { path: "servicios-basicos", priority: "0.8" },
    { path: "contactanos", priority: "0.8" },
    { path: "tech-beauty", priority: "0.8" },
    { path: "intercom", priority: "0.8" },
    { path: "telco", priority: "0.8" },
    { path: "maquinarias", priority: "0.8" },
    { path: "autopistas", priority: "0.8" },
    { path: "inmobiliarias", priority: "0.8" },
    { path: "family-office", priority: "0.8" },
    { path: "blog", priority: "0.8" },
  ];

  const urlsXml = pages
    .map(
      ({ path, priority }) => `
      <url>
        <loc>${baseUrl}${path ? `/${path}` : ""}</loc>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
      </url>
    `,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

interface NewsItem {
  title: string;
  link: string;
  source: string;
}

/* -----------------------------
   Utility: Fetch HTML safely
------------------------------ */
async function fetchHTML(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      Accept: "text/html",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return res.text();
}

/* -----------------------------
   Income Tax – Latest News
------------------------------ */
async function getIncomeTaxNews(): Promise<NewsItem[]> {
  const html = await fetchHTML(
    "https://www.incometax.gov.in/iec/foportal/latest-news"
  );

  const $ = cheerio.load(html);
  const items: NewsItem[] = [];

  $(".view-content .views-row").each((_, el) => {
    const title = $(el).find("a").text().trim();
    const link = $(el).find("a").attr("href");

    if (title && link) {
      items.push({
        title,
        link: link.startsWith("http")
          ? link
          : `https://www.incometax.gov.in${link}`,
        source: "Income Tax Department",
      });
    }
  });

  return items.slice(0, 6);
}

/* -----------------------------
   MCA – Latest News
------------------------------ */
async function getMCANews(): Promise<NewsItem[]> {
  const html = await fetchHTML(
    "https://www.mca.gov.in/content/mca/global/en/notifications-tender/news-updates/latest-news.html"
  );

  const $ = cheerio.load(html);
  const items: NewsItem[] = [];

  $("ul.list li a").each((_, el) => {
    const title = $(el).text().trim();
    const link = $(el).attr("href");

    if (title && link) {
      items.push({
        title,
        link: link.startsWith("http")
          ? link
          : `https://www.mca.gov.in${link}`,
        source: "MCA (Ministry of Corporate Affairs)",
      });
    }
  });

  return items.slice(0, 6);
}

/* -----------------------------
   API Handler
------------------------------ */
export async function GET() {
  try {
    const [incomeTax, mca] = await Promise.all([
      getIncomeTaxNews(),
      getMCANews(),
    ]);

    const allNews = [...incomeTax, ...mca];

    return NextResponse.json(allNews, {
      headers: {
        "Cache-Control": "s-maxage=21600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json([]);
  }
}

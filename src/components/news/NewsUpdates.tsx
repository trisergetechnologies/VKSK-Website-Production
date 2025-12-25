"use client";

import { FadeIn } from "@/components/animations";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

interface NewsItem {
  title: string;
  link: string;
  source: string;
  pubDate?: string;
}

const CA_KEYWORDS = [
  "gst",
  "income tax",
  "income-tax",
  "tax return",
  "itr",
  "tds",
  "icai",
  "mca",
  "cbdt",
  "cbic",
  "direct tax",
  "indirect tax",
  "gst council",
];

function isCARelevant(item: any) {
  const text = `${item.title || ""} ${item.description || ""}`.toLowerCase();
  return CA_KEYWORDS.some(k => text.includes(k));
}

export default function NewsUpdates() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const NEXT_PUBLIC_NEWSDATA_API_KEY =
    "pub_953bf42177934deeb8325d226174dfec";

  useEffect(() => {
    const fetchLastCANews = async () => {
      try {
        let collected: NewsItem[] = [];
        let page: string | null = null;

        while (collected.length < 6) {
          const url = new URL("https://newsdata.io/api/1/news");
          url.searchParams.set("apikey", NEXT_PUBLIC_NEWSDATA_API_KEY);
          url.searchParams.set("language", "en");
          url.searchParams.set("q", "tax");
          if (page) url.searchParams.set("page", page);

          const res = await fetch(url.toString());
          const data = await res.json();

          if (!Array.isArray(data.results)) break;

          for (const item of data.results) {
            if (isCARelevant(item)) {
              collected.push({
                title: item.title,
                link: item.link,
                source: item.source_id?.toUpperCase() || "GOVT UPDATE",
                pubDate: item.pubDate,
              });
            }
            if (collected.length === 6) break;
          }

          if (!data.nextPage) break;
          page = data.nextPage;
        }

        setNews(collected);
      } catch {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLastCANews();
  }, []);

  return (
    <section
      id="news-updates"
      className="py-20 px-4 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container mx-auto">
        <FadeIn>
          <Typography variant="h2" className="text-center font-bold mb-4">
            News & Updates
          </Typography>
          <Typography className="text-center text-gray-600 mb-12">
            Latest Income Tax, GST, ICAI & MCA updates.
          </Typography>
        </FadeIn>

        {loading ? (
          <p className="text-center text-gray-500">Loading updates…</p>
        ) : news.length === 0 ? (
          <p className="text-center text-gray-500">
            No recent CA-related updates available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <NewsCard {...item} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

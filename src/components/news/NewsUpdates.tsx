"use client";

import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import NewsCard from "./NewsCard";
import { FadeIn } from "@/components/animations";

interface NewsItem {
  title: string;
  link: string;
  source: string;
}

export default function NewsUpdates() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          setNews([]);
        }
      })
      .catch(() => setNews([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
    id="news-updates"
    className="py-20 px-4 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <FadeIn>
          <Typography variant="h2" className="text-center font-bold mb-4">
            News & Updates
          </Typography>
          <Typography className="text-center text-gray-600 mb-12">
            Latest announcements from Income Tax Department and MCA.
          </Typography>
        </FadeIn>

        {loading ? (
          <p className="text-center text-gray-500">Loading updates…</p>
        ) : news.length === 0 ? (
          <p className="text-center text-gray-500">
            Updates will appear here as soon as official notifications are released.
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

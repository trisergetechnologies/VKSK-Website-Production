import { Card, Typography } from "@material-tailwind/react";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  link: string;
  source: string;
  pubDate?: string;
}

export default function NewsCard({
  title,
  link,
  source,
  pubDate,
}: NewsCardProps) {
  return (
    <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between">
      {/* Title & Meta */}
      <div>
        <Typography className="font-medium text-gray-900 mb-2 line-clamp-3">
          {title}
        </Typography>

        {pubDate && (
          <Typography className="text-xs text-gray-500 mb-4">
            {new Date(pubDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </Typography>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Typography className="text-xs text-gray-400 mb-2">
          Source: {source}
        </Typography>

        <Link
          href={link}
          target="_blank"
          className="text-primary font-medium hover:underline text-sm"
        >
          Read more →
        </Link>
      </div>
    </Card>
  );
}

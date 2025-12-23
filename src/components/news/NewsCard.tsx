import Link from "next/link";
import { Card, Typography } from "@material-tailwind/react";

interface NewsCardProps {
  title: string;
  link: string;
  source: string;
}

export default function NewsCard({ title, link, source }: NewsCardProps) {
  return (
    <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-all border border-gray-100">
      <Typography className="text-sm text-primary font-semibold mb-2">
        {source}
      </Typography>

      <Typography className="font-medium mb-4 line-clamp-3">
        {title}
      </Typography>

      <Link
        href={link}
        target="_blank"
        className="text-primary font-semibold hover:underline"
      >
        Read more →
      </Link>
    </Card>
  );
}

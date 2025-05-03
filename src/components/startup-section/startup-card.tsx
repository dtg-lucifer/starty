import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StartupData } from "~/data/mock-startup-data";
import { formatDate } from "~/utils/format-date";

export const StartupCard = ({ post }: { post: StartupData }) => {
  return (
    <Link href={`/startup/${post._id}`} className="startup-card_link">
      <div className="group">
        <div className="startup-card">
          {/* Date display */}
          <p className="startup-card_date">
            {formatDate(post._createdAt)}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-2 mt-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-medium text-sm">{post.author.name}</p>
          </div>

          {/* Title */}
          <h2 className="mt-3 font-bold text-xl">{post.title}</h2>

          {/* Description */}
          <p className="startup-card_desc">{post.desctiption}</p>

          {/* Image */}
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={150}
            className="startup-card_img"
          />

          {/* Footer with category, view count and button */}
          <div className="flex justify-between items-center mt-4">
            <p className="category-tag">{post.category}</p>
            <div className="flex items-center gap-2">
              <Eye />
              <span>{post.views}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

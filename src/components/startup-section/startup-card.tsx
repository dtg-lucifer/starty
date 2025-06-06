import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StartupData } from "~/data/mock-startup-data";

export const StartupCard = ({ post }: { post: StartupData }) => {
  return (
    <Link href={`/startup/${post._id}`} className="startup-card_link">
      <div className="group">
        <div className="startup-card">
          {/* Date display has been removed since _createdAt is no longer in the type */}

          {/* Author info */}
          <div className="flex items-center gap-2 mt-4">
            <Image
              src={post.author.image}
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
          <p className="startup-card_desc">{post.description}</p>

          {/* Image */}
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={150}
            className="startup-card_img"
          />

          {/* Footer with slug and view count */}
          <div className="flex justify-between items-center mt-4">
            <p className="category-tag">{post.slug.current}</p>
            <div className="flex items-center gap-2">
              <Eye />
              <span>{post.view || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

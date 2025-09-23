import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  imageUrl?: string;
  featured?: boolean;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  category,
  tags,
  likes,
  comments,
  imageUrl,
  featured = false,
}: ArticleCardProps) => {
  return (
    <article 
      className={`group bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <Link to={`/article/${id}`} className="block">
        {/* Article Image */}
        {imageUrl && (
          <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-48"}`}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Category Badge */}
            <Badge 
              variant="secondary" 
              className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
            >
              {category}
            </Badge>
            
            {featured && (
              <Badge 
                variant="default" 
                className="absolute top-4 right-4 bg-accent-warm text-accent-warm-foreground"
              >
                Featured
              </Badge>
            )}
          </div>
        )}

        {/* Article Content */}
        <div className="p-6 space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title & Excerpt */}
          <div className="space-y-2">
            <h3 className={`font-semibold leading-tight group-hover:text-accent-warm transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}>
              {title}
            </h3>
            <p className={`text-muted-foreground leading-relaxed ${
              featured ? "text-base" : "text-sm"
            }`}>
              {excerpt}
            </p>
          </div>

          {/* Author & Meta */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium">{author.name}</p>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{publishedAt}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{comments}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;